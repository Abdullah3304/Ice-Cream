# Malaice Ice Cream — React

Introductory ice cream brand website built with **Vite**, **React 19**, **React Router**, and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

## Project structure

Each page owns its JSX and CSS. Shared layout (logo, navbar, footer) lives in `components/`.

```
src/
├── main.jsx
├── App.jsx
├── pages/
│   ├── Home.jsx + Home.css       ← all home styles & components
│   ├── About.jsx + About.css
│   ├── Products.jsx + Products.css
│   └── Contact.jsx + Contact.css
├── components/
│   ├── Layout.jsx + Layout.css   ← global reset, ambient bg, back-to-top
│   ├── BrandMark.jsx + BrandMark.css
│   ├── Header.jsx + Header.css
│   └── Footer.jsx + Footer.css
└── data/
    ├── brand.js
    └── products.js
```

## Image assets

Product photos live in `public/images` as compressed **WebP**.

To re-compress new PNG/JPG uploads later:

```bash
npm run optimize-images
```

This converts them to WebP, resizes for web display, and removes the heavy originals.
