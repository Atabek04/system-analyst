"""Patched renderer: ignore TLS interception (corporate proxy) so the in-browser
esm.sh import can load. Delegates bounding-box/validation logic to render_excalidraw.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from render_excalidraw import validate_excalidraw, compute_bounding_box


def render(excalidraw_path: Path, scale: int = 2, max_width: int = 1920) -> Path:
    from playwright.sync_api import sync_playwright

    data = json.loads(excalidraw_path.read_text(encoding="utf-8"))
    errors = validate_excalidraw(data)
    if errors:
        for err in errors:
            print(f"  - {err}", file=sys.stderr)
        sys.exit(1)

    elements = [e for e in data["elements"] if not e.get("isDeleted")]
    min_x, min_y, max_x, max_y = compute_bounding_box(elements)
    padding = 80
    vp_width = min(int(max_x - min_x + padding * 2), max_width)
    vp_height = max(int(max_y - min_y + padding * 2), 600)

    output_path = excalidraw_path.with_suffix(".png")
    template_url = (Path(__file__).parent / "render_template.html").as_uri()

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=True,
            args=["--ignore-certificate-errors"],
        )
        context = browser.new_context(
            viewport={"width": vp_width, "height": vp_height},
            device_scale_factor=scale,
            ignore_https_errors=True,
        )
        page = context.new_page()
        page.goto(template_url)
        page.wait_for_function("window.__moduleReady === true", timeout=120000)
        result = page.evaluate(f"window.renderDiagram({json.dumps(data)})")
        if not result or not result.get("success"):
            print(f"ERROR: {result.get('error') if result else 'null'}", file=sys.stderr)
            browser.close()
            sys.exit(1)
        page.wait_for_function("window.__renderComplete === true", timeout=15000)
        svg_el = page.query_selector("#root svg")
        if svg_el is None:
            print("ERROR: no SVG", file=sys.stderr)
            browser.close()
            sys.exit(1)
        svg_el.screenshot(path=str(output_path))
        browser.close()
    return output_path


if __name__ == "__main__":
    png = render(Path(sys.argv[1]))
    print(str(png))
