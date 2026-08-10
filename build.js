const fs = require('fs');
const path = require('path');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp']);

function build() {
  const files = fs.readdirSync(__dirname);
  const images = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (IMAGE_EXTENSIONS.has(ext)) {
      // Exclude hidden files
      if (!file.startsWith('.')) {
        images.push(file);
      }
    }
  }

  // Sort images alphabetically
  images.sort();

  // Write images.json
  fs.writeFileSync(
    path.join(__dirname, 'images.json'),
    JSON.stringify(images, null, 2),
    'utf-8'
  );

  // Write images.js to prevent CORS issues (e.g. file:// protocol)
  const jsContent = `// Automatically generated file. Do not edit directly.\nwindow.ETERNAL_IMAGES = ${JSON.stringify(images, null, 2)};\n`;
  fs.writeFileSync(
    path.join(__dirname, 'images.js'),
    jsContent,
    'utf-8'
  );

  console.log(`Generated images.json and images.js successfully with ${images.length} images.`);
}

build();
