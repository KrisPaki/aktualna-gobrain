import sharp from 'sharp';

const src = "./artifacts/gobrain/src/assets/children-classroom.png";
const destWebp = "./artifacts/gobrain/src/assets/children-classroom.webp";
const dest640 = "./artifacts/gobrain/public/img/children-classroom-640w.webp";
const dest1280 = "./artifacts/gobrain/public/img/children-classroom-1280w.webp";

async function run() {
  try {
    // Convert to main WebP
    await sharp(src)
      .webp({ quality: 85 })
      .toFile(destWebp);
    console.log("Converted main WebP successfully!");

    // Convert to 640w WebP
    await sharp(src)
      .resize(640)
      .webp({ quality: 85 })
      .toFile(dest640);
    console.log("Generated children-classroom-640w.webp successfully!");

    // Convert to 1280w WebP
    await sharp(src)
      .resize(1280)
      .webp({ quality: 85 })
      .toFile(dest1280);
    console.log("Generated children-classroom-1280w.webp successfully!");
  } catch (err) {
    console.error("Error converting images:", err);
  }
}

run();
