import { existsSync, mkdirSync, copyFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const fallbackPages = {
  cosplay: `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cosplay Tavern — Viktor Iliev</title><style>body{margin:0;background:#160d08;color:#f0d79d;font-family:Georgia,serif}main{max-width:980px;margin:auto;padding:48px 24px 80px}a{color:#e3bd77}header{display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid #6b4328;padding-bottom:18px}section{margin-top:54px}.hero{border:3px solid #6d4428;background:#2a160e;padding:60px 28px;text-align:center;box-shadow:0 20px 50px #0008}.hero h1{font-size:clamp(48px,9vw,90px);margin:12px 0}.hero p{max-width:650px;margin:20px auto 0;line-height:1.8;color:#ceb98a}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}.card{background:#ead8ac;color:#3d281a;padding:28px;border:1px solid #806047;min-height:190px}.card h2{margin-top:8px}.small{letter-spacing:.18em;text-transform:uppercase;font-size:12px;color:#b78045}</style></head><body><main><header><strong>Viktor Iliev</strong><a href="/portfolio/">Leave Tavern</a></header><section class="hero"><div class="small">Welcome, traveler</div><h1>The Cosplay Tavern</h1><p>Costumes, props, armor and every strange project that starts with “I can probably make that.”</p></section><section class="grid"><article class="card"><div class="small">The Armoury</div><h2>Costumes & Props</h2><p>Finished builds, armor pieces, weapons and accessories.</p></article><article class="card"><div class="small">Quest Board</div><h2>Work in Progress</h2><p>Current builds, materials, experiments and repairs.</p></article><article class="card"><div class="small">The Chronicle</div><h2>Gallery</h2><p>Convention photos and completed looks will appear here.</p></article></section></main></body></html>`,
  "3dprints": `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>3D Prints — Viktor Iliev</title><style>body{margin:0;background:#f5f1e8;color:#171717;font-family:Arial,sans-serif}main{max-width:1080px;margin:auto;padding:48px 24px 80px}a{color:#111}header{display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid #bdb5a4;padding-bottom:18px}.hero{margin-top:60px;padding:70px 0;border-bottom:1px solid #bdb5a4}.hero h1{font-size:clamp(54px,10vw,110px);line-height:.9;margin:8px 0}.hero p{max-width:680px;line-height:1.8;color:#555}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;margin-top:44px}.card{background:#fff;border:1px solid #cfc7b7;padding:28px;min-height:180px}.small{text-transform:uppercase;letter-spacing:.18em;font-size:12px;color:#777}.shape{height:170px;background:linear-gradient(135deg,#e6ded0,#fff);border:1px solid #d3cab9;margin-bottom:20px}</style></head><body><main><header><strong>Viktor Iliev / 3D Prints</strong><a href="/portfolio/">Portfolio</a></header><section class="hero"><div class="small">Digital craft / physical form</div><h1>3D Prints</h1><p>A growing archive of functional prints, props, experiments and models made layer by layer.</p></section><section class="grid"><article class="card"><div class="shape"></div><div class="small">01</div><h2>Functional Prints</h2><p>Useful parts, adapters and practical objects.</p></article><article class="card"><div class="shape"></div><div class="small">02</div><h2>Props & Models</h2><p>Display pieces, cosplay parts and custom models.</p></article><article class="card"><div class="shape"></div><div class="small">03</div><h2>Experiments</h2><p>Materials, tolerances and print tests.</p></article></section></main></body></html>`
};

for (const route of ["portfolio", "3dprints", "cosplay"]) {
  const directoryIndex = `out/${route}/index.html`;
  const flatHtml = `out/${route}.html`;

  if (!existsSync(directoryIndex) && existsSync(flatHtml)) {
    mkdirSync(dirname(directoryIndex), { recursive: true });
    copyFileSync(flatHtml, directoryIndex);
  }

  if (!existsSync(directoryIndex) && route in fallbackPages) {
    mkdirSync(dirname(directoryIndex), { recursive: true });
    writeFileSync(directoryIndex, fallbackPages[route], "utf8");
  }

  if (!existsSync(directoryIndex)) {
    throw new Error(`Missing exported route: /${route}/ (expected ${directoryIndex})`);
  }

  console.log(`Verified /${route}/ -> ${directoryIndex}`);
}
