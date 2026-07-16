import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SVG_CONTENT = `<?xml version="1.0" encoding="UTF-8"?>
<svg 
  viewBox="0 0 100 100" 
  width="512"
  height="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <!-- Glossy metallic border bezel gradient -->
    <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891b2" />
      <stop offset="30%" stop-color="#22d3ee" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="75%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <!-- Dark background inside the logo disc -->
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#051622" />
      <stop offset="70%" stop-color="#02080c" />
      <stop offset="100%" stop-color="#000205" />
    </radialGradient>

    <!-- Bright cyan front-facing parts of the 3D emblem -->
    <linearGradient id="cyanFront" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00ffff" />
      <stop offset="100%" stop-color="#00b8d4" />
    </linearGradient>

    <!-- Deep dark shaded parts of the 3D emblem fold -->
    <linearGradient id="cyanShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#004d61" />
      <stop offset="100%" stop-color="#001a24" />
    </linearGradient>

    <!-- Glow and shadow filter for the inner emblem -->
    <filter id="emblemGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#00ffff" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Background circular disc -->
  <circle cx="50" cy="50" r="47" fill="url(#bgGrad)" />

  <!-- Outer glossy metallic ring bezel -->
  <circle cx="50" cy="50" r="47" stroke="url(#bezelGrad)" stroke-width="2.5" fill="none" />
  <circle cx="50" cy="50" r="45.5" stroke="#00ffff" stroke-width="0.5" stroke-opacity="0.2" fill="none" />

  <!-- Inner ambient shadow circle -->
  <circle cx="50" cy="50" r="44" stroke="#000000" stroke-width="1.5" stroke-opacity="0.6" fill="none" />

  <!-- The 3D Emblem Symbol -->
  <g filter="url(#emblemGlow)">
    <!-- 1. Top Bar (Trapezoid, bright cyan) -->
    <polygon 
      points="36,28 58,28 47,39 36,39" 
      fill="url(#cyanFront)" 
    />

    <!-- 2. Top Shadow Fold (Diamond, dark blue/cyan shadow) -->
    <polygon 
      points="58,28 68,39 58,50 47,39" 
      fill="url(#cyanShadow)" 
    />

    <!-- 3. Middle Bar (Hexagon, bright cyan) -->
    <polygon 
      points="47,39 58,39 67,50 58,61 47,61 38,50" 
      fill="url(#cyanFront)" 
    />

    <!-- 4. Bottom Shadow Fold (Diamond, dark blue/cyan shadow) -->
    <polygon 
      points="47,61 58,61 47,72 36,61" 
      fill="url(#cyanShadow)" 
    />

    <!-- 5. Bottom Bar (Trapezoid, bright cyan) -->
    <polygon 
      points="36,61 47,61 58,72 36,72" 
      fill="url(#cyanFront)" 
    />
  </g>
</svg>`;

// Helper function to package a PNG buffer into a standard .ico file
function convertPngToIco(pngBuffer, width = 48, height = 48) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Image type (1 for ICO)
  header.writeUInt16LE(1, 4); // Number of images

  const directoryEntry = Buffer.alloc(16);
  directoryEntry.writeUInt8(width === 256 ? 0 : width, 0); // Width
  directoryEntry.writeUInt8(height === 256 ? 0 : height, 1); // Height
  directoryEntry.writeUInt8(0, 2); // Color count
  directoryEntry.writeUInt8(0, 3); // Reserved
  directoryEntry.writeUInt16LE(1, 4); // Color planes
  directoryEntry.writeUInt16LE(32, 6); // Bits per pixel
  directoryEntry.writeUInt32LE(pngBuffer.length, 8); // PNG size
  directoryEntry.writeUInt32LE(22, 12); // Offset to PNG data (6 bytes header + 16 bytes directory)

  return Buffer.concat([header, directoryEntry, pngBuffer]);
}

async function run() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Write favicon.svg
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, SVG_CONTENT, 'utf8');
  console.log('✓ Created favicon.svg');

  // Load SVG into sharp
  const svgBuffer = Buffer.from(SVG_CONTENT);

  // 2. Generate 16x16 PNG
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✓ Created favicon-16x16.png');

  // 3. Generate 32x32 PNG
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✓ Created favicon-32x32.png');

  // 4. Generate Apple Touch Icon (180x180 PNG)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Created apple-touch-icon.png');

  // 5. Generate 48x48 PNG, then convert to ICO
  const png48Buffer = await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toBuffer();
  
  const icoBuffer = convertPngToIco(png48Buffer, 48, 48);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Created favicon.ico');

  console.log('All favicon files generated successfully!');
}

run().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
