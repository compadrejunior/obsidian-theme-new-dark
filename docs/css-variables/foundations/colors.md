# Colors

**What it changes:** Almost every visible surface and text in the app. This is the most important page for a theme: the neutral base scale, the accent color, extended hues, surfaces, text, and interactive states all start here.

Set the neutral scale (`--color-base-*`) and the accent (`--accent-h`, `--accent-s`, `--accent-l`) first. Semantic variables such as `--background-primary` and `--text-normal` are derived from them, so most themes only override the semantic layer for the details they want to change.

The `--color-red`, `--color-green`, and similar extended colors feed status messages, callouts, syntax highlighting, graph nodes, and Canvas cards.

As of Obsidian 1.13 colors are mixed in the OKLCH color space. The `-rgb` and `-hsl` companion variables are deprecated and kept only for compatibility, so build translucent colors with `color-mix(in oklch, var(--color-red) 20%, transparent)` instead of `rgba(var(--color-red-rgb), 0.2)`.

Avoid changing the black and white variables, because Obsidian uses them to build opacity masks.

## Base colors

| Variable | Default value (light mode) | Default value (dark mode) |
| --- | --- | --- |
| `--color-base-00` | `#ffffff` | `#1c1c1c` |
| `--color-base-05` | `#fcfcfc` | `#212121` |
| `--color-base-10` | `#fafafa` | `#232323` |
| `--color-base-20` | `#f6f6f6` | `#282828` |
| `--color-base-25` | `#efefef` | `#2e2e2e` |
| `--color-base-30` | `#e4e4e4` | `#333333` |
| `--color-base-35` | `#dadada` | `#3f3f3f` |
| `--color-base-40` | `#bdbdbd` | `#555555` |
| `--color-base-50` | `#ababab` | `#666666` |
| `--color-base-60` | `#707070` | `#999999` |
| `--color-base-70` | `#5c5c5c` | `#b3b3b3` |
| `--color-base-100` | `#222222` | `#dadada` |

## Accent color

| Variable | Default value | Description |
| --- | --- | --- |
| `--accent-h` | `258` | Accent hue |
| `--accent-s` | `88%` | Accent saturation |
| `--accent-l` | `66%` | Accent lightness |

| Variable | Description |
| --- | --- |
| `--color-accent` | The accent color |
| `--color-accent-1` | A shifted accent shade, used for hover and active states |
| `--color-accent-2` | A further-shifted accent shade, used for hover and active states |

## Extended colors

| Variable | Default value (light mode) | Default value (dark mode) |
| --- | --- | --- |
| `--color-red` | `#e93147` | `#fb464c` |
| `--color-orange` | `#ec7500` | `#e9973f` |
| `--color-yellow` | `#e0ac00` | `#e0de71` |
| `--color-green` | `#08b94e` | `#44cf6e` |
| `--color-cyan` | `#00bfbc` | `#53dfdd` |
| `--color-blue` | `#086ddd` | `#027aff` |
| `--color-purple` | `#7852ee` | `#a882ff` |
| `--color-pink` | `#d53984` | `#fa99cd` |
| `--color-red-rgb` | `233, 49, 71` | `251, 70, 76` |
| `--color-orange-rgb` | `236, 117, 0` | `233, 151, 63` |
| `--color-yellow-rgb` | `224, 172, 0` | `224, 222, 113` |
| `--color-green-rgb` | `8, 185, 78` | `68, 207, 110` |
| `--color-cyan-rgb` | `0, 191, 188` | `83, 223, 221` |
| `--color-blue-rgb` | `8, 109, 221` | `2, 122, 255` |
| `--color-purple-rgb` | `120, 82, 238` | `168, 130, 255` |
| `--color-pink-rgb` | `213, 57, 132` | `250, 153, 205` |

## Black and white

| Variable | Default value (light mode) | Default value (dark mode) |
| --- | --- | --- |
| `--mono-0` | `white` | `black` |
| `--mono-100` | `black` | `white` |

## Semantic colors

### Surface colors

| Variable | Description |
| --- | --- |
| `--background-primary` | Primary background |
| `--background-primary-alt` | Background for surfaces on top of primary background |
| `--background-secondary` | Secondary background |
| `--background-secondary-alt` | Background for surfaces on top of secondary background |
| `--background-modifier-hover` | Hovered elements |
| `--background-modifier-active-hover` | Active hovered elements |
| `--background-modifier-border` | Border color |
| `--background-modifier-border-hover` | Border color (hover) |
| `--background-modifier-border-focus` | Border color (focus) |
| `--background-modifier-error-rgb` | Error background, RGB value |
| `--background-modifier-error` | Error background |
| `--background-modifier-error-hover` | Error background (hover) |
| `--background-modifier-success-rgb` | Success background, RGB value |
| `--background-modifier-success` | Success background |
| `--background-modifier-message` | Messages background |
| `--background-modifier-form-field` | Form field background |

### Interactive colors

| Variable | Description |
| --- | --- |
| `--interactive-normal` | Background for standard interactive elements |
| `--interactive-hover` | Background for standard interactive elements (hover) |
| `--interactive-accent` | Background for accented interactive elements |
| `--interactive-accent-hsl` | Background for accented interactive elements in HSL |
| `--interactive-accent-hover` | Background for accented interactive elements (hover) |

### Text colors

#### Text foreground colors

| Variable | Description |
| --- | --- |
| `--text-normal` | Normal text |
| `--text-muted` | Muted text |
| `--text-faint` | Faint text |
| `--text-on-accent` | Text on accent background when accent is dark |
| `--text-on-accent-inverted` | Text on accent background when accent is light |
| `--text-success` | Success text |
| `--text-warning` | Warning text |
| `--text-error` | Error text |
| `--text-accent` | Accent text |
| `--text-accent-hover` | Accent text (hover) |

#### Text background colors

| Variable | Description |
| --- | --- |
| `--text-selection` | Selected text background |
| `--text-highlight-bg` | Highlighted text background |

#### Caret color

| Variable | Description |
| --- | --- |
| `--caret-color` | Caret color |

Official reference: https://docs.obsidian.md/Reference/CSS+variables/Foundations/Colors
