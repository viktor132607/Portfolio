import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname } from "node:path";

const routes = ["portfolio", "3dprints", "cosplay"];

for (const route of routes) {
  const directoryIndex = `out/${route}/index.html`;
  const flatHtml = `out/${route}.html`;

  if (!existsSync(directoryIndex) && existsSync(flatHtml)) {
    mkdirSync(dirname(directoryIndex), { recursive: true });
    copyFileSync(flatHtml, directoryIndex);
  }

  if (!existsSync(directoryIndex)) {
    throw new Error(`Missing exported route: /${route}/ (expected ${directoryIndex})`);
  }

  console.log(`Verified /${route}/ -> ${directoryIndex}`);
}
