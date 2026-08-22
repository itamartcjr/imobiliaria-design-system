const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const tokensDir = path.join(root, "tokens");
const generatedDir = path.join(root, "generated");
const distCssDir = path.join(root, "dist", "assets", "css");
const distJsDir = path.join(root, "dist", "assets", "js");
const distFontsDir = path.join(root, "dist", "assets", "fonts");

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(tokensDir, file), "utf8"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function flattenColors(input, prefix = []) {
  return Object.entries(input).flatMap(([key, value]) => {
    const current = [...prefix, key];
    if (value && typeof value === "object" && "dark" in value && "light" in value) {
      return [{ path: current.join("."), dark: value.dark, light: value.light, usage: value.usage || "" }];
    }
    if (value && typeof value === "object") {
      return flattenColors(value, current);
    }
    return [];
  });
}

function cssVarName(tokenPath) {
  return `--${tokenPath.replace(/\./g, "-")}`;
}

function flattenObject(input, prefix = []) {
  return Object.entries(input).flatMap(([key, value]) => {
    const current = [...prefix, key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      if (Object.prototype.hasOwnProperty.call(value, "usage")) {
        return [{ path: current.join("."), ...value }];
      }
      return flattenObject(value, current);
    }
    return [{ path: current.join("."), value }];
  });
}

const colors = readJson("colors.json");
const spacing = readJson("spacing.json");
const radius = readJson("radius.json");
const breakpoints = readJson("breakpoints.json");
const sizes = readJson("sizes.json");
const shadows = readJson("shadows.json");
const motion = readJson("motion.json");
const typography = readJson("typography.json");

ensureDir(generatedDir);
ensureDir(distCssDir);
ensureDir(distJsDir);
ensureDir(distFontsDir);

const colorEntries = flattenColors(colors);
const tokenCss = [
  "/* Generated file. Do not edit manually. */",
  ":root, [data-theme=\"dark\"] {",
  ...colorEntries.map((entry) => `  ${cssVarName(entry.path)}: ${entry.dark};`),
  ...Object.entries(spacing).map(([key, value]) => `  --space-${key}: ${value}px;`),
  ...Object.entries(radius).map(([key, value]) => `  --radius-${key}: ${value}px;`),
  ...Object.entries(breakpoints).map(([key, value]) => `  --breakpoint-${key}: ${value}px;`),
  ...Object.entries(sizes.container).map(([key, value]) => `  --content-${key}: ${value}px;`),
  `  --touch-target: ${sizes.touchTarget}px;`,
  ...Object.entries(sizes.icon).map(([key, value]) => `  --icon-${key}: ${value}px;`),
  ...Object.entries(motion.duration).map(([key, value]) => `  --motion-duration-${key}: ${value}ms;`),
  `}`,
  `[data-theme=\"light\"] {`,
  ...colorEntries.map((entry) => `  ${cssVarName(entry.path)}: ${entry.light};`),
  `}`,
  ":root {",
  ...Object.entries(shadows).flatMap(([key, value]) => [
    `  --shadow-${key}-dark: ${value.dark};`,
    `  --shadow-${key}-light: ${value.light};`,
  ]),
  ...Object.entries(typography.fontFamily).map(([key, value]) => `  --font-family-${key}: ${JSON.stringify(value)};`),
  ...Object.entries(typography.weights).map(([key, value]) => `  --font-weight-${key}: ${value};`),
  ...Object.entries(typography.scale).flatMap(([key, value]) => [
    `  --font-size-${key}: ${value.size}px;`,
    `  --line-height-${key}: ${value.lineHeight}px;`,
    `  --font-weight-${key}: ${value.weight};`,
    `  --letter-spacing-${key}: ${typeof value.letterSpacing === "number" ? `${value.letterSpacing}px` : value.letterSpacing};`,
  ]),
  ...Object.entries(motion.easing).map(([key, value]) => `  --motion-easing-${key}: ${value};`),
  "}"
].join("\n");

const tokensTs = `export const tokens = ${JSON.stringify({ colors, spacing, radius, breakpoints, sizes, shadows, motion, typography }, null, 2)} as const;\n`;
const tokensRn = `export const tokens = ${JSON.stringify({ colors, spacing, radius, breakpoints, sizes, shadows, motion, typography }, null, 2)} as const;\n`;

fs.writeFileSync(path.join(generatedDir, "tokens.css"), tokenCss);
fs.writeFileSync(path.join(generatedDir, "tokens.ts"), tokensTs);
fs.writeFileSync(path.join(generatedDir, "tokens-react-native.ts"), tokensRn);
for (const cssFile of fs.readdirSync(path.join(root, "src", "assets", "css")).filter((file) => file.endsWith(".css"))) {
  fs.copyFileSync(path.join(root, "src", "assets", "css", cssFile), path.join(distCssDir, cssFile));
}
fs.writeFileSync(path.join(distCssDir, "tokens.css"), tokenCss);
fs.writeFileSync(path.join(distJsDir, "noop.js"), "/* generated placeholder */\n");

for (const fontName of [
  "Manrope_200ExtraLight.ttf",
  "Manrope_300Light.ttf",
  "Manrope_400Regular.ttf",
  "Manrope_500Medium.ttf",
  "Manrope_600SemiBold.ttf",
  "Manrope_700Bold.ttf",
  "Manrope_800ExtraBold.ttf",
]) {
  fs.copyFileSync(path.join(root, "src", "assets", "fonts", fontName), path.join(distFontsDir, fontName));
}
