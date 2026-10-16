---
name: embed-asset
description: Embed a font, icon, or image into the app theme as a base64 data URI. Use when the user wants a custom font or image in New Dark, because remote assets are forbidden.
---

# Embed an asset in the theme

Community themes must make no network calls, so every font and image is embedded as `url("data:<MIME>;base64,<DATA>")`. Never embed assets in `src/publish.scss`.

1. Confirm the asset's license allows redistribution, and record it in the README. Prefer WOFF2 for fonts and optimized SVG for icons, because size directly slows theme downloads and Obsidian startup.
2. Encode the file with Node into a partial, for example `node -e "console.log(require('fs').readFileSync(process.argv[1]).toString('base64'))" path/to/font.woff2`, and write the result into a new partial such as `src/assets/_fonts.scss` inside an `@font-face` block (`font-display: swap`, matching `font-family` used in `--font-text-theme`).
3. Add the partial to `src/theme.scss` with `@use`.
4. Run `npm run verify`. The check script fails on any `url()` that is not a `data:` URI and warns when `theme.css` exceeds 1 MB.

Keep the original binary files out of the repo root, or in an `assets/` folder that is never referenced from CSS.
