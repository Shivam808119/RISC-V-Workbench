# How to contribute

This site is a set of Markdown files. **To add or change content you only edit `.md` files** — no coding needed.

## Where things live

| What | File |
|------|------|
| A topic page | `content/topics/<id>.md` |
| A core page | `content/cores/<id>.md` |
| Study notes | `content/notes/` |
| Names, owners, status, summaries | `assets/data.js` |

## The simple workflow (everyone)

1. **Pull** the latest version: `git pull`
2. **Make a branch** named after you and the page: `git checkout -b member2/mss-page`
3. **Edit** your page in `content/...` (use any text editor, or VS Code).
4. **Preview** it locally: run `python3 -m http.server` in the repo folder and open <http://localhost:8000>.
5. **Commit** with a clear message: `git add . && git commit -m "Write MSS overview"`
6. **Push**: `git push -u origin member2/mss-page`
7. **Open a Pull Request** on GitHub. One teammate reads it and clicks *Merge*. The website updates itself in about a minute.

You can also click **✎ Edit this page on GitHub** at the top of any page to edit straight in the browser.

## Updating the status badge

When you start or finish a page, change its `status` in `assets/data.js`:

- `"todo"` – not started
- `"wip"` – in progress
- `"done"` – complete and reviewed

## Writing guidelines

- Explain for a teammate who has **never seen** the topic.
- Short paragraphs, one idea each. Use tables and bullet lists for comparisons.
- Define every new term the first time you use it.
- Say what you have **verified** and what you have **not** — don't claim something works until it has been tested.
- Never guess pin numbers or electrical settings; link the official document instead.
- Add images to `content/images/` and reference them as `![description](content/images/file.png)`.

## Adding a new topic or core

1. Add an entry to `assets/data.js`.
2. Run `node tools/new-page.js` to create the page template (or copy an existing page).
3. Fill it in and open a Pull Request.
