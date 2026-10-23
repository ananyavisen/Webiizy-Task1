# Dropbox Sign landing page recreation

A static HTML/CSS/JavaScript recreation based on the three supplied screenshots.

## Run it
1. Extract the ZIP.
2. Open `index.html` in a browser, or use VS Code Live Server.
3. The stylesheet now requests the reference font families `SharpGroteskDB20` and `AtlasGrotesk`. The actual font files are not bundled yet, so the browser will use the declared sans-serif fallback until the complete original font URLs/files are supplied.

## Files
- `index.html` — page structure and custom inline SVG icons
- `styles.css` — colors, layout, typography, responsive rules
- `script.js` — mobile navigation and chat button interactions

## Fidelity note
The supplied screenshots are the visual reference. This is a careful first-pass recreation, not Dropbox's original source code. The hero document illustration and integration marks are approximations built from HTML/CSS/SVG; exact source artwork and the original Dropbox typeface would be needed for a true pixel-perfect match. The target screenshots are approximately 1900px wide.
