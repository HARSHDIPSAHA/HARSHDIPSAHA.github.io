import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const gallerySource = path.join(root, "gallery");
const galleryDest = path.join(root, "public", "images", "gallery");
const dataDir = path.join(root, "src", "data");
const galleryJsonPath = path.join(dataDir, "gallery.json");

const IMG_EXT = new Set([".jpeg", ".jpg", ".png", ".webp", ".gif"]);

function syncGallery() {
  if (!fs.existsSync(gallerySource)) {
    fs.mkdirSync(galleryDest, { recursive: true });
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(galleryJsonPath, JSON.stringify([], null, 2));
    console.log("Gallery source gallery/ not found; wrote empty gallery.json");
    return;
  }

  const files = fs
    .readdirSync(gallerySource)
    .filter((f) => IMG_EXT.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  fs.mkdirSync(galleryDest, { recursive: true });
  fs.mkdirSync(dataDir, { recursive: true });

  const images = [];
  files.forEach((file, i) => {
    const ext = path.extname(file).toLowerCase();
    const destName = `gallery-${i + 1}${ext}`;
    const srcPath = path.join(gallerySource, file);
    const destPath = path.join(galleryDest, destName);
    fs.copyFileSync(srcPath, destPath);
    images.push({
      src: `/images/gallery/${destName}`,
      alt: "Gallery",
      orientation: "horizontal",
    });
  });

  fs.writeFileSync(galleryJsonPath, JSON.stringify(images, null, 2));
  console.log(`Synced ${images.length} gallery images from gallery/ → public/images/gallery, wrote gallery.json`);
}

syncGallery();
