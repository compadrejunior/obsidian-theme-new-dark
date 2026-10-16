// Validates the built theme against Obsidian's submission rules and theme guidelines.
import { existsSync, readFileSync, statSync } from "node:fs";

const errors = [];
const warnings = [];

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`${path}: cannot read or parse (${error.message})`);
    return null;
  }
}

const manifest = readJson("manifest.json");
if (manifest) {
  for (const field of ["name", "version", "minAppVersion", "author"]) {
    if (!manifest[field]) errors.push(`manifest.json: missing "${field}"`);
  }
  if (manifest.version && !/^\d+\.\d+\.\d+$/.test(manifest.version)) {
    errors.push(`manifest.json: version "${manifest.version}" must be x.y.z (no "v" prefix)`);
  }
  const tag = process.env.GITHUB_REF_NAME;
  if (tag && process.env.GITHUB_REF_TYPE === "tag" && tag !== manifest.version) {
    errors.push(`git tag "${tag}" does not match manifest version "${manifest.version}"`);
  }
  const pkg = readJson("package.json");
  if (pkg && manifest.version && pkg.version !== manifest.version) {
    warnings.push(`package.json version ${pkg.version} differs from manifest ${manifest.version}`);
  }
}

// Size limits in bytes. The app theme may embed assets, the Publish theme should not.
const targets = [
  { file: "theme.css", required: true, warnAt: 1_000_000 },
  { file: "publish.css", required: false, warnAt: 50_000 },
];

for (const { file, required, warnAt } of targets) {
  if (!existsSync(file)) {
    if (required) errors.push(`${file}: missing, run "npm run build"`);
    continue;
  }
  const css = readFileSync(file, "utf8");
  const size = statSync(file).size;
  if (size > warnAt) warnings.push(`${file}: ${size} bytes is larger than the ${warnAt} byte budget`);
  if (/!important/i.test(css)) errors.push(`${file}: contains !important`);
  if (/@import\b/i.test(css)) errors.push(`${file}: contains @import, which would load remote or extra files`);
  for (const match of css.matchAll(/url\(\s*(['"]?)(?!data:|#)([^)'"]+)\1\s*\)/gi)) {
    errors.push(`${file}: non-embedded url(${match[2]}), assets must be data: URIs`);
  }
  if (/https?:\/\//i.test(css.replace(/url\(\s*['"]?data:[^)]*\)/gi, ""))) {
    warnings.push(`${file}: contains an http(s) string outside data URIs, verify it is not a network call`);
  }
}

for (const warning of warnings) console.warn(`warn  ${warning}`);
for (const error of errors) console.error(`error ${error}`);

if (errors.length > 0) process.exit(1);
console.log(`check passed (${warnings.length} warning${warnings.length === 1 ? "" : "s"})`);
