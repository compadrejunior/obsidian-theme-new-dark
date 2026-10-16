---
paths:
  - "manifest.json"
  - ".github/workflows/*.yml"
  - "package.json"
---

# Release rules

The `version` in `manifest.json` uses plain `x.y.z` semantic versioning. The git tag must equal that string exactly, with no `v` prefix, and the release name is ignored by Obsidian.

Each release must attach `manifest.json` and `theme.css` as binary assets. The release workflow creates a draft, so a human must open the draft on GitHub, add notes, and publish it.

Only the first version is submitted manually through community.obsidian.md. Later versions are fetched from GitHub releases automatically, so a version bump plus a tag is the whole update process.

The directory reads `manifest.json` from the HEAD of the default branch, so commit the version bump before tagging. Keep `package.json` version in sync, which `npm run check` warns about.

Obsidian only re-reads `manifest.json` on restart, so remind the user to restart Obsidian after changing it.
