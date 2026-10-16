# User guide

How to get the most out of New Dark and how to adjust it with CSS snippets, without editing the theme itself.

## How the theme is built

New Dark overrides Obsidian's own CSS variables instead of restyling elements one by one. Variables that are the same in both modes (fonts, radii, spacing, heading sizes) live under `body`. Colors live under `.theme-dark` and `.theme-light`, with identical variable names, so each mode can be tuned separately.

Because of that, the way to customize the theme is to set the same variables in a snippet. Snippets load after the theme, so a rule with equal priority wins.

## Create a snippet

1. Open your vault folder, then `.obsidian/snippets/`. Create the folder if it does not exist.
2. Add a file such as `my-new-dark.css`.
3. In Obsidian, open **Settings → Appearance → CSS snippets**, click the refresh icon, and turn the snippet on.

Changes apply as soon as you save the file.

## Which selector to use

| You are changing | Use this selector |
| --- | --- |
| A color in dark mode | `.theme-dark { ... }` |
| A color in light mode | `.theme-light { ... }` |
| The same color in both modes | Put it in both blocks. |
| Sizes, radii, fonts, widths, heading colors | `body { ... }` |

A rule on `body` has lower priority than the theme's `.theme-dark` and `.theme-light` blocks, so a color placed there is ignored. The rule of thumb is to copy the selector the theme uses for that variable.

## Colors

### Surfaces

| Variable | Dark | Light | Controls |
| --- | --- | --- | --- |
| `--background-primary` | `#1f1f1f` | `#ffffff` | The note editor and reading area |
| `--background-secondary` | `#181818` | `#f8f8f8` | Sidebars, ribbon, titlebar, status bar, tab bar |
| `--background-primary-alt` | `#181818` | `#f3f3f3` | Blockquotes and surfaces on top of the editor |
| `--background-modifier-border` | `#2b2b2b` | `#e5e5e5` | The hairline borders and dividers |
| `--background-modifier-hover` | `#2a2d2e` | `#f0f0f0` | Hovered list and menu items |
| `--background-modifier-form-field` | `#313131` | `#ffffff` | Input and dropdown backgrounds |

### Text

| Variable | Dark | Light | Controls |
| --- | --- | --- | --- |
| `--text-normal` | `#cccccc` | `#3b3b3b` | Body text |
| `--text-muted` | `#9d9d9d` | `#616161` | Secondary text and inactive tabs |
| `--text-faint` | `#6e6e6e` | `#8b949e` | Placeholders and heading markers |
| `--text-accent` | `#4daafc` | `#005fb8` | Headings, bold text, and accent text |
| `--link-color` | `#4daafc` | `#005fb8` | Internal links |
| `--text-selection` | `#264f78` | `#add6ff` | Selected text |

### Accent

The accent drives buttons, toggles, focus rings, and the selected state of controls. It is defined by hue, saturation, and lightness so Obsidian can derive hover and active shades.

| Variable | Dark | Light |
| --- | --- | --- |
| `--accent-h` | `206` | `208` |
| `--accent-s` | `100%` | `100%` |
| `--accent-l` | `42%` | `36%` |

Headings, bold text, and links read `--text-accent` and `--link-color` rather than the HSL accent, so recoloring the whole theme takes two steps.

```css
.theme-dark {
  /* Controls: buttons, toggles, focus rings */
  --accent-h: 150;
  --accent-s: 55%;
  --accent-l: 38%;
  --interactive-accent: hsl(150, 55%, 38%);
  --interactive-accent-hover: hsl(150, 55%, 33%);

  /* Text: headings, bold text, links */
  --text-accent: #6fd3a3;
  --text-accent-hover: #93e0bb;
  --link-color: #6fd3a3;
  --link-color-hover: #93e0bb;
  --link-external-color: #6fd3a3;
}
```

### Headings and bold text

Headings and bold text use the accent color. To give headings the neutral look of VS Code's Markdown preview instead, set the variables under `body`:

```css
body {
  --h1-color: var(--text-normal);
  --h2-color: var(--text-normal);
  --h3-color: var(--text-normal);
  --h4-color: var(--text-normal);
  --h5-color: var(--text-normal);
  --h6-color: var(--text-muted);
  --bold-color: var(--text-normal);
}
```

### Code

Code blocks use the VS Code token palette. Override any of these in `.theme-dark` or `.theme-light`.

