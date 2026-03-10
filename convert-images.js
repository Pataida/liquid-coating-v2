const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

fs.readdirSync(publicDir).forEach((file) => {
  // Targets .jpg, .jpeg, and .png
  if (file.match(/\.(jpe?g)$/i)) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, `${path.parse(file).name}.webp`);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() =>
        console.log(`✅ Converted: ${file} -> ${path.parse(file).name}.webp`),
      )
      .catch((err) => console.error(`❌ Error converting ${file}:`, err));
  }
});
