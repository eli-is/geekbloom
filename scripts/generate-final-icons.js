const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { createSvg, createIco } = require('./generate-icons');

async function buildAllIcons() {
  const svg = createSvg('g-leaf');

  // 1. Write SVG icons
  fs.writeFileSync('app/icon.svg', svg);
  fs.writeFileSync('public/icon.svg', svg);
  console.log('✓ Wrote app/icon.svg & public/icon.svg');

  // 2. Generate PNGs of various sizes
  const sizes = [16, 32, 48, 64, 128, 180, 192, 256, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    const buf = await sharp(Buffer.from(svg))
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngBuffers[size] = buf;
  }

  // Write app/icon.png and public/icon.png (standard 32x32)
  fs.writeFileSync('app/icon.png', pngBuffers[32]);
  fs.writeFileSync('public/icon.png', pngBuffers[32]);
  console.log('✓ Wrote app/icon.png & public/icon.png');

  // Write apple-icon.png (180x180)
  fs.writeFileSync('app/apple-icon.png', pngBuffers[180]);
  fs.writeFileSync('public/apple-icon.png', pngBuffers[180]);
  console.log('✓ Wrote app/apple-icon.png & public/apple-icon.png');

  // Write 192 and 512 for Android/PWA
  fs.writeFileSync('public/icon-192.png', pngBuffers[192]);
  fs.writeFileSync('public/icon-512.png', pngBuffers[512]);
  console.log('✓ Wrote public/icon-192.png & public/icon-512.png');

  // 3. Generate Multi-Resolution Favicon.ico
  // Include 16, 32, 48, 64, 128, 256
  const icoSizes = [16, 32, 48, 64, 128, 256];
  const icoEntries = icoSizes.map(size => ({
    size,
    buffer: pngBuffers[size]
  }));

  const icoBuffer = createIco(icoEntries);
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('✓ Wrote app/favicon.ico & public/favicon.ico (multi-resolution)');

  // 4. Clean up test files
  const testFiles = [
    'public/test-icon-g.svg',
    'public/test-icon-gb.svg',
    'public/test-g-512.png',
    'public/test-g-32.png',
    'public/test-g-16.png',
    'public/test-gb-512.png',
    'public/test-gb-32.png',
    'public/test-font-g.png',
    'scripts/test-font.js',
    'scripts/build-favicons.js'
  ];

  for (const f of testFiles) {
    if (fs.existsSync(f)) {
      fs.unlinkSync(f);
    }
  }
  console.log('✓ Cleaned up temporary test files');
}

buildAllIcons().catch(err => {
  console.error('Failed to build icons:', err);
  process.exit(1);
});
