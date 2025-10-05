// scripts/fix-out-asset-paths.js
const fs = require("fs");
const path = require("path");

const repo = "survey-visualizer";
const outDir = path.resolve(process.cwd(), "out");

function walk(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(html|js|css)$/.test(full)) continue;
    let content = fs.readFileSync(full, "utf8");
    // common patterns: /_next/, /app/, /favicon.ico, /static/ etc.
    content = content.replace(/(href|src)=["']\/_next\//g, `$1="/${repo}/_next/`);
    content = content.replace(/(href|src)=["']\/static\//g, `$1="/${repo}/static/`);
    content = content.replace(/(href|src)=["']\/favicon.ico/g, `$1="/${repo}/favicon.ico`);
    content = content.replace(/(href|src)=["']\/app\//g, `$1="/${repo}/app/`);
    fs.writeFileSync(full, content, "utf8");
  }
}

if (!fs.existsSync(outDir)) {
  console.error("out/ not found. Run `next build && next export` first.");
  process.exit(1);
}

walk(outDir);
console.log("Patched asset URLs inside out/ to include base path.");
