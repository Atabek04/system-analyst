#!/usr/bin/env python3
"""Render each frame of the deck to img/frame-NN.png (readable per-slide validation).

The full-deck SVG is too large for Chromium to screenshot in one shot, so we
extract each frame's children, normalize to origin, and render individually
using the skill's render_excalidraw.py. Pass frame numbers to render a subset:
    python render_frames.py            # all frames
    python render_frames.py 1 3 9 12   # just these
"""
import json, os, sys, subprocess, tempfile, copy

HERE = os.path.dirname(__file__)
DECK = os.path.join(HERE, "..", "domain-model.excalidraw")
IMG = os.path.join(HERE, "..", "img")
RENDER = os.path.join(HERE, "..", "..", "..", ".claude", "skills",
                      "excalidraw-diagram", "references", "render_excalidraw.py")
RENDER_DIR = os.path.dirname(RENDER)

os.makedirs(IMG, exist_ok=True)
deck = json.load(open(DECK, encoding="utf-8"))
frames = [e for e in deck["elements"] if e["type"] == "frame"]
want = set(int(a) for a in sys.argv[1:]) if len(sys.argv) > 1 else None

for idx, fr in enumerate(frames, 1):
    if want and idx not in want:
        continue
    fid = fr["id"]
    kids = [copy.deepcopy(e) for e in deck["elements"]
            if e.get("frameId") == fid and e["type"] != "frame"]
    # normalise to frame origin with small margin
    ox, oy = fr["x"], fr["y"]
    for e in kids:
        e["x"] -= ox; e["y"] -= oy
        e["frameId"] = None
    # frame backdrop as a plain rectangle so slide bounds are visible
    backdrop = {"type": "rectangle", "id": "bg", "x": 0, "y": 0,
                "width": fr["width"], "height": fr["height"], "angle": 0,
                "strokeColor": "#ced4da", "backgroundColor": "#ffffff",
                "fillStyle": "solid", "strokeWidth": 1, "strokeStyle": "solid",
                "roughness": 0, "opacity": 100, "groupIds": [], "frameId": None,
                "roundness": None, "seed": 1, "version": 1, "versionNonce": 1,
                "isDeleted": False, "boundElements": [], "updated": 1,
                "link": None, "locked": False}
    one = {"type": "excalidraw", "version": 2, "source": "https://excalidraw.com",
           "elements": [backdrop] + kids,
           "appState": {"viewBackgroundColor": "#ffffff", "gridSize": None}, "files": {}}
    tmp = os.path.join(tempfile.gettempdir(), f"dm_frame_{idx:02d}.excalidraw")
    json.dump(one, open(tmp, "w", encoding="utf-8"), ensure_ascii=False)
    out = os.path.join(IMG, f"frame-{idx:02d}.png")
    r = subprocess.run(["uv", "run", "python", RENDER, tmp, "-o", out],
                       cwd=RENDER_DIR, capture_output=True, text=True)
    print(f"frame {idx:02d} ({fr['name']}): {'OK' if r.returncode==0 else 'FAIL '+r.stderr[-200:]}")
