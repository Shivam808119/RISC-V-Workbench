# RISC-V Learning Hub — PolarFire SoC Discovery Kit

A team-written website that explains the hardware inside the PolarFire SoC (RISC-V cores + FPGA fabric), one topic and one core at a time.

- **8 topics** and **10 cores**, each with an owner and a status badge
- Pages are plain Markdown in `content/` — add or edit without coding
- Auto-published with GitHub Pages on every merge to `main`

## Preview locally

```bash
python3 -m http.server
# open http://localhost:8000
```

(Opening `index.html` by double-click will not load pages — the browser blocks local file reads.)

## Publish

1. Push to GitHub on the `main` branch.
2. Repo → **Settings → Pages → Source: GitHub Actions**.
3. After the workflow finishes, the site is at `https://<user-or-org>.github.io/<repo>/`.
4. Put the repo URL in `assets/data.js` (`repo:`) to turn on the "Edit on GitHub" button.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Structure

```text
index.html            home page
page.html             viewer for every Markdown page
assets/data.js        topics, cores, owners, status (edit this)
assets/style.css      design
assets/app.js         site logic
content/notes/        what we already learned
content/topics/       one file per RISC-V topic
content/cores/        one file per core
content/projects/     hands-on projects
tools/new-page.js     create page templates
```
