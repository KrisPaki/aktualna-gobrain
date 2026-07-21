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
  // We match things like "/img/", "/screenshots/", "/platforma-terapeuta.mp4", "/favicon.svg", etc.
  // Note: we must avoid double-prefixing if the script is run multiple times
  const regexes = [
    { search: /"\/img\//g, replace: `"${prefix}/img/` },
    { search: /'\/img\//g, replace: `'${prefix}/img/` },
    { search: /"\/screenshots\//g, replace: `"${prefix}/screenshots/` },
    { search: /'\/screenshots\//g, replace: `'${prefix}/screenshots/` },
    { search: /"\/platforma-terapeuta\.mp4"/g, replace: `"${prefix}/platforma-terapeuta.mp4"` },
    { search: /'\/platforma-terapeuta\.mp4'/g, replace: `'${prefix}/platforma-terapeuta.mp4'` },
    { search: /"\/favicon\.svg"/g, replace: `"${prefix}/favicon.svg"` },
    { search: /'\/favicon\.svg'/g, replace: `'${prefix}/favicon.svg'` },
    { search: /"\/gobrain-logo\.svg"/g, replace: `"${prefix}/gobrain-logo.svg"` },
    { search: /'\/gobrain-logo\.svg'/g, replace: `'${prefix}/gobrain-logo.svg'` },
    { search: /"\/opengraph\.jpg"/g, replace: `"${prefix}/opengraph.jpg"` },
    { search: /'\/opengraph\.jpg'/g, replace: `'${prefix}/opengraph.jpg'` }
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
