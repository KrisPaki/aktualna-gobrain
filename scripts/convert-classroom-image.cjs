const sharp = require('sharp');
const path = require('path');

const srcPath = path.join(__dirname, '../artifacts/gobrain/src/assets/children-classroom.jpg');

const targets = [
  {
    path: path.join(__dirname, '../artifacts/gobrain/src/assets/children-classroom.webp'),
    width: null
  },
  {
    path: path.join(__dirname, '../artifacts/gobrain/src/assets/children-classroom-640w.webp'),
    width: 640
  },
  {
    path: path.join(__dirname, '../artifacts/gobrain/src/assets/children-classroom-1280w.webp'),
    width: 1280
  },
  {
    path: path.join(__dirname, '../artifacts/gobrain/public/img/children-classroom-640w.webp'),
    width: 640
  },
  {
    path: path.join(__dirname, '../artifacts/gobrain/public/img/children-classroom-1280w.webp'),
    width: 1280
  }
];

async function convert() {
  console.log('Starting image conversion with sharp...');
  for (const target of targets) {
    let pipeline = sharp(srcPath);
    if (target.width) {
      pipeline = pipeline.resize(target.width);
    }
    await pipeline
      .webp({ quality: 85 })
      .toFile(target.path);
    console.log(`Successfully generated: ${target.path}`);
  }
  console.log('All images converted successfully!');
}

convert().catch(err => {
  console.error('Error during image conversion:', err);
  process.exit(1);
});
