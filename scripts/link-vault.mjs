// Links this repo into a vault as an installed theme, so Obsidian hot-reloads theme.css.
// Usage: OBSIDIAN_VAULT=<path to vault> npm run link
// A junction is used on Windows because it needs no admin rights.
import { existsSync, mkdirSync, readFileSync, symlinkSync } from "node:fs";
import { join, resolve } from "node:path";

const vault = process.env.OBSIDIAN_VAULT;
if (!vault) {
  console.error("Set OBSIDIAN_VAULT to the vault folder, for example: OBSIDIAN_VAULT=C:/Users/me/Vault npm run link");
  process.exit(1);
}

const { name } = JSON.parse(readFileSync("manifest.json", "utf8"));
const themesDir = join(resolve(vault), ".obsidian", "themes");
const linkPath = join(themesDir, name);

if (existsSync(linkPath)) {
  console.log(`Already exists: ${linkPath}`);
  process.exit(0);
}

mkdirSync(themesDir, { recursive: true });
symlinkSync(resolve("."), linkPath, "junction");
console.log(`Linked ${linkPath} -> ${resolve(".")}`);
console.log("Enable the theme in Settings > Appearance > Themes, and restart Obsidian after any manifest.json change.");
