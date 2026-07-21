import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PUBLIC = path.resolve(__dirname, "dist/public");

// Assets that need their absolute paths prefixed with the base path
const BASE_PATH = process.env.BASE_PATH ?? "/";

if (BASE_PATH === "/") {
  console.log("No base path prefix specified, skipping asset path rewriting.");
  process.exit(0);
}

const prefix = BASE_PATH.replace(/\/$/, ""); // Remove trailing slash if any (e.g. "/aktualna-gobrain")
console.log(`Rewriting absolute asset paths with base path prefix: "${prefix}"`);

// Helper to recursively walk a directory
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const extensionsToProcess = [".html", ".js", ".css", ".json"];

let processedCount = 0;

walkDir(DIST_PUBLIC, (filePath) => {
  const ext = path.extname(filePath);
  if (!extensionsToProcess.includes(ext)) {
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Replace absolute paths to files in the public directory
  // We match folders and files, handling trailing slashes, query parameters, or string end conditions.
  const regexes = [
    { search: /(["',`\s]|^)\/(img|screenshots|attached_assets|assets)\//g, replace: `$1${prefix}/$2/` },
    { search: /(["',`\s]|^)\/gobrain-video(?=\/|\?|"|'|`|$)/g, replace: `$1${prefix}/gobrain-video` },
    { search: /(["',`\s]|^)\/(platforma-terapeuta\.mp4|favicon\.svg|gobrain-logo\.svg|opengraph\.jpg)(?=["',`\s]|$)/g, replace: `$1${prefix}/$2` }
  ];

  for (const { search, replace } of regexes) {
    if (search.test(content)) {
      content = content.replace(search, replace);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    processedCount++;
  }
});

console.log(`Successfully rewrote asset paths in ${processedCount} files.`);
