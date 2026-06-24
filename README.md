# XYZ Ice Cream — Next.js

Introductory ice cream brand website built with **Next.js 15**, **React 19**, and custom CSS (Chroma Swirl theme).

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |

## Project structure

```
src/
├── app/
│   ├── layout.jsx       # Root layout + fonts
│   ├── page.jsx         # Home (/)
│   ├── about/page.jsx
│   ├── products/page.jsx
│   ├── contact/page.jsx
│   └── globals.css      # Full theme styles
├── components/
└── data/products.js
public/
└── images/              # Product photos
```

## Tech stack

- Next.js 15 (App Router)
- React 19
- next/image for optimized images
- next/font (Syne + DM Sans)
- Plain CSS — no Tailwind
