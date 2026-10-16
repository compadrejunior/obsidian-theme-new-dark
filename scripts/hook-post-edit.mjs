// Claude Code PostToolUse hook: rebuilds and re-checks the theme after a source edit.
// Reads the hook payload from stdin. Exit code 2 sends stderr back to Claude.
import { spawnSync } from "node:child_process";

let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let filePath = "";
try {
  filePath = JSON.parse(raw).tool_input?.file_path ?? "";
} catch {
  process.exit(0);
}

const normalized = filePath.replaceAll("\\", "/");
if (!/\/src\/.+\.scss$/.test(normalized) && !normalized.endsWith("/manifest.json")) process.exit(0);

const run = spawnSync("npm", ["run", "verify", "--silent"], { encoding: "utf8", shell: true, timeout: 90_000 });
if (run.status !== 0) {
  process.stderr.write(`${run.stdout ?? ""}${run.stderr ?? ""}`);
  process.exit(2);
}