| Variable | Dark | Token |
| --- | --- | --- |
| `--code-keyword` | `#c586c0` | Keywords |
| `--code-string` | `#ce9178` | Strings |
| `--code-function` | `#dcdcaa` | Functions |
| `--code-property` | `#9cdcfe` | Properties |
| `--code-value` | `#b5cea8` | Numbers and values |
| `--code-tag` | `#4fc1ff` | Tags and constants |
| `--code-comment` | `#6a9955` | Comments |
| `--code-important` | `#d7ba7d` | Regular expressions |
| `--code-normal` | `#a5c0b0` | Unhighlighted text and inline code |
| `--code-background` | `#181818` | Code background |

To lift code blocks off the page slightly in dark mode:

```css
.theme-dark {
  --code-background: #262626;
}
```

### Callouts

Callout colors come from the extended palette, so changing `--color-red`, `--color-orange`, `--color-yellow`, `--color-green`, `--color-cyan`, `--color-blue`, `--color-purple`, and `--color-pink` recolors callouts, graph nodes, and Canvas cards together.

## Shape and spacing

| Variable | Default | Controls |
| --- | --- | --- |
| `--radius-s` | `4px` | Buttons, inputs, tabs, tags, checkboxes |
| `--radius-m` | `6px` | Callouts and medium surfaces |
| `--radius-l` | `10px` | Modals and large surfaces |
| `--border-width` | `1px` | The default border thickness |

For a sharper, squarer interface:

```css
body {
  --radius-s: 0;
  --radius-m: 2px;
  --radius-l: 4px;
}
```

## Typography

| Variable | Default | Controls |
| --- | --- | --- |
| `--font-interface-theme` | System UI stack | Interface font |
| `--font-text-theme` | Same as interface | Note text font |
| `--font-monospace-theme` | CaskaydiaCove Nerd Font Mono, Cascadia Code, Consolas | Code font |
| `--font-text-size` | `15px` | Note text size |
| `--line-height-normal` | `1.6` | Line height in notes |
| `--h1-size` to `--h6-size` | `2em` down to `0.9em` | Heading sizes |

Install any font on your system and name it in a snippet. The theme ships no fonts, because Obsidian themes may not load remote files.

```css
body {
  --font-text-theme: "Inter", var(--font-interface-theme);
  --font-monospace-theme: "JetBrains Mono", "Cascadia Code", monospace;
  --font-text-size: 16px;
}
```

## Page width

Notes use 95% of the pane width. For a narrower, book-like column:

```css
body {
  --file-line-width: 720px;
}
```

## Tables

Tables fill the pane and wrap long cell text, so a wide table never scrolls sideways. Columns size to their content, and a word breaks mid-word only when it cannot fit any other way. To keep a table from wrapping in a specific note, give the note the CSS class `nowrap-tables` through the `cssclasses` property and add this snippet:

```css
.nowrap-tables table :is(th, td) {
  white-space: nowrap;
}
```

## Live Preview gutter

Line numbers are hidden in Live Preview and stay visible in Source mode. To show them in Live Preview as well, add:

```css
.is-live-preview .cm-gutters {
  display: block;
}
```

## PDF export

New Dark ships print styles that apply when you export a note to PDF (**More options → Export to PDF**).

- Text is 11pt in a Gill Sans or Calibri style font.
- H1, H2, and H3 are 21pt, 16pt, and 13pt.
- H1 and H2 never end a page on their own.

Force a page break anywhere in a note by adding this line to the Markdown:

```html
<div class="page-break"></div>
```

## Light and dark modes

Both modes define the same variable names, so a customization written for one mode is easy to copy to the other. Use **Settings → Appearance → Base color scheme** to switch, or choose **Adapt to system** to follow your operating system.

## Find a variable that is not listed here

Obsidian defines hundreds of CSS variables. Press `Ctrl+Shift+I` (`Cmd+Option+I` on macOS), pick the element you want to change with the inspector, and look at the **Styles** panel for the variable it reads. The [variable index](variable-index.md) lists every documented variable alphabetically and the part of the interface it affects, and [How styling works](how-styling-works.md) explains where each kind of value belongs.

## Reset everything

Turn off your snippets in **Settings → Appearance → CSS snippets**. The theme returns to its defaults immediately, and your snippet files stay in place if you want them back.
