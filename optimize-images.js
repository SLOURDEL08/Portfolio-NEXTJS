const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const sourceDir = './public';
const targetDir = './public-opti';

async function processImage(sourcePath, targetPath) {
  const image = sharp(sourcePath);
  const metadata = await image.metadata();

  const newWidth = Math.round(metadata.width * 0.9);
  const newHeight = Math.round(metadata.height * 0.9);

  await image.resize(newWidth, newHeight).webp({ quality: 80 }).toFile(targetPath);
}

async function processDirectory(source, target) {
  const entries = await fs.readdir(source, { withFileTypes: true });

  for (let entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      await fs.mkdir(targetPath, { recursive: true });
      await processDirectory(sourcePath, targetPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const targetWebPPath = targetPath.replace(/\.[^.]+$/, '.webp');
        await processImage(sourcePath, targetWebPPath);
        console.log(`Optimized: ${sourcePath} -> ${targetWebPPath}`);
      } else {
        await fs.copyFile(sourcePath, targetPath);
        console.log(`Copied: ${sourcePath} -> ${targetPath}`);
      }
    }
  }
}

async function main() {
  try {
    await fs.mkdir(targetDir, { recursive: true });
    await processDirectory(sourceDir, targetDir);
    console.log('Image optimization and file transfer completed successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
