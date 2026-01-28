import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const meSource = path.join(root, "me.jpg");
const meDest = path.join(root, "public", "images", "me.jpg");
const ogDir = path.join(root, "public", "images", "og");
const ogDest = path.join(ogDir, "home.jpg");

function syncMe() {
  if (!fs.existsSync(meSource)) {
    console.log("sync-me: me.jpg not found at repo root, skipping.");
    return;
  }

  fs.mkdirSync(path.join(root, "public", "images"), { recursive: true });
  fs.mkdirSync(ogDir, { recursive: true });

  fs.copyFileSync(meSource, meDest);
  fs.copyFileSync(meSource, ogDest);
  console.log("Synced me.jpg from root → public/images/me.jpg and og/home.jpg");
}

syncMe();
