---
paths:
  - "src/publish.scss"
---

# Obsidian Publish theme rules

A Publish theme is a different context from the app theme. Write it from scratch, because most app selectors target classes that do not exist on Publish sites.

Publish-only variables go under `.published-container`, such as `--page-width` and `--page-side-padding`. Colors go under `.theme-light` and `.theme-dark`, using the same variable names as the app.

Keep `publish.css` as small as possible because it loads on every visit, and never embed fonts or images in it. Use advanced CSS conservatively and check support on caniuse.com.

The default breakpoints are 1000px, where the right sidebar hides, and 750px, where both sidebars hide and navigation moves to a hamburger menu. Use `@media` queries for those sizes, because rules outside a media query apply to every device.

Publish themes have no local preview. The only way to test one is to upload `publish.css` to the vault root and publish the site, so tell the user when a change needs that manual step.
