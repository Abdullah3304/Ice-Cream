import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public/images');
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

/** Max width by path pattern — keeps visuals sharp on retina while cutting weight. */
function maxWidthFor(filePath) {
  const rel = filePath.toLowerCase();
  if (rel.includes('main-logo')) return 512;
  if (rel.includes('hero')) return 1920;
  if (rel.includes('showcase') || rel.includes('float')) return 640;
  return 1200;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

const files = await walk(ROOT);
let before = 0;
let after = 0;
let converted = 0;

for (const file of files) {
  const ext = path.extname(file);
  const base = path.basename(file).toLowerCase();

  // Keep the brand logo as the original uploaded PNG — do not recompress.
  if (base.startsWith('main-logo')) {
    console.log(`Skipped (brand logo): ${path.relative(ROOT, file)}`);
    continue;
  }
  const out = file.slice(0, -ext.length) + '.webp';
  const inputStat = await fs.stat(file);
  before += inputStat.size;

  const maxWidth = maxWidthFor(file);
  const image = sharp(file).rotate();
  const meta = await image.metadata();

  let pipeline = sharp(file).rotate();
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  await pipeline
    .webp({ quality: 78, alphaQuality: 85, effort: 5 })
    .toFile(out);

  const outStat = await fs.stat(out);
  after += outStat.size;
  converted += 1;

  await fs.unlink(file);

  const saved = ((1 - outStat.size / inputStat.size) * 100).toFixed(0);
  console.log(
    `${path.relative(ROOT, file)} → .webp  ${formatBytes(inputStat.size)} → ${formatBytes(outStat.size)} (−${saved}%)`,
  );
}

console.log('\n---');
console.log(`Converted: ${converted} files`);
console.log(`Before:    ${formatBytes(before)}`);
console.log(`After:     ${formatBytes(after)}`);
console.log(`Saved:     ${formatBytes(before - after)} (${((1 - after / before) * 100).toFixed(0)}%)`);
