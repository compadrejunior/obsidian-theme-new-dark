# Typography

**What it changes:** Fonts, font sizes, weights, line heights, and paragraph spacing in both the editor and the interface.

Use the relative `--font-*` variables for content in the editor, and the fixed `--font-ui-*` variables for interface elements.

Since Obsidian 1.6, `--bold-modifier` is the recommended way to change the weight of bold text. It stacks on top of other font weights, so a bold word inside a bold heading becomes heavier still. Values between 100 and 300 work well.

## Fonts

| Variable | Description |
| --- | --- |
| `--font-interface-theme` | Font used for UI elements |
| `--font-text-theme` | Font used for text in the editor |
| `--font-monospace-theme` | Font used for monospaced content such as code blocks and inline code |

## Font size

| Variable | Default value | Description |
| --- | --- | --- |
| `--font-text-size` | `16px` | Editor font size. Defined by the user under Appearance settings. |
| `--font-smallest` | `0.8em` |  |
| `--font-smaller` | `0.875em` |  |
| `--font-small` | `0.933em` |  |
| `--font-ui-smaller` | `12px` |  |
| `--font-ui-small` | `13px` |  |
| `--font-ui-medium` | `15px` |  |
| `--font-ui-large` | `20px` |  |

## Font weight

| Variable | Default value |
| --- | --- |
| `--font-thin` | `100` |
| `--font-extralight` | `200` |
| `--font-light` | `300` |
| `--font-normal` | `400` |
| `--font-medium` | `500` |
| `--font-semibold` | `600` |
| `--font-bold` | `700` |
| `--font-extrabold` | `800` |
| `--font-black` | `900` |

## Text formatting

| Variable | Description |
| --- | --- |
| `--font-weight` | Regular text weight |
| `--bold-modifier` | Added weight for bolded text |
| `--bold-weight` | Bold text font weight |
| `--bold-color` | Bold text color |
| `--italic-color` | Italic text color |

## Line heights

| Variable | Default value | Description |
| --- | --- | --- |
| `--line-height-normal` | `1.5` | Default line height |
| `--line-height-tight` | `1.3` | Used in search results, tree items, tooltips, and other smaller spaces |

## Paragraph spacing

| Variable | Description |
| --- | --- |
| `--heading-spacing` | Spacing above headings |
| `--p-spacing` | Spacing between paragraphs |

Official reference: https://docs.obsidian.md/Reference/CSS+variables/Foundations/Typography
