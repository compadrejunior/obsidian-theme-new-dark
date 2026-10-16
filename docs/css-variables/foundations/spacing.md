# Spacing

**What it changes:** Padding, margins, gaps, and element dimensions throughout the interface, plus a few layout widths.

Obsidian lays out the interface on a 4 pixel grid, so use the predefined `--size-*` variables instead of raw pixel values. Each name carries the base and the multiple: `--size-4-1` is 4px, `--size-4-2` is 8px, and `--size-4-4` is 16px.

A finer 2 pixel grid also exists. Use it sparingly, only where the 4 pixel steps are too coarse.

| Variable | Default value |
| --- | --- |
| `--size-2-1` | `2px` |
| `--size-2-2` | `4px` |
| `--size-2-3` | `6px` |
| `--size-4-1` | `4px` |
| `--size-4-2` | `8px` |
| `--size-4-3` | `12px` |
| `--size-4-4` | `16px` |
| `--size-4-5` | `20px` |
| `--size-4-6` | `24px` |
| `--size-4-8` | `32px` |
| `--size-4-9` | `36px` |
| `--size-4-12` | `48px` |
| `--size-4-16` | `64px` |
| `--size-4-18` | `72px` |

Official reference: https://docs.obsidian.md/Reference/CSS+variables/Foundations/Spacing
