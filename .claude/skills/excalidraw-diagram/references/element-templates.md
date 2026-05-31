# Element Templates

Copy-paste JSON templates for each Excalidraw element type. The `strokeColor` and `backgroundColor` values are placeholders — always pull actual colors from `color-palette.md` based on the element's semantic purpose.

## Free-Floating Text (no container)
```json
{
  "type": "text",
  "id": "label1",
  "x": 100, "y": 100,
  "width": 200, "height": 25,
  "text": "Section Title",
  "originalText": "Section Title",
  "fontSize": 20,
  "fontFamily": 3,
  "textAlign": "left",
  "verticalAlign": "top",
  "strokeColor": "<title color from palette>",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 11111,
  "version": 1,
  "versionNonce": 22222,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "containerId": null,
  "lineHeight": 1.25
}
```

## Line (structural, not arrow)
```json
{
  "type": "line",
  "id": "line1",
  "x": 100, "y": 100,
  "width": 0, "height": 200,
  "strokeColor": "<structural line color from palette>",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 44444,
  "version": 1,
  "versionNonce": 55555,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "points": [[0, 0], [0, 200]]
}
```

## Small Marker Dot
```json
{
  "type": "ellipse",
  "id": "dot1",
  "x": 94, "y": 94,
  "width": 12, "height": 12,
  "strokeColor": "<marker dot color from palette>",
  "backgroundColor": "<marker dot color from palette>",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 66666,
  "version": 1,
  "versionNonce": 77777,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false
}
```

## Rectangle
```json
{
  "type": "rectangle",
  "id": "elem1",
  "x": 100, "y": 100, "width": 180, "height": 90,
  "strokeColor": "<stroke from palette based on semantic purpose>",
  "backgroundColor": "<fill from palette based on semantic purpose>",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 12345,
  "version": 1,
  "versionNonce": 67890,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": [{"id": "text1", "type": "text"}],
  "link": null,
  "locked": false,
  "roundness": {"type": 3}
}
```

## Text (centered in shape)
```json
{
  "type": "text",
  "id": "text1",
  "x": 130, "y": 132,
  "width": 120, "height": 25,
  "text": "Process",
  "originalText": "Process",
  "fontSize": 16,
  "fontFamily": 3,
  "textAlign": "center",
  "verticalAlign": "middle",
  "strokeColor": "<text color — match parent shape's stroke or use 'on light/dark fills' from palette>",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 11111,
  "version": 1,
  "versionNonce": 22222,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "containerId": "elem1",
  "lineHeight": 1.25
}
```

## Arrow
```json
{
  "type": "arrow",
  "id": "arrow1",
  "x": 282, "y": 145, "width": 118, "height": 0,
  "strokeColor": "<arrow color — typically matches source element's stroke from palette>",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 33333,
  "version": 1,
  "versionNonce": 44444,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "points": [[0, 0], [118, 0]],
  "startBinding": {"elementId": "elem1", "focus": 0, "gap": 2},
  "endBinding": {"elementId": "elem2", "focus": 0, "gap": 2},
  "startArrowhead": null,
  "endArrowhead": "arrow"
}
```

For curves: use 3+ points in `points` array.

---

# Slide Deck Templates

For building lecture/presentation decks where each frame is a slide. See `slide-decks.md` for the
full methodology (grid layout, safe zones, typography scale, slide types).

## Frame (slide)
One frame = one slide. Size 1600×900. Lay frames on a grid; order follows canvas position.
```json
{
  "type": "frame",
  "id": "slide1",
  "x": 0, "y": 0,
  "width": 1600, "height": 900,
  "name": "01 · Title · SQL Basics",
  "strokeColor": "#bbbbbb",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 100001,
  "version": 1,
  "versionNonce": 100002,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "roundness": null
}
```
Every element on this slide must include `"frameId": "slide1"` and use absolute canvas coordinates
(frame origin + offset, inside the 100px safe margin).

## Slide title
Large heading in the title band. Place at frame origin + (100, 80).
```json
{
  "type": "text",
  "id": "slide1_title",
  "x": 100, "y": 100,
  "width": 1400, "height": 60,
  "text": "Заголовок слайда",
  "originalText": "Заголовок слайда",
  "fontSize": 48,
  "fontFamily": 3,
  "textAlign": "left",
  "verticalAlign": "top",
  "strokeColor": "<Title color from palette>",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 100010,
  "version": 1,
  "versionNonce": 100011,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "frameId": "slide1",
  "containerId": null,
  "lineHeight": 1.25
}
```

## Bullet list item
One text element per bullet (preferred — clean alignment, no clipping). Stack with a ~48px vertical
pitch for 26px text. The `•`/`→`/`✓` glyph lives inside the `text`. Optionally anchor with a marker
dot to the left (use the "Small Marker Dot" template above with a `frameId`).
```json
{
  "type": "text",
  "id": "slide1_bullet1",
  "x": 140, "y": 300,
  "width": 1320, "height": 34,
  "text": "•  Первый пункт — короткий, как заголовок",
  "originalText": "•  Первый пункт — короткий, как заголовок",
  "fontSize": 26,
  "fontFamily": 3,
  "textAlign": "left",
  "verticalAlign": "top",
  "strokeColor": "<On-light color from palette>",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 100020,
  "version": 1,
  "versionNonce": 100021,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "frameId": "slide1",
  "containerId": null,
  "lineHeight": 1.25
}
```

## Code / syntax block (slide)
Dark rounded rectangle + monospace text on top, centered in the body. Use evidence-artifact colors
from `color-palette.md`. The rectangle and the text are two elements, both with `frameId`.
```json
{
  "type": "rectangle",
  "id": "slide1_code_bg",
  "x": 300, "y": 320, "width": 1000, "height": 260,
  "strokeColor": "#0f172a",
  "backgroundColor": "#1e293b",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 100030,
  "version": 1,
  "versionNonce": 100031,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "frameId": "slide1",
  "roundness": {"type": 3}
}
```
Put the code text (fontSize 22, fontFamily 3, textAlign "left", green `#22c55e` or syntax colors) as
a separate text element positioned inside this rectangle, also carrying `"frameId": "slide1"`.

## Footer / page number
Small, quiet, bottom-right.
```json
{
  "type": "text",
  "id": "slide1_pagenum",
  "x": 1420, "y": 840,
  "width": 80, "height": 22,
  "text": "1",
  "originalText": "1",
  "fontSize": 18,
  "fontFamily": 3,
  "textAlign": "right",
  "verticalAlign": "top",
  "strokeColor": "<Body/Detail color from palette>",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "angle": 0,
  "seed": 100040,
  "version": 1,
  "versionNonce": 100041,
  "isDeleted": false,
  "groupIds": [],
  "boundElements": null,
  "link": null,
  "locked": false,
  "frameId": "slide1",
  "containerId": null,
  "lineHeight": 1.25
}
```
