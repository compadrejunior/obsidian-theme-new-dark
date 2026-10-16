---
name: find-obsidian-variable
description: Find the correct Obsidian CSS variable for a UI element before styling it. Use when the user asks to restyle a part of Obsidian (ribbon, sidebar, headings, callouts, tabs, inputs, graph) or when unsure of a variable name.
---

# Find an Obsidian CSS variable

Obsidian exposes more than 400 variables, and a misspelled name fails silently, so confirm the name before writing it.

1. Fetch the official variable reference for the area, for example `https://docs.obsidian.md/Reference/CSS+variables/Foundations/Colors`, and browse the sibling pages (Editor, Components, Plugins, Window, Obsidian Publish). Use WebFetch and ask for the variables related to the element.
2. If the docs do not cover it, ask the user to open Developer Tools in Obsidian with `Ctrl+Shift+I`, inspect the element, and read the `var(--...)` in the Styles tab. In the Sources tab, `app.css` lists definitions at the top, and searching for `" --ribbon-"` with surrounding spaces returns definitions rather than uses.
3. Add the override in the matching partial under `src/`: `body` for mode-independent values, `.theme-dark` or `.theme-light` for colors.
4. Run `npm run verify` and report which variable was used and where it came from.

Prefer a variable over a custom selector every time. Write a selector only when no variable controls the property.
