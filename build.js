```javascript
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUTPUT = path.join(ROOT, 'public');

const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.svg',
  '.bmp'
]);

// Yayınlanacak dosyaları public klasörüne hazırla.
function build() {
  // Önceki derlemeden kalan public klasörünü temizle.
  fs.rmSync(OUTPUT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT, { recursive: true });

  // Görselleri bul.
  const files = fs.readdirSync(ROOT);
  const images = [];

  for (const file of files) {
    const source = path.join(ROOT, file);

    // Klasörleri ve gizli dosyaları atla.
    if (file.startsWith('.')) continue;
    if (file === 'public') continue;
    if (file === 'node_modules') continue;

    const stat = fs.statSync(source);

    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();

      if (IMAGE_EXTENSIONS.has(ext)) {
        images.push(file);
      }

      // HTML, CSS, JS, JSON ve diğer statik dosyaları kopyala.
      // package.json ve build.js yayınlanmaz.
      if (!['package.json', 'package-lock.json', 'build.js'].includes(file)) {
        fs.copyFileSync(source, path.join(OUTPUT, file));
      }
    }
  }

  images.sort();

  // Görsel listesini yayın klasörüne yaz.
  fs.writeFileSync(
    path.join(OUTPUT, 'images.json'),
    JSON.stringify(images, null, 2),
    'utf-8'
  );

  // images.js dosyasını kullanan mevcut kodlarla uyumlu çıktı.
  const imagesJs = `window.galleryImages = ${JSON.stringify(images, null, 2)};\n`;

  fs.writeFileSync(
    path.join(OUTPUT, 'images.js'),
    imagesJs,
    'utf-8'
  );

  console.log(
    `Build successful: ${images.length} images copied to public.`
  );
}

build();
```
