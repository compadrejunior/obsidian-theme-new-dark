# How styling works

This page explains the mechanics behind the variable reference: where to define a value, how light and dark mode interact, and how to discover a variable the reference does not list.

## Override variables, not elements

Obsidian builds its interface from CSS variables, so changing a variable restyles every element that uses it. Prefer this over writing selectors, because it survives Obsidian updates and keeps the theme small. Write a selector only when no variable controls the property you need.

## Where to define a value

| Selector | Use it for | Example |
| --- | --- | --- |
| `body` | Values that are the same in light and dark mode, such as fonts, spacing, and radiuses. | `--font-text-theme`, `--radius-m`, `--file-line-width` |
| `.theme-dark` | Values that only apply in dark mode, mostly colors. | `--background-primary`, `--text-normal` |
| `.theme-light` | Values that only apply in light mode, mostly colors. | `--background-primary`, `--text-normal` |
| `:root` | A last resort, for variables that do not take effect under `body`. | `--input-hover-border-color` |
| `.published-container` | Obsidian Publish only, for variables that do not change with the color scheme. | `--page-width`, `--page-side-padding` |

Obsidian puts the `theme-dark` or `theme-light` class on the `body` element based on the Base color scheme chosen in Settings, then Appearance. A theme must define every color in both blocks with identical variable names, so toggling the scheme never leaves a surface unstyled.

## Layers of color

Colors are built in layers, and overriding a lower layer changes everything above it.

1. **Base scale.** The neutral `--color-base-00` to `--color-base-100` ramp, from lightest to darkest in light mode. Themes typically define these, and Obsidian derives surfaces and text colors from them.
2. **Accent.** Set `--accent-h`, `--accent-s`, and `--accent-l` rather than a single color. Obsidian combines them into `--color-accent`, `--color-accent-1`, and `--color-accent-2`, and uses those for links, primary buttons, and hover and active states. Users can also override the accent in Appearance settings.
3. **Extended colors.** `--color-red`, `--color-orange`, `--color-yellow`, `--color-green`, `--color-cyan`, `--color-blue`, `--color-purple`, and `--color-pink` feed status messages, callouts, syntax highlighting, graph nodes, and Canvas.
4. **Semantic colors.** Names like `--background-primary`, `--background-secondary`, `--text-normal`, `--text-muted`, `--interactive-accent`, and `--background-modifier-border` describe the role of a color. Components consume these.
5. **Component variables.** Names like `--tab-text-color`, `--ribbon-background`, and `--callout-color` target one component and usually default to a semantic color.

Override at the layer that matches the scope of your change. A palette change belongs in the base scale and accent, and a single tweaked component belongs in its own variable.

## Translucent colors

Since Obsidian 1.13 colors are mixed in the OKLCH color space, and the `-rgb` and `-hsl` companion variables are deprecated. Build a translucent color with `color-mix`:

```css
background-color: color-mix(in oklch, var(--color-red) 20%, transparent);
```

Older themes used `rgba(var(--color-red-rgb), 0.2)`. That still works for compatibility, but new code should avoid it. The [variable index](variable-index.md) flags every deprecated variable.

## Spacing and sizing

Obsidian lays out the interface on a 4 pixel grid, with an extra 2 pixel grid for fine adjustments. Use the `--size-*` variables for padding, margins, and dimensions instead of raw pixel values. See [Spacing](css-variables/foundations/spacing.md).

## Fonts

Editor content uses the relative `--font-*` size variables, and interface elements use the fixed `--font-ui-*` variables. Font families are set through `--font-text-theme`, `--font-interface-theme`, and `--font-monospace-theme`. To change the weight of bold text use `--bold-modifier`. See [Typography](css-variables/foundations/typography.md).

## Find a variable that is not documented

1. Open Developer Tools in Obsidian with `Ctrl+Shift+I` on Windows and Linux, or `Cmd+Option+I` on macOS.
2. Use the element picker (the cursor-on-rectangle icon), click the element, and read the Styles tab. A line such as `background-color: var(--ribbon-background)` names the variable.
3. In the Sources tab, open `app.css` under `obsidian.md`. Variable definitions sit at the top of the file.
4. Search for a prefix with spaces on both sides, for example ` --ribbon- `, so the results show definitions rather than uses.

## Test in both modes

After every change, toggle the Base color scheme between Light and Dark in Settings, then Appearance, and check both. Restart Obsidian after any change to `manifest.json`, since Obsidian only re-reads it on launch.

## Where this lives in New Dark

| Concern | File |
| --- | --- |
| Mode independent values under `body` | `src/base/_shared.scss` |
| Dark mode colors | `src/base/_dark.scss` |
| Light mode colors | `src/base/_light.scss` |
| Heading scale and weights | `src/components/_typography.scss` |
| Editor and reading view tweaks | `src/components/_editor.scss` |
| Obsidian Publish | `src/publish.scss` |
