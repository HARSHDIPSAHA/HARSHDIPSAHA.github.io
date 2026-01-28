# Harshdip Saha — Portfolio

Personal portfolio site: [harshdipsaha.github.io](https://harshdipsaha.github.io)

[https://harshdipsaha.tech/](https://harshdipsaha.tech/)
- **Next.js** (App Router, static export)
- **TypeScript** · **MDX** · **Once UI**

## Run locally

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```

Output: `out/`. Deployed via GitHub Actions to GitHub Pages.

## Project layout

| Path | Purpose |
|------|---------|
| `src/app/` | Pages (home, about, work, gallery, blog) |
| `src/resources/content.tsx` | Copy, nav, gallery config |
| `src/resources/once-ui.config.ts` | Theme, schema, routes |
| `gallery/` | Drop images here; they sync to the site gallery at build |
| `public/` | Static assets (images, resume, etc.) |
