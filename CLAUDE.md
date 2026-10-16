# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

New Dark is an Obsidian community theme, written in SCSS and compiled to plain CSS. It is meant to be published to the Obsidian theme directory, and it optionally ships a separate Obsidian Publish theme. The repo started as a scaffold, so the palette and components in `src/` are placeholders to be designed.

## Commands

- `npm install` installs Sass and Stylelint.
- `npm run build` compiles `src/theme.scss` to `theme.css` and `src/publish.scss` to `publish.css`. `build:app` and `build:publish` build one of them.
- `npm run lint` runs Stylelint on `src/**/*.scss`, and `npm run lint:fix` autofixes.
- `npm run check` validates the built CSS and `manifest.json` against Obsidian's submission rules (see `scripts/check.mjs`).
- `npm run verify` runs lint, build, and check in order. Run it before finishing any change.
- `OBSIDIAN_VAULT=<vault path> npm run link` links the repo into a test vault as `.obsidian/themes/New Dark`, so Obsidian hot-reloads `theme.css`. The folder name must equal `name` in `manifest.json`.
- `npm run watch` rebuilds on save and never exits. Do not start it unless the user asks, and stop it before ending the turn.

There is no automated test suite. Verification means `npm run verify` plus a visual check in Obsidian in both Base color schemes (Light and Dark), which only the user can do.

## Architecture

`theme.css` and `publish.css` at the repo root are build output and must be committed, because the release attaches `theme.css` and the directory reads files from the default branch. Never edit them by hand, since the CI workflow fails when they differ from a fresh build, and `.claude/settings.json` denies direct edits. Change `src/` and rebuild.

`src/theme.scss` is only an `@use` manifest. Each partial emits rules once: `base/_shared.scss` holds mode-independent variables under `body`, `base/_dark.scss` and `base/_light.scss` hold colors under `.theme-dark` and `.theme-light` with identical variable names, and `components/` holds per-area overrides. `src/publish.scss` is standalone and shares nothing with the app theme, because Publish uses different classes and a different file name and size budget.

The theme works by overriding Obsidian's CSS variables rather than restyling elements. To find a variable name, use the `find-obsidian-variable` skill or `Ctrl+Shift+I` in Obsidian, since a misspelled variable fails silently.

## Hard constraints from the Obsidian guidelines

- No `!important`, no `@import`, and no remote fonts or images. Assets must be base64 data URIs (see the `embed-asset` skill), and `npm run check` fails on any other `url()`.
- Keep selectors shallow (no IDs, at most three compound selectors), because Obsidian renames internal classes between releases.
- `manifest.json` `version` is plain `x.y.z`, and the git tag must match it exactly with no `v` prefix. Obsidian only re-reads the manifest on restart.
- `publish.css` must stay tiny and asset-free, and it can only be tested by publishing a real Publish site.

## Releasing

Pushing a tag runs `.github/workflows/release.yml`, which verifies the build and creates a draft GitHub release with `manifest.json` and `theme.css` attached. A human must publish the draft. Only the first version is submitted manually at community.obsidian.md, and later versions are picked up from GitHub. The `release-theme` skill walks through the steps. The submission also needs `README.md`, `LICENSE`, and a 512 x 288 px screenshot at the repo root, and the screenshot does not exist yet.

## Claude configuration

Path-scoped rules live in `.claude/rules/` (`app-theme`, `publish-theme`, `release`). Skills are `find-obsidian-variable`, `embed-asset`, and `release-theme` (manual only). The `theme-reviewer` agent audits the theme read-only before a release. A PostToolUse hook runs `scripts/hook-post-edit.mjs`, which executes `npm run verify` after any edit to `src/**/*.scss` or `manifest.json` and feeds failures back to Claude.
