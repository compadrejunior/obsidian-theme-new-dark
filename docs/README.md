# Documentation

Reference material for building the New Dark theme. It documents the CSS variables Obsidian exposes, what part of the interface each one changes, and the rules a community theme must follow.

## Start here

| Document | Use it to |
| --- | --- |
| [User guide](user-guide.md) | Customize New Dark with CSS snippets: colors, accent, headings, code, radii, fonts, page width, and PDF export. |
| [How styling works](how-styling-works.md) | Understand where to define variables, how light and dark mode work, and how to find an unknown variable. |
| [Variable index](variable-index.md) | Look up any variable by name and see which interface area it controls. |
| [CSS variables reference](css-variables/README.md) | Browse variables by area, with default values and descriptions. |
| [Theme guidelines](theme-guidelines.md) | Check the rules for embedding assets, Publish themes, releasing, and submitting. |

## Find a variable by interface area

| You want to change | Open |
| --- | --- |
| Overall palette, accent color, backgrounds, text colors | [Colors](css-variables/foundations/colors.md) |
| Fonts, sizes, line heights, bold weight | [Typography](css-variables/foundations/typography.md) |
| Padding, margins, gaps, layout widths | [Spacing](css-variables/foundations/spacing.md) |
| Corner rounding | [Radiuses](css-variables/foundations/radiuses.md) |
| Stacking order of menus, modals, tooltips | [Layers](css-variables/foundations/layers.md) |
| Heading sizes and colors in notes | [Headings](css-variables/editor/headings.md) |
| Links, tags, callouts, code, tables, lists, blockquotes | [Editor](css-variables/editor/README.md) |
| Note title and readable line width | [Inline title](css-variables/editor/inline-title.md) and [File](css-variables/editor/file.md) |
| Properties (frontmatter) panel | [Properties](css-variables/editor/properties.md) |
| Tabs, ribbon, sidebars, status bar, titlebar | [Window](css-variables/window/README.md) and [Tabs](css-variables/components/tabs.md) |
| File explorer items, backlinks sections | [Navigation](css-variables/components/navigation.md) |
| Buttons, toggles, sliders, dropdowns, inputs | [Components](css-variables/components/README.md) |
| Graph view, Canvas, Search, Sync | [Plugins](css-variables/plugins/README.md) |
| Published sites | [Obsidian Publish](css-variables/publish/README.md) |

## Where the data comes from

The variable tables were extracted on 2026-10-16 from the official [Obsidian developer documentation](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables). The explanations of what each area affects are written for this project. Each page links back to its official source, which stays authoritative if Obsidian changes a value.

Obsidian also defines variables that the reference does not list. When a variable you need is missing, inspect the element in Developer Tools as described in [How styling works](how-styling-works.md).
