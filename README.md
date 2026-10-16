# New Dark

A dark-first theme for Obsidian, with a matching light mode.

## Install

After the theme is accepted into the community directory, open Settings, then Appearance, then Themes, and search for "New Dark". To try a release by hand, copy `manifest.json` and `theme.css` into `<vault>/.obsidian/themes/New Dark/`.

## Develop

Run `npm install`, then `npm run build` to compile `src/theme.scss` into `theme.css`. Set `OBSIDIAN_VAULT` to a test vault and run `npm run link` once to connect the repo to that vault, then `npm run watch` to rebuild on every save.

## Documentation

The [docs](docs/README.md) folder documents every Obsidian CSS variable, what part of the interface it changes, and the rules for publishing a theme.

## Screenshot

Add a 512 x 288 px `screenshot.png` at the repository root before submitting to the theme directory.

## License

MIT, see `LICENSE`.
