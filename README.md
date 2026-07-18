# Shounak Portfolio

A single-page portfolio website built for a designer/artist client, showcasing professional design projects alongside personal passion work (digital art, sketches, 3D art, animation, game development).

Built with React (Create React App + CRACO) and Tailwind CSS.

## Sections

- **Landing / Hero** — introduction and site headline.
- **Recent Projects** — professional design case studies (e.g. the DMRC project, including field study, initial ideas, lo-fi wireframes, data analysis, metro map interactions).
- **Passion Projects** — personal creative work:
  - **Art** — digital pieces, sketches, and 3D renders (with animated GIFs).
  - **Animation** — character animation scenes.
  - **Game Dev** — mock-up screens for an original game project.
- **Next Up** — upcoming projects.
- **Footer** with social links (LinkedIn, Instagram, Behance, Email).

## Tech stack

- React (Create React App)
- CRACO — custom CRA config
- Tailwind CSS
- React Router / static composition (single-page)

## Getting started

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm start` | Development server (via CRACO) |
| `npm run build` | Production build |
| `npm test` | CRA test runner |

## Project structure

```
src/
├── App.js
├── Home.jsx
├── Components/
│   ├── navbar.jsx
│   ├── footer.jsx
│   ├── Heading.jsx / SubHeading.jsx
│   ├── Feature.jsx
│   ├── Information.jsx
│   ├── ListElement.jsx
│   ├── RecentProjects.jsx
│   ├── ProjectTile.jsx / ProjectBrief.jsx
│   ├── PassionProjectsTile.jsx
│   └── NextUpTile.jsx
└── assets/
    ├── icons/                 # social + UI icons
    ├── projects/              # professional projects (e.g. dmrc/)
    └── passionProjects/
        ├── art/               # 3d, digital, sketches
        ├── animation/
        └── gameDev/
```
