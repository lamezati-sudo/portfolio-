# Leonel Mezatio — Portfolio

React, TypeScript, and Vite portfolio featuring software projects, professional experience, and cybersecurity work.

## Development

- `npm install` — install dependencies.
- `npm run dev` — start the local preview at `/portfolio-/`.
- `npm run build` — build the GitHub Pages site into `dist`.
- `npm run lint` — lint the source.
- `npx tsc --noEmit -p tsconfig.app.json` — check application types.

The existing GitHub Pages workflow and `/portfolio-/` base path are retained. The site switches between light and dark colors at 6 a.m. and 6 p.m. local time, using the existing theme hook. Motion respects the visitor’s reduced-motion setting.

## Content and assets

- `public/resume.pdf` is the source for education, employment dates, the 850 Hooly users, 500+ supported NC State users, and CTF participation.
- [Hooly on Google Play](https://play.google.com/store/apps/details?id=dev.leonel.hooly) supplies its official icon, keyboard preview, and product description. The site describes server storage accurately without claiming that AI inference happens entirely on-device.
- [The CAD project demo](https://www.linkedin.com/posts/leonelmezatio_artificialintelligence-cad-engineering-activity-7503967519171346432-PG3A/) supplies the mounting-bracket reference image. It is labeled as a reference, not as generated output. The project is presented as experimental.
- Project content lives in `src/components/projects/projectsData.ts`; employment content lives in `src/components/experience/experienceData.ts`.
- The CAD gallery pairs the SolidWorks reference with four supplied FreeCAD screenshots. Image order and captions live in `src/components/projects/cadGalleryData.ts`. The homepage slideshow holds each image for five seconds, slides to the next, and pauses on image hover or keyboard focus. Only the Work section opens the full gallery, with thumbnails, keyboard arrows, touch swipes, and Escape to close.
