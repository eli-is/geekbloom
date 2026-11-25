const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + count * entrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  const datas = [];

  for (const { buffer, size } of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset

    entries.push(entry);
    datas.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

// Let's create the SVG
// Deep Forest Green Badge, Metallic Gold Trim, G & Leaf / GB
const createSvg = (variant = 'g-leaf') => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Gradient (Deep Forest Green) -->
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0e3421" />
      <stop offset="40%" stop-color="#0a2819" />
      <stop offset="100%" stop-color="#04120a" />
    </linearGradient>

    <!-- Metallic Gold Outer Border -->
    <linearGradient id="goldBorder" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fffae0" />
      <stop offset="20%" stop-color="#f5d77f" />
      <stop offset="50%" stop-color="#b88a2e" />
      <stop offset="80%" stop-color="#f0ce72" />
      <stop offset="100%" stop-color="#fffae0" />
    </linearGradient>

    <!-- Inner Border Shimmer -->
    <linearGradient id="goldInner" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d4af37" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#d4af37" stop-opacity="0.2" />
    </linearGradient>

    <!-- Metallic Gold For Letters -->
    <linearGradient id="goldGlyph" x1="0.2" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="20%" stop-color="#fff6d2" />
      <stop offset="50%" stop-color="#eec76d" />
      <stop offset="80%" stop-color="#b8872b" />
      <stop offset="100%" stop-color="#e2bc63" />
    </linearGradient>

    <!-- Emerald Leaf Gradient -->
    <linearGradient id="leafGrad" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="45%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#6ee7b7" />
    </linearGradient>

    <!-- Ambient Center Emerald Glow -->
    <radialGradient id="glow" cx="50%" cy="46%" r="48%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#04120a" stop-opacity="0" />
    </radialGradient>

    <!-- Subtle Drop Shadow -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.85" />
    </filter>
  </defs>

  <!-- Squircle / Rounded Plaque Shape -->
  <rect x="20" y="20" width="472" height="472" rx="112" fill="url(#bg)" stroke="url(#goldBorder)" stroke-width="16" />
  
  <!-- Inner Gold Accent Inset -->
  <rect x="38" y="38" width="436" height="436" rx="96" fill="none" stroke="url(#goldInner)" stroke-width="3" />

  <!-- Center Ambient Emerald Radial Glow -->
  <circle cx="256" cy="256" r="190" fill="url(#glow)" />

  ${variant === 'g-leaf' ? `
  <!-- Monogram G with Botanical Bloom Leaf -->
  <g filter="url(#shadow)">
    <!-- Elegant Serif 'G' -->
    <path d="
      M 344,188
      C 328,154 296,134 252,134
      C 184,134 135,186 135,260
      C 135,334 186,386 256,386
      C 318,386 358,352 368,296
      L 266,296
      L 266,252
      L 404,252
      L 404,298
      C 392,382 334,424 254,424
      C 158,424 92,354 92,260
      C 92,164 160,96 254,96
      C 318,96 368,126 392,176
      Z
    " fill="url(#goldGlyph)" />

    <!-- Blooming Emerald Leaf (Symbol of Bloom) -->
    <path d="
      M 340,166
      C 356,104 416,76 436,72
      C 434,94 424,142 380,165
      C 360,175 346,171 340,166
      Z
    " fill="url(#leafGrad)" />
    
    <!-- Delicate Leaf Spine -->
    <path d="M 343,165 Q 380,138 433,76" stroke="#d1fae5" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.9" />

    <!-- Secondary Small Leaf Sprout -->
    <path d="
      M 388,142
      C 412,130 432,124 442,118
      C 436,134 422,150 405,152
      Z
    " fill="#34d399" />
  </g>
  ` : `
  <!-- Monogram GB Badge -->
  <g filter="url(#shadow)">
    <!-- Letter G -->
    <path d="
      M 226,192
      C 214,166 190,150 156,150
      C 106,150 72,192 72,256
      C 72,320 108,362 160,362
      C 206,362 234,334 240,292
      L 170,292
      L 170,258
      L 266,258
      L 266,294
      C 256,356 216,394 158,394
      C 86,394 38,336 38,256
      C 38,176 88,118 158,118
      C 206,118 244,142 260,182
      Z
    " fill="url(#goldGlyph)" />

    <!-- Letter B -->
    <path d="
      M 288,124
      L 384,124
      C 424,124 452,148 452,188
      C 452,218 434,240 406,250
      C 440,260 460,286 460,324
      C 460,370 426,394 380,394
      L 288,394
      Z
      M 326,158
      L 326,236
      L 374,236
      C 398,236 414,222 414,196
      C 414,172 398,158 374,158
      Z
      M 326,268
      L 326,360
      L 378,360
      C 404,360 422,344 422,314
      C 422,284 404,268 378,268
      Z
    " fill="url(#goldGlyph)" />

    <!-- Emerald Leaf Accent on top of B -->
    <path d="
      M 374,124
      C 384,76 430,52 446,48
      C 444,66 436,104 404,122
      Z
    " fill="url(#leafGrad)" />
    <path d="M 376,123 Q 406,100 443,51" stroke="#d1fae5" stroke-width="3" stroke-linecap="round" fill="none" />
  </g>
  `}
</svg>`;
};

module.exports = { createSvg, createIco };
