import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseURL = "https://harshdipsaha.github.io";
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const projectsDir = path.join(root, "src", "app", "work", "projects");

function getWorkSlugs() {
  if (!fs.existsSync(projectsDir)) return [];
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => path.basename(f, ".mdx"));
}

const routes = [
  { url: baseURL + "/", lastmod: new Date().toISOString().split("T")[0] },
  { url: baseURL + "/about", lastmod: new Date().toISOString().split("T")[0] },
  { url: baseURL + "/work", lastmod: new Date().toISOString().split("T")[0] },
  { url: baseURL + "/gallery", lastmod: new Date().toISOString().split("T")[0] },
];

const works = getWorkSlugs().map((slug) => ({
  url: `${baseURL}/work/${slug}`,
  lastmod: new Date().toISOString().split("T")[0],
}));

const urls = [...routes, ...works];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.url}</loc><lastmod>${u.lastmod}</lastmod></url>`).join("\n")}
</urlset>`;

const robots = `User-agent: *
Allow: /

Sitemap: ${baseURL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
console.log("Generated public/robots.txt and public/sitemap.xml");
