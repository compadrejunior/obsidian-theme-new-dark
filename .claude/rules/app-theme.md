---
paths:
  - "src/**/*.scss"
  - "!src/publish.scss"
---

# App theme styling rules

Override Obsidian's CSS variables before writing any custom selector. Put variables that are identical in both modes under `body`, and put colors under `.theme-dark` and `.theme-light`. Use `:root` only when a variable does not take effect under `body`.

Define every color in both `_dark.scss` and `_light.scss` with the same variable names, and set the accent through `--accent-h`, `--accent-s`, and `--accent-l` so Obsidian derives hover and active states.

Keep selectors shallow, at most three compound selectors, with no IDs, because Obsidian renames internal classes between releases. Never use `!important`, since it blocks users from overriding the theme with snippets.

Never load remote fonts, images, or stylesheets, and never use `@import` in the compiled output. Embed assets as base64 data URIs through a dedicated partial (see the `embed-asset` skill), and keep them out of `src/publish.scss`.

To find the right variable, use the `find-obsidian-variable` skill instead of guessing names. Obsidian has more than 400 variables and a wrong name fails silently.
