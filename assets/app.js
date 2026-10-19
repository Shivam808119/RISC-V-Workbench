(function () {
  var S = window.SITE;
  var SECTIONS = [
    { key: "notes", label: "What we learned", dir: "notes" },
    { key: "topics", label: "RISC-V Topics", dir: "topics" },
    { key: "cores", label: "Cores", dir: "cores" },
    { key: "projects", label: "Projects", dir: "projects" },
  ];
  var STATUS = { todo: "Not started", wip: "In progress", done: "Complete" };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ownerName(id) { var m = (S.team || []).filter(function (t) { return t.id === id; })[0]; return m ? m.name : ""; }
  function badge(st) { return '<span class="badge ' + st + '">' + STATUS[st] + "</span>"; }
  function link(sec, id) { return "page.html?s=" + sec + "&id=" + id; }

  /* ---------- theme ---------- */
  function applyTheme(t) { if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme"); }
  try { applyTheme(localStorage.getItem("theme")); } catch (e) {}

  /* ---------- header / footer ---------- */
  function chrome(active) {
    var nav = [
      ["index.html", "Home", "home"],
      ["index.html#notes", "Learned", "n"],
      ["index.html#topics", "Topics", "t"],
      ["index.html#cores", "Cores", "c"],
      ["index.html#team", "Team", "team"],
      ["page.html?s=notes&id=contributing", "Contribute", "contrib"],
    ];
    var h = '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html"><span class="logo">RV</span><span>' + esc(S.title) + "<small>" + esc(S.subtitle) + "</small></span></a>" +
      '<nav class="nav" id="nav">' + nav.map(function (n) { return '<a href="' + n[0] + '"' + (n[2] === active ? ' class="active"' : "") + ">" + n[1] + "</a>"; }).join("") +
      '<button class="icon-btn" id="theme" title="Toggle dark / light" aria-label="Toggle theme">🌓</button></nav>' +
      '<button class="icon-btn menu-btn" id="menu" aria-label="Menu">☰</button></div></header>';
    document.body.insertAdjacentHTML("afterbegin", h);
    document.body.insertAdjacentHTML("beforeend",
      '<footer class="site-footer"><div class="wrap">' + esc(S.title) + " · " + esc(S.subtitle) +
      " · Written by the team, for the team. Verify details against official Microchip documentation.</div></footer>");
    document.getElementById("menu").onclick = function () { document.getElementById("nav").classList.toggle("open"); };
    document.getElementById("theme").onclick = function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var dark = cur ? cur === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = dark ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    };
  }

  /* ---------- home ---------- */
  function cards(sec, items, numbered) {
    return items.map(function (it, i) {
      return '<a class="card" href="' + link(sec, it.id) + '">' +
        (numbered ? '<span class="num">' + String(i + 1).padStart(2, "0") + "</span>" : "") +
        "<h3>" + esc(it.title) + "</h3><p>" + esc(it.summary || "") + "</p>" +
        '<div class="meta">' + badge(it.status) + "<span>" + esc(ownerName(it.owner)) + "</span></div></a>";
    }).join("");
  }
  function home() {
    chrome("home");
    var all = S.topics.concat(S.cores);
    var done = all.filter(function (x) { return x.status === "done"; }).length;
    var wip = all.filter(function (x) { return x.status === "wip"; }).length;
    var pct = Math.round((done / all.length) * 100);
    var set = function (id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; };
    set("stats",
      '<div class="stat"><b>' + S.topics.length + "</b><span>RISC-V topics</span></div>" +
      '<div class="stat"><b>' + S.cores.length + "</b><span>cores to document</span></div>" +
      '<div class="stat"><b>' + done + "</b><span>pages complete</span></div>" +
      '<div class="stat"><b>' + wip + "</b><span>in progress</span></div>" +
      '<div class="stat"><b>' + pct + '%</b><span>overall progress</span><div class="bar"><i style="width:' + pct + '%"></i></div></div>');
    set("notes-grid", cards("notes", S.notes, true));
    set("topics-grid", cards("topics", S.topics, true));
    set("cores-grid", cards("cores", S.cores, true));
    set("projects-grid", cards("projects", S.projects, false));
    set("team-grid", S.team.map(function (m) {
      var mine = all.filter(function (x) { return x.owner === m.id; });
      return '<div class="member"><h3>' + esc(m.name) + "</h3><ul>" +
        (mine.length ? mine.map(function (x) { return '<li><a href="' + link(S.topics.indexOf(x) >= 0 ? "topics" : "cores", x.id) + '">' + esc(x.title) + "</a></li>"; }).join("") : "<li>Nothing assigned yet</li>") +
        "</ul></div>";
    }).join(""));
  }

  /* ---------- page viewer ---------- */
  function viewer() {
    chrome("");
    var q = new URLSearchParams(location.search);
    var sec = q.get("s") || "notes", id = q.get("id") || "";
    var meta = SECTIONS.filter(function (x) { return x.key === sec; })[0] || SECTIONS[0];
    var list = S[meta.key] || [];
    var item = list.filter(function (x) { return x.id === id; })[0];
    var isContrib = id === "contributing";
    var path = isContrib ? "CONTRIBUTING.md" : "content/" + meta.dir + "/" + id + ".md";

    // sidebar
    var side = SECTIONS.map(function (s) {
      return "<h4>" + s.label + "</h4>" + (S[s.key] || []).map(function (it) {
        return '<a href="' + link(s.key, it.id) + '"' + (s.key === sec && it.id === id ? ' class="active"' : "") + ">" + esc(it.title) + "</a>";
      }).join("");
    }).join("") + '<h4>Help</h4><a href="' + link("notes", "contributing") + '"' + (isContrib ? ' class="active"' : "") + ">How to contribute</a>";
    document.getElementById("side").innerHTML = side;

    var out = document.getElementById("doc");
    fetch(path).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (md) {
      var html = marked.parse(md);
      var top = '<div class="doc-top">' + (item ? badge(item.status) + (ownerName(item.owner) ? "<span>Owner: " + esc(ownerName(item.owner)) + "</span>" : "") : "") +
        (S.repo ? '<a class="edit-link" target="_blank" rel="noopener" href="' + S.repo + "/edit/" + S.branch + "/" + path + '">✎ Edit this page on GitHub</a>' : "") + "</div>";
      var pager = "";
      var idx = list.indexOf(item);
      if (item && idx >= 0) {
        var p = list[idx - 1], n = list[idx + 1];
        pager = '<div class="pager">' +
          (p ? '<a href="' + link(sec, p.id) + '"><small>← Previous</small>' + esc(p.title) + "</a>" : "<span></span>") +
          (n ? '<a class="next" href="' + link(sec, n.id) + '"><small>Next →</small>' + esc(n.title) + "</a>" : "<span></span>") + "</div>";
      }
      out.innerHTML = top + html + pager;
      document.title = (item ? item.title : "Contributing") + " · " + S.title;
      // rewrite relative .md links between notes
      out.querySelectorAll("a[href]").forEach(function (a) {
        var m = a.getAttribute("href").match(/^(?:\.\/)?(?:\.\.\/)?(?:docs\/)?(\d\d-[\w-]+)\.md$/);
        if (m) a.setAttribute("href", link("notes", m[1]));
        else if (/^https?:/.test(a.getAttribute("href"))) { a.target = "_blank"; a.rel = "noopener"; }
      });
      // toc
      var heads = out.querySelectorAll("h2, h3");
      var toc = "";
      heads.forEach(function (h, i) { h.id = h.id || "h" + i; toc += '<a class="' + (h.tagName === "H3" ? "l3" : "") + '" href="#' + h.id + '">' + esc(h.textContent) + "</a>"; });
      document.getElementById("toc").innerHTML = heads.length ? "<h4>On this page</h4>" + toc : "";
    }).catch(function () {
      out.innerHTML = '<div class="error"><b>Page not found.</b><br>Looking for <code>' + esc(path) + "</code>. " +
        "If you are opening the file directly, run <code>python3 -m http.server</code> and open <code>http://localhost:8000</code> instead.</div>";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var p = document.body.getAttribute("data-page");
    if (p === "home") home(); else viewer();
  });
})();
