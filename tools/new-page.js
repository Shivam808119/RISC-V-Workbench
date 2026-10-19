// Creates empty page files for every entry in assets/data.js that has none yet.
// Usage:  node tools/new-page.js
const fs = require("fs"), path = require("path");
global.window = {};
eval(fs.readFileSync(path.join(__dirname, "../assets/data.js"), "utf8"));
const S = window.SITE;
const owner = id => (S.team.find(t => t.id === id) || {}).name || "TBD";
for (const [sec, dir] of [["topics", "topics"], ["cores", "cores"]]) {
  for (const it of S[sec]) {
    const f = path.join(__dirname, "..", "content", dir, it.id + ".md");
    if (fs.existsSync(f)) continue;
    const isCore = sec === "cores";
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, `# ${it.title}

> **Owner:** ${owner(it.owner)} · **Status:** draft — replace this template with your notes.

## Overview

${it.summary}

Explain it in 3–4 plain sentences, as if to a teammate who has never seen it.

## ${isCore ? "What this core does" : "How it works"}

Write the explanation here. Use short paragraphs, bullet points, and a diagram if it helps.

## ${isCore ? "Ports and registers" : "Key terms"}

| Term | Meaning |
|------|---------|
| _example_ | _one-line definition_ |

## ${isCore ? "How to use it in Libero" : "Where it appears in the Discovery Kit"}

Step-by-step, or links to the relevant block in the reference design.

## Things we are unsure about

- [ ] Question 1

## References

- Official documentation link
`);
    console.log("created", path.relative(process.cwd(), f));
  }
}
