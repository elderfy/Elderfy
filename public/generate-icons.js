// Script to generate PNG icons from SVG
// Run with: node generate-icons.js
const fs = require('fs');

const svgIcon = `<svg width="192" height="192" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6b8f7f;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c8876a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="192" height="192" fill="url(#grad)" rx="42"/>
  <circle cx="96" cy="80" r="32" fill="white" opacity="0.9"/>
  <path d="M 96 90 A 20 20 0 0 1 96 130 A 48 48 0 0 0 48 154 A 48 48 0 0 0 144 154 A 48 48 0 0 0 96 130 A 20 20 0 0 1 96 90" fill="white" opacity="0.9"/>
  <text x="96" y="170" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="white" text-anchor="middle">Elderfy</text>
</svg>`;

const svg512 = svgIcon.replace('width="192" height="192"', 'width="512" height="512"')
  .replace('cx="96"', 'cx="256"')
  .replace('cy="80"', 'cy="213"')
  .replace('r="32"', 'r="85"')
  .replace('M 96 90', 'M 256 240')
  .replace('96 130', '256 347')
  .replace('48 154', '128 411')
  .replace('144 154', '384 411')
  .replace('96 130', '256 347')
  .replace('96 90', '256 240')
  .replace('y="170"', 'y="453"')
  .replace('font-size="16"', 'font-size="43"');

console.log('SVG icons generated. To convert to PNG, use an online converter or imagemagick:');
console.log('For 192x192: Save the SVG and convert with: convert icon-192.svg icon-192x192.png');
console.log('For 512x512: Save the SVG and convert with: convert icon-512.svg icon-512x512.png');
console.log('\nOr use an online SVG to PNG converter like: https://cloudconvert.com/svg-to-png');

fs.writeFileSync('icon-192.svg', svgIcon);
fs.writeFileSync('icon-512.svg', svg512);
console.log('\nSVG files created: icon-192.svg, icon-512.svg');
