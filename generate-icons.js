const fs = require('fs');
const path = require('path');

// Simple colored square PNG (sage green #6b8f7f)
// This is a minimal 192x192 PNG with sage green background
function generateIcon(size, filename) {
  // Create a simple colored square using SVG, then we'll save it
  // For now, let's use a minimal valid PNG approach

  // This is a 1x1 sage green PNG in base64
  const onePixelPNG = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    'base64'
  );

  // For a better approach, let's create a simple colored PNG
  // Using a pre-made sage green square
  const sageGreenSquare = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEklEQVR42mNk+P+/nhEIGBkYADMvAv+Lm+h5AAAAAElFTkSuQmCC',
    'base64'
  );

  console.log(`Creating ${filename}...`);
  fs.writeFileSync(path.join(__dirname, 'public', filename), sageGreenSquare);
  console.log(`✓ Created ${filename}`);
}

// Generate all required icon files
console.log('Generating PWA icon files...\n');

generateIcon(192, 'icon-192x192.png');
generateIcon(512, 'icon-512x512.png');
generateIcon(180, 'apple-touch-icon.png');

console.log('\n✓ All icon files generated!');
console.log('\nNote: These are minimal placeholder icons.');
console.log('For production, open public/icon-fallback.html in a browser');
console.log('and download the properly designed icons.');
