# Theme guidelines

The rules a New Dark change must respect to stay publishable in the Obsidian theme directory. The sources are the official [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme), [Theme guidelines](https://docs.obsidian.md/Themes/App+themes/Theme+guidelines), [Embed fonts and images](https://docs.obsidian.md/Themes/App+themes/Embed+fonts+and+images+in+your+theme), [Release with GitHub Actions](https://docs.obsidian.md/Themes/App+themes/Release+your+theme+with+GitHub+Actions), and [Submit your theme](https://docs.obsidian.md/themes/app-themes/submit-theme) pages.

## Style rules

| Rule | Why |
| --- | --- |
| Override CSS variables instead of writing custom styles. | Most of the interface uses variables, so overrides are expressive and stable. |
| Keep selectors simple and low specificity. | Broken selectors are the most common maintenance problem, because Obsidian renames classes and changes nesting. |
| Never use `!important`. | It prevents users from overriding the theme with their own snippets. |
| Keep every asset local. | Themes must make no network calls, so they work offline and protect privacy. |

New Dark enforces these through Stylelint (`!important`, IDs, selector depth) and through `npm run check` (remote `url()`, `@import`).

## Embedding fonts and images

Embed assets as data URLs, in the form `url("data:<MIME_TYPE>;base64,<DATA>")`. Remote content is not allowed. Encoded assets grow `theme.css`, which slows the download from the directory, the loading inside Obsidian, and editing in a code editor, so prefer WOFF2 fonts and optimized SVG icons, and keep the encoded data in its own partial. The `embed-asset` skill walks through the steps.

## Files the repository needs

| File | Notes |
| --- | --- |
| `manifest.json` | Name, version, minimum app version, author. The version uses `x.y.z` only. |
| `theme.css` | Built output. It must also be attached to each release. |
| `README.md` | Describes the theme. An excerpt appears on the directory listing, and relative image links are resolved against the repository. |
| `LICENSE` | Defines how others may use the theme. |
| Screenshot | Recommended size is 512 by 288 pixels. |

## Releasing

1. Update `version` in `manifest.json` and commit it, because the directory reads the manifest from the head of the default branch.
2. Create an annotated tag equal to the version, for example `git tag -a 1.0.1 -m "1.0.1"`, and push it.
3. The release workflow builds the theme and creates a draft release with `manifest.json` and `theme.css` attached.
4. Open the draft on GitHub, add release notes, and publish it.

The tag must match the manifest version exactly, and the release name is ignored by Obsidian. Only the first version is submitted, through the Obsidian community directory by signing in, linking GitHub, and using the set up and claim flow. Review is automated, and later versions are downloaded from GitHub releases. If review reports errors, fix them and publish a new release with a higher version.

## Obsidian Publish themes

A Publish theme is a separate file named `publish.css` in the vault root, and Obsidian does not edit CSS files, so use an external editor. Build it from scratch rather than adapting the app theme, because most app selectors do not exist on Publish sites.

| Topic | Guidance |
| --- | --- |
| Selectors | Publish only variables go under `.published-container`, and colors go under `.theme-light` and `.theme-dark`. |
| Variables | Reuse the app variables where they apply, and see the [Obsidian Publish reference](css-variables/publish/README.md) for the Publish only ones. |
| File size | Keep it as small as possible, because it loads on every visit. Do not embed fonts or images as base64. |
| Browser support | Use new CSS features conservatively, because some visitors use older browsers. |
| Breakpoints | At 1000px the right sidebar hides. At 750px both sidebars hide and navigation moves to a hamburger menu. Use `@media` queries for those sizes. |
| Testing | There is no local preview. Publish the file and view the live site. |
