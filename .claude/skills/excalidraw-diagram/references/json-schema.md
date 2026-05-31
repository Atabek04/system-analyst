# Excalidraw JSON Schema

## Element Types

| Type | Use For |
|------|---------|
| `rectangle` | Processes, actions, components |
| `ellipse` | Entry/exit points, external systems |
| `diamond` | Decisions, conditionals |
| `arrow` | Connections between shapes |
| `text` | Labels inside shapes |
| `line` | Non-arrow connections |
| `frame` | Slide containers — one frame per slide in a deck (see Frame Element below) |

## Common Properties

All elements share these:

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier |
| `type` | string | Element type |
| `x`, `y` | number | Position in pixels |
| `width`, `height` | number | Size in pixels |
| `strokeColor` | string | Border color (hex) |
| `backgroundColor` | string | Fill color (hex or "transparent") |
| `fillStyle` | string | "solid", "hachure", "cross-hatch" |
| `strokeWidth` | number | 1, 2, or 4 |
| `strokeStyle` | string | "solid", "dashed", "dotted" |
| `roughness` | number | 0 (smooth), 1 (default), 2 (rough) |
| `opacity` | number | 0-100 |
| `seed` | number | Random seed for roughness |

## Text-Specific Properties

| Property | Description |
|----------|-------------|
| `text` | The display text |
| `originalText` | Same as text |
| `fontSize` | Size in pixels (diagrams 12-20; slides 18-48 — see slide-decks.md scale) |
| `fontFamily` | 3 = code/monospace (use this everywhere for consistency); 1 = hand-drawn, 2 = normal |
| `textAlign` | "left", "center", "right" |
| `verticalAlign` | "top", "middle", "bottom" |
| `containerId` | ID of parent shape |
| `frameId` | ID of the frame (slide) this text belongs to — required for slide-deck elements |

## Arrow-Specific Properties

| Property | Description |
|----------|-------------|
| `points` | Array of [x, y] coordinates |
| `startBinding` | Connection to start shape |
| `endBinding` | Connection to end shape |
| `startArrowhead` | null, "arrow", "bar", "dot", "triangle" |
| `endArrowhead` | null, "arrow", "bar", "dot", "triangle" |

## Binding Format

```json
{
  "elementId": "shapeId",
  "focus": 0,
  "gap": 2
}
```

## Rectangle Roundness

Add for rounded corners:
```json
"roundness": { "type": 3 }
```

## Frame Element (Slides)

A `frame` is a slide container. Each frame is one slide; presentation order follows canvas position
(left→right, then top→bottom), **not** array order. Lay frames out on a grid (see `slide-decks.md`).

| Property | Description |
|----------|-------------|
| `type` | `"frame"` |
| `name` | Slide label, e.g. `"03 · Concept · SELECT"` (encode order + type + topic) |
| `x`, `y` | Frame origin on the canvas (grid position) |
| `width`, `height` | Slide size — use **1600 × 900** (16:9) for every frame |

Any element that belongs to a slide must carry `"frameId": "<frame id>"` and use **absolute canvas
coordinates** (frame origin + offset). See `element-templates.md` → "Frame (slide)".
