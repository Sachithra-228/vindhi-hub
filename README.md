# Vindhi

A clean study website for **SC2203 Biostatistics**: lecture notes, tutorials and past papers in one place, with an exam countdown, a 4-day study plan, a progress tracker, an interactive normal curve and a formula sheet.

Plain HTML, CSS and JavaScript. There is no build step and nothing to install.

## Folder structure

```
.
├── index.html                 # the website
├── assets/
│   ├── css/style.css          # styling (light and dark themes)
│   └── js/app.js              # content data + all interactivity
├── materials/
│   ├── lecture-notes/         # ch01 … ch07 PDFs
│   ├── tutorials/             # tutorial-01 … tutorial-05
│   └── past-papers/           # mid-sem and end-sem 2024 / 2025
└── _archive/                  # original zip (not published)
```

## Run it locally

```bash
python -m http.server 5173
```

Then open <http://localhost:5173>.

## Change things

- **Exam date/time:** edit `CONFIG.examDate` at the top of `assets/js/app.js`.
- **Add a PDF:** drop it in the right `materials/` folder, then add one line to `RESOURCES` in `assets/js/app.js`.
- **Study plan and formula cards:** edit `PLAN` and `FORMULAS` in the same file.

## Deploy (GitHub Pages)

Repo → Settings → Pages → Deploy from branch → `main` / root.

Progress ticks are saved in the browser's `localStorage`, so they stay on each device.
