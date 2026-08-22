const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const dist = path.join(root, "dist");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.isFile() && full.endsWith(".html")) return [full];
    return [];
  });
}

function extractAttrs(html, attr) {
  const regex = new RegExp(`${attr}="([^"]+)"`, "g");
  const values = [];
  let match;
  while ((match = regex.exec(html))) values.push(match[1]);
  return values;
}

function resolveRelative(fromFile, target) {
  const withoutQuery = target.split("#")[0].split("?")[0];
  return path.normalize(path.join(path.dirname(fromFile), withoutQuery));
}

const errors = [];

for (const file of walk(dist)) {
  const html = fs.readFileSync(file, "utf8");
  for (const href of extractAttrs(html, "href")) {
    if (/^(https?:|mailto:|tel:|javascript:|#)/.test(href)) continue;
    const resolved = resolveRelative(file, href);
    if (!fs.existsSync(resolved)) {
      errors.push(`${path.relative(root, file)} -> missing href ${href}`);
    }
  }
  for (const src of extractAttrs(html, "src")) {
    if (/^(https?:|data:|#)/.test(src)) continue;
    const resolved = resolveRelative(file, src);
    if (!fs.existsSync(resolved)) {
      errors.push(`${path.relative(root, file)} -> missing src ${src}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validation passed.");
