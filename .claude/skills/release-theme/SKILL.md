---
name: release-theme
description: Prepare and publish a new New Dark release (version bump, build, tag, GitHub draft release). Use when the user asks to release, publish, cut a version, or submit the theme to the Obsidian directory.
disable-model-invocation: true
---

# Release the theme

Work through these steps in order and stop at the first failure.

1. Run `npm run verify` and fix any lint, build, or check errors.
2. Ask the user for the new `x.y.z` version if they did not give one. Update `version` in `manifest.json` and `package.json` to the same value.
3. Run `npm run build` again so `theme.css` is current, then confirm that the working tree contains only the intended changes.
4. Ask for confirmation, then commit the bump and push the default branch. The directory reads `manifest.json` from the branch HEAD, so the push must come before the tag.
5. Create and push an annotated tag equal to the version, for example `git tag -a 1.0.1 -m "1.0.1"` then `git push origin 1.0.1`. Pushing is outward-facing, so confirm with the user first.
6. Tell the user to open the Actions tab, wait for the workflow, then edit the draft release, add notes, and click Publish release.
7. For the very first release only, remind the user to submit the theme at community.obsidian.md (sign in, link GitHub, use the "Set up and claim" flow). The repo needs `README.md`, `LICENSE`, `manifest.json`, `theme.css` on the release, and a 512 x 288 px screenshot.
