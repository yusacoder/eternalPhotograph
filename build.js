const fs = require('fs');
const path = require('path');

const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.svg',
  '.bmp'
]);

function build() {
  const files = fs.readdirSync(__dirname);
  const images = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (IMAGE_EXTENSIONS.has(ext) && !file.startsWith('.')) {
      images.push(file);
    }
  }

  images.sort();

  fs.writeFileSync(
    path.join(__dirname, 'images.json'),
    JSON.stringify(images, null, 2),
    'utf-8'
  );

  const jsContent = `window.ETERNAL_IMAGES = ${JSON.stringify(images, null, 2)};\n`;
  fs.writeFileSync(
    path.join(__dirname, 'images.js'),
    jsContent,
    'utf-8'
  );

  console.log(
    `Generated images.json and images.js successfully with ${images.length} images.`
  );
}

build();
