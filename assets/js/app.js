/* Vindhi — SC2203 Biostatistics
   Plain JS, no build step. To add a file: drop the PDF into /materials/... and add a row to RESOURCES. */
(() => {
  'use strict';

  /* ================= Config ================= */
  const CONFIG = {
    // Exam date/time (local). Exam time wasn't known, so 09:00 is a placeholder: change it here.
    examDate: '2026-11-21T09:00:00',
    examLabel: 'Saturday 21 November 2026',
    storageKey: 'vindhi-done-v1',
    themeKey: 'vindhi-theme',
  };

  /* ================= Content ================= */
  const CHAPTERS = [
    { n: 1, sym: 'n', title: 'Intro to Biostatistics & Random Sampling',
      blurb: 'What biostatistics is for, the language of populations and samples, and how random samples are drawn.',
      topics: ['Population vs sample', 'Data types', 'Random sampling'] },
    { n: 2, sym: 'x̄', title: 'Descriptive Statistics',
      blurb: 'Summarising data with tables, charts, centre and spread.',
      topics: ['Frequency tables', 'Mean · median · mode', 'Spread', 'Charts'] },
    { n: 3, sym: 'P', title: 'Introduction to Probability',
      blurb: 'Events, probability rules and conditional probability.',
      topics: ['Events', 'Probability rules', 'Conditional probability'] },
    { n: 4, sym: 'σ', title: 'Random Variables & Probability Distributions',
      blurb: 'Discrete and continuous random variables, ending with the star of the show: the normal distribution.',
      topics: ['Discrete', 'Continuous', 'Normal distribution'] },
    { n: 5, sym: 'μ', title: 'Sampling Distributions & Confidence Intervals',
      blurb: 'Parameter vs statistic, sampling distributions, the Central Limit Theorem and confidence intervals.',
      topics: ['Parameter vs statistic', 'Central Limit Theorem', 'Confidence intervals'] },
    { n: 6, sym: 'α', title: 'Hypothesis Testing',
      blurb: 'Framing H₀ and H₁, choosing α, reading p-values and concluding in biological context.',
      topics: ['H₀ vs H₁', 'p-values', 'Significance level α'] },
    { n: 7, sym: 'r', title: 'Common Statistical Tests',
      blurb: 'Preparing a dataset for analysis and an introduction to regression.',
      topics: ['Data preparation', 'Linear regression'] },
  ];

  const N = 'notes', T = 'tutorial', P = 'paper';
  const RESOURCES = [
    // Lecture notes
    { id: 'n1a', ch: 1, type: N, title: 'Part 1', file: 'materials/lecture-notes/ch01-intro-biostatistics-part-1.pdf', pages: 54, mb: 1.2 },
    { id: 'n1b', ch: 1, type: N, title: 'Part 2', file: 'materials/lecture-notes/ch01-intro-biostatistics-part-2.pdf', pages: 33, mb: 0.6 },
    { id: 'n2',  ch: 2, type: N, title: 'Descriptive Statistics', file: 'materials/lecture-notes/ch02-descriptive-statistics.pdf', pages: 71, mb: 2.1 },
    { id: 'n3',  ch: 3, type: N, title: 'Probability (notes)', file: 'materials/lecture-notes/ch03-probability-notes.pdf', pages: 33, mb: 8.1 },
    { id: 'n4a', ch: 4, type: N, title: 'Part 1: Random variables, discrete & continuous', file: 'materials/lecture-notes/ch04-random-variables-part-1.pdf', pages: 20, mb: 6.0 },
    { id: 'n4b', ch: 4, type: N, title: 'Part 2: Continuous distributions (notes)', file: 'materials/lecture-notes/ch04-random-variables-part-2-notes.pdf', pages: 7, mb: 0.4 },
    { id: 'n5a', ch: 5, type: N, title: 'Sampling distributions (notes)', file: 'materials/lecture-notes/ch05-sampling-distributions-notes.pdf', pages: 12, mb: 7.2 },
    { id: 'n5b', ch: 5, type: N, title: 'Sampling distributions (slides)', file: 'materials/lecture-notes/ch05-sampling-distributions-slides.pdf', pages: 12, mb: 4.3 },
    { id: 'n6',  ch: 6, type: N, title: 'Hypothesis Testing (notes)', file: 'materials/lecture-notes/ch06-hypothesis-testing-notes.pdf', pages: 27, mb: 4.0 },
    { id: 'n7a', ch: 7, type: N, title: 'Intro to data analysis for research', file: 'materials/lecture-notes/ch07-common-tests-intro.pdf', pages: 11, mb: 0.6 },
    { id: 'n7b', ch: 7, type: N, title: 'Linear regression', file: 'materials/lecture-notes/ch07-common-tests-linear-regression.pdf', pages: 10, mb: 2.0 },
    // Tutorials
    { id: 't1', ch: 1, type: T, title: 'Tutorial 01', file: 'materials/tutorials/tutorial-01.pdf', pages: 8, mb: 0.2 },
    { id: 't2', ch: 2, type: T, title: 'Tutorial 02 (with solutions)', file: 'materials/tutorials/tutorial-02-solutions.pdf', pages: 9, mb: 0.6 },
    { id: 't3', ch: 3, type: T, title: 'Tutorial 03', file: 'materials/tutorials/tutorial-03.pdf', pages: 3, mb: 0.3 },
    { id: 't4', ch: 4, type: T, title: 'Tutorial 04 (Chapter 4 homework)', file: 'materials/tutorials/tutorial-04.pdf', pages: 3, mb: 0.3 },
    { id: 't5', ch: 6, type: T, title: 'Tutorial 05 (hypothesis tests, SPSS-style output)', file: 'materials/tutorials/tutorial-05.pdf', pages: 7, mb: 0.3 },
    // Past papers
    { id: 'p1', type: P, year: 2024, kind: 'Mid-Semester', title: 'Mid-Semester Exam 2024', file: 'materials/past-papers/mid-sem-2024.pdf', pages: 4, mb: 0.2, tags: ['1 hour'] },
    { id: 'p2', type: P, year: 2025, kind: 'Mid-Semester', title: 'Mid-Semester Exam 2025', file: 'materials/past-papers/mid-sem-2025.pdf', pages: 6, mb: 0.2, tags: [] },
    { id: 'p3', type: P, year: 2024, kind: 'End-Semester', title: 'End-Semester Exam 2024', file: 'materials/past-papers/end-sem-2024-with-solutions.pdf', pages: 18, mb: 0.5, tags: ['with solutions'] },
    { id: 'p4', type: P, year: 2025, kind: 'End-Semester', title: 'End-Semester Exam 2025', file: 'materials/past-papers/end-sem-2025.pdf', pages: 10, mb: 0.2, tags: [] },
  ];

  const PLAN = [
    { name: 'Wednesday', date: '2026-11-18', theme: 'Foundations',
      items: [['Ch 1: skim the big ideas', 'ch-1'], ['Ch 2: Descriptive statistics', 'ch-2'], ['Ch 3: Probability', 'ch-3'], 'Tutorials 1 to 3'] },
    { name: 'Thursday', date: '2026-11-19', theme: 'Distributions & inference',
      items: [['Ch 4: Random variables', 'ch-4'], ['Ch 5: Sampling & CIs', 'ch-5'], 'Tutorial 4', 'Redo tricky tutorial questions'] },
    { name: 'Friday', date: '2026-11-20', theme: 'Testing & practice',
      items: [['Ch 6: Hypothesis testing', 'ch-6'], ['Ch 7: Regression', 'ch-7'], 'Tutorial 5', ['End-Sem 2024, timed', 'papers']] },
    { name: 'Saturday', date: '2026-11-21', theme: 'Exam day', exam: true,
      items: [['Skim the formula sheet', 'formulas'], ['Review End-Sem 2025', 'papers'], 'Eat, hydrate, arrive early', 'Rest well'] },
  ];

  const FORMULAS = [
    { t: 'Sample mean', eq: 'x̄ = Σxᵢ / n', note: 'Centre of the data.' },
    { t: 'Sample variance', eq: 's² = Σ(xᵢ − x̄)² / (n − 1)', note: 'Square root gives s, the standard deviation.' },
    { t: 'Addition rule', eq: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', note: 'Subtract the overlap once.' },
    { t: 'Conditional probability', eq: 'P(A | B) = P(A ∩ B) / P(B)', note: 'Independent events: P(A ∩ B) = P(A)·P(B).' },
    { t: 'Binomial', eq: 'P(X = k) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ', note: 'Mean = np, variance = np(1 − p).' },
    { t: 'Z-score', eq: 'z = (x − μ) / σ', note: 'Standardise, then read the normal table.' },
    { t: 'Standard error', eq: 'SE = σ / √n', note: 'CLT: x̄ ≈ N(μ, σ²/n) for large n.' },
    { t: 'Confidence interval (mean)', eq: 'x̄ ± z* · σ/√n', note: 'σ unknown? Use t* · s/√n.' },
    { t: 'Test statistic', eq: 'z = (x̄ − μ₀) / (σ/√n)', note: 'With s instead of σ, it becomes t.' },
    { t: 'Decision rule', eq: 'p ≤ α  ⇒  reject H₀', note: 'Otherwise: fail to reject H₀. Conclude in context.' },
    { t: 'Regression line', eq: 'ŷ = b₀ + b₁x', note: 'b₁ = Sxy / Sxx and b₀ = ȳ − b₁x̄.' },
    { t: 'Correlation', eq: 'r = Sxy / √(Sxx · Syy)', note: 'Always between −1 and +1.' },
  ];

  /* ================= Helpers ================= */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');

  const store = {
    load() { try { return new Set(JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]')); } catch { return new Set(); } },
    save(set) { try { localStorage.setItem(CONFIG.storageKey, JSON.stringify([...set])); } catch { /* storage blocked: fine */ } },
  };
  let done = store.load();

  const icon = {
    eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',
    dl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"/></svg>',
  };

  /* ================= Theme ================= */
  (function theme() {
    const root = document.documentElement;
    try { const t = localStorage.getItem(CONFIG.themeKey); if (t) root.dataset.theme = t; } catch { /* ignore */ }
    $('#themeBtn').addEventListener('click', () => {
      const isDark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
      const next = isDark ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem(CONFIG.themeKey, next); } catch { /* ignore */ }
    });
  })();

  /* ================= Floating symbols ================= */
  (function symbols() {
    const box = $('#symbols');
    const chars = ['μ', 'σ', 'x̄', 'α', 'p', 'Σ', 'β', 'z', 'H₀', 'r', 'χ²', 'n'];
    chars.forEach((ch, i) => {
      const s = document.createElement('span');
      s.textContent = ch;
      s.style.left = (4 + (i * 83) % 92) + '%';
      s.style.top = (6 + (i * 47) % 80) + '%';
      s.style.fontSize = (28 + (i * 13) % 44) + 'px';
      s.style.setProperty('--d', (7 + (i % 5) * 1.7) + 's');
      s.style.setProperty('--r', ((i % 2 ? 1 : -1) * (6 + i * 3)) + 'deg');
      box.appendChild(s);
    });
  })();

  /* ================= Countdown ================= */
  (function countdown() {
    const target = new Date(CONFIG.examDate).getTime();
    const card = $('#countdown');
    $('#cdNote').textContent = CONFIG.examLabel;
    const set = (id, v) => { $(id).textContent = v; };
    function tick() {
      let ms = target - Date.now();
      if (ms <= 0) {
        card.classList.add('is-done');
        $('#cdNote').textContent = 'Exam day. Good luck.';
        return false;
      }
      const s = Math.floor(ms / 1000);
      set('#cdD', Math.floor(s / 86400));
      set('#cdH', pad(Math.floor((s % 86400) / 3600)));
      set('#cdM', pad(Math.floor((s % 3600) / 60)));
      set('#cdS', pad(s % 60));
      return true;
    }
    if (tick()) { const id = setInterval(() => { if (!tick()) clearInterval(id); }, 1000); }
  })();

  /* ================= Bell curve ================= */
  (function bell() {
    const svg = $('#bell');
    const X0 = 40, X1 = 760, BASE = 214, H = 190, ZMIN = -4, ZMAX = 4;
    const px = (z) => X0 + ((z - ZMIN) / (ZMAX - ZMIN)) * (X1 - X0);
    const pdf = (z) => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);
    const py = (z) => BASE - (pdf(z) / pdf(0)) * H;
    const erf = (x) => {
      const s = x < 0 ? -1 : 1; x = Math.abs(x);
      const t = 1 / (1 + 0.3275911 * x);
      const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
      return s * y;
    };
    const cdf = (z) => 0.5 * (1 + erf(z / Math.SQRT2));

    const pts = [];
    for (let z = ZMIN; z <= ZMAX + 1e-9; z += 0.05) pts.push([px(z), py(z)]);
    const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
    $('#bellLine').setAttribute('d', line);
    $('#bellArea').setAttribute('d', line + ` L${px(ZMAX)} ${BASE} L${px(ZMIN)} ${BASE} Z`);

    const zc = 1.645;
    const tailPts = [];
    for (let z = zc; z <= ZMAX + 1e-9; z += 0.05) tailPts.push([px(z), py(z)]);
    $('#bellTail').setAttribute('d', `M${px(zc)} ${BASE} ` + tailPts.map((p) => `L${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ') + ` L${px(ZMAX)} ${BASE} Z`);
    const tl = $('#tailLabel');
    tl.setAttribute('x', px(2.75)); tl.setAttribute('y', BASE - 56);

    let axis = `<line class="axis-line" x1="${X0}" y1="${BASE}" x2="${X1}" y2="${BASE}"/>`;
    for (let z = -3; z <= 3; z++) {
      axis += `<line class="axis-tick" x1="${px(z)}" y1="${BASE}" x2="${px(z)}" y2="${BASE + 7}"/><text class="axis-text" x="${px(z)}" y="${BASE + 26}">${z === 0 ? 'μ' : (z > 0 ? '+' : '−') + Math.abs(z) + 'σ'}</text>`;
    }
    $('#bellAxis').innerHTML = axis;

    const hover = $('#bellHover'), hl = $('#hvLine'), hd = $('#hvDot'), read = $('#curveRead');
    const defaultText = read.textContent;
    function move(e) {
      const r = svg.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 800;
      let z = ((x - X0) / (X1 - X0)) * (ZMAX - ZMIN) + ZMIN;
      z = Math.max(ZMIN, Math.min(ZMAX, z));
      hover.setAttribute('opacity', 1);
      hl.setAttribute('x1', px(z)); hl.setAttribute('x2', px(z));
      hd.setAttribute('cx', px(z)); hd.setAttribute('cy', py(z));
      const p = cdf(z);
      read.textContent = `z = ${z.toFixed(2)}  ·  P(Z ≤ z) = ${p.toFixed(3)}  ·  top ${(100 * (1 - p)).toFixed(1)}%`;
    }
    svg.addEventListener('pointermove', move);
    svg.addEventListener('pointerdown', move);
    svg.addEventListener('pointerleave', () => { hover.setAttribute('opacity', 0); read.textContent = defaultText; });
  })();

  /* ================= Progress ================= */
  const CIRC = 2 * Math.PI * 52;
  function updateProgress() {
    const total = RESOURCES.length;
    const n = RESOURCES.filter((r) => done.has(r.id)).length;
    const pct = Math.round((n / total) * 100);
    $('#ringFg').style.strokeDasharray = CIRC.toFixed(1);
    $('#ringFg').style.strokeDashoffset = (CIRC * (1 - n / total)).toFixed(1);
    $('#ringPct').textContent = pct + '%';
    $('#doneCount').textContent = n;
    $('#totalCount').textContent = total;
    $('#ringHint').textContent =
      n === 0 ? 'Tick items below as you finish them.' :
      n === total ? 'All materials completed.' :
      pct >= 60 ? 'Over halfway. Keep going.' : 'Good start. One at a time.';
  }

  function toggleDone(id, on) {
    const before = chapterComplete();
    if (on) done.add(id); else done.delete(id);
    store.save(done);
    updateProgress();
    const after = chapterComplete();
    renderChapters();
    renderPapers();
    const again = document.querySelector(`[data-done="${id}"]`);
    if (again) again.focus({ preventScroll: true }); // keep keyboard focus after re-render
    if (on) {
      const newlyDone = [...after].filter((c) => !before.has(c));
      if (newlyDone.length) toast(`Chapter ${newlyDone[0]} complete`);
      else if (RESOURCES.every((r) => done.has(r.id))) toast('All materials completed');
    }
  }
  function chapterComplete() {
    const s = new Set();
    CHAPTERS.forEach((c) => {
      const rs = RESOURCES.filter((r) => r.ch === c.n);
      if (rs.length && rs.every((r) => done.has(r.id))) s.add(c.n);
    });
    return s;
  }

  /* ================= Rendering ================= */
  const fmtMeta = (r) => `${r.pages} pages · ${r.mb.toFixed(1)} MB`;

  function resRow(r) {
    const checked = done.has(r.id);
    return `
      <li class="res ${checked ? 'is-done' : ''}">
        <label class="tick" title="Mark as done">
          <input type="checkbox" data-done="${r.id}" ${checked ? 'checked' : ''} aria-label="Mark ${esc(r.title)} as done">
          <span></span>
        </label>
        <div class="res-main">
          <div class="res-title">${esc(r.title)}</div>
          <div class="res-meta"><span class="type ${r.type}">${r.type === N ? 'Notes' : r.type === T ? 'Tutorial' : 'Paper'}</span><span>${fmtMeta(r)}</span></div>
        </div>
        <div class="res-actions">
          <button class="btn sm" type="button" data-open="${r.id}">${icon.eye} Read</button>
          <a class="btn sm ghost" href="${encodeURI(r.file)}" download aria-label="Download ${esc(r.title)}">${icon.dl}</a>
        </div>
      </li>`;
  }

  const state = { q: '', f: 'all' };

  function matches(c, r) {
    if (state.f !== 'all' && r.type !== state.f) return false;
    if (!state.q) return true;
    const hay = `${c.title} ${c.topics.join(' ')} ${c.blurb} ${r.title} ${r.type} chapter ${c.n} ch${c.n} ${r.type === T ? 'tutorial tut' : 'notes lecture'}`.toLowerCase();
    return state.q.split(/\s+/).every((w) => hay.includes(w));
  }

  function renderChapters() {
    const out = [];
    CHAPTERS.forEach((c) => {
      const all = RESOURCES.filter((r) => r.ch === c.n);
      const shown = all.filter((r) => matches(c, r));
      if (!shown.length) return;
      const d = all.filter((r) => done.has(r.id)).length;
      const complete = d === all.length;
      out.push(`
        <li class="chapter ${complete ? 'is-complete' : ''}" id="ch-${c.n}">
          <div class="node" aria-hidden="true"><span>${c.n}</span></div>
          <article class="ch-card" data-sym="${esc(c.sym)}">
            <div class="ch-head">
              <h3 class="ch-title">${esc(c.title)}</h3>
              <span class="ch-count">${d}/${all.length} done</span>
            </div>
            <p class="ch-blurb">${esc(c.blurb)}</p>
            <div class="topics">${c.topics.map((t) => `<span class="topic">${esc(t)}</span>`).join('')}</div>
            <div class="bar" role="progressbar" aria-label="Chapter ${c.n} progress" aria-valuemin="0" aria-valuemax="${all.length}" aria-valuenow="${d}"><i style="width:${(d / all.length) * 100}%"></i></div>
            <ul class="res-list">${shown.map((r) => resRow(r)).join('')}</ul>
          </article>
        </li>`);
    });
    $('#journey').innerHTML = out.join('');
    $('#empty').hidden = out.length > 0;
  }

  function renderPapers() {
    const list = RESOURCES.filter((r) => r.type === P);
    $('#paperGrid').innerHTML = list.map((r) => {
      const checked = done.has(r.id);
      return `
        <article class="paper" data-year="${r.year}">
          <div class="paper-tags">
            <span class="paper-tag kind">${esc(r.kind)}</span>
            ${r.tags.map((t) => `<span class="paper-tag ${t === 'with solutions' ? 'sol' : ''}">${esc(t)}</span>`).join('')}
          </div>
          <h3>${esc(r.kind)} ${r.year}</h3>
          <p class="muted">${fmtMeta(r)}</p>
          <div class="paper-foot">
            <label class="tick-label">
              <span class="tick"><input type="checkbox" data-done="${r.id}" ${checked ? 'checked' : ''}><span></span></span>
              Attempted
            </label>
            <button class="btn sm" type="button" data-open="${r.id}">${icon.eye} Read</button>
            <a class="btn sm ghost" href="${encodeURI(r.file)}" download aria-label="Download ${esc(r.title)}">${icon.dl}</a>
          </div>
        </article>`;
    }).join('');
  }

  function renderPlan() {
    const today = new Date(); const key = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    $('#planGrid').innerHTML = PLAN.map((d) => {
      const dt = new Date(d.date + 'T00:00:00');
      const label = dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
      const cls = [d.date === key ? 'is-today' : '', d.date < key ? 'is-past' : '', d.exam ? 'is-exam' : ''].join(' ');
      return `
        <article class="day ${cls}">
          ${d.date === key ? '<span class="badge">Today</span>' : d.exam ? '<span class="badge">Exam</span>' : ''}
          <div class="day-top"><h3 class="day-name">${d.name}</h3><span class="day-date">${label}</span></div>
          <p class="day-theme">${esc(d.theme)}</p>
          <ul>${d.items.map((it) => Array.isArray(it) ? `<li><a href="#${it[1]}">${esc(it[0])}</a></li>` : `<li>${esc(it)}</li>`).join('')}</ul>
        </article>`;
    }).join('');
  }

  function renderFormulas() {
    $('#formulaGrid').innerHTML = FORMULAS.map((f, i) => `
      <button class="formula" type="button" data-copy="${i}" aria-label="${esc(f.t)}: ${esc(f.eq)}. Click to copy.">
        <span class="copied">Copied!</span>
        <h3>${esc(f.t)}</h3>
        <p class="eq">${esc(f.eq)}</p>
        <p class="note">${esc(f.note)}</p>
      </button>`).join('');
  }

  /* ================= Viewer ================= */
  const viewer = $('#viewer');
  const frame = $('#viewerFrame');
  function openDoc(id) {
    const r = RESOURCES.find((x) => x.id === id); if (!r) return;
    const url = encodeURI(r.file);
    const small = matchMedia('(pointer: coarse)').matches || innerWidth < 760 || typeof viewer.showModal !== 'function';
    if (small) { window.open(url, '_blank', 'noopener'); return; }
    $('#viewerTitle').textContent = r.type === N ? `Ch ${r.ch}: ${r.title}` : r.title;
    $('#viewerOpen').href = url; $('#viewerDl').href = url;
    frame.src = url + '#view=FitH';
    viewer.showModal();
  }
  viewer.addEventListener('close', () => { frame.src = 'about:blank'; });
  viewer.addEventListener('click', (e) => { if (e.target === viewer) viewer.close(); });
  $('#viewerClose').addEventListener('click', () => viewer.close());

  /* ================= Toast ================= */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ================= Events ================= */
  document.addEventListener('click', (e) => {
    const open = e.target.closest('[data-open]');
    if (open) { openDoc(open.dataset.open); return; }
    const f = e.target.closest('[data-copy]');
    if (f) {
      const item = FORMULAS[+f.dataset.copy];
      const text = `${item.t}: ${item.eq}`;
      (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).catch(() => {}).finally(() => {
        f.classList.add('is-copied'); setTimeout(() => f.classList.remove('is-copied'), 1100);
      });
    }
  });
  document.addEventListener('change', (e) => {
    const cb = e.target.closest('[data-done]');
    if (cb) toggleDone(cb.dataset.done, cb.checked);
  });

  $('#q').addEventListener('input', (e) => { state.q = e.target.value.trim().toLowerCase(); renderChapters(); });
  $('#chips').addEventListener('click', (e) => {
    const b = e.target.closest('.chip'); if (!b) return;
    $$('.chip').forEach((c) => c.classList.toggle('is-on', c === b));
    state.f = b.dataset.f; renderChapters();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName) && !viewer.open) {
      e.preventDefault(); $('#q').focus();
    }
  });

  /* ================= Focus timer ================= */
  (function timer() {
    const box = $('#timer'), panel = $('#timerPanel'), fab = $('#timerFab');
    const MODES = { focus: { label: 'Focus', secs: 25 * 60, other: 'break' }, break: { label: 'Break', secs: 5 * 60, other: 'focus' } };
    let mode = 'focus', left = MODES.focus.secs, id = null;
    const show = () => {
      const t = `${pad(Math.floor(left / 60))}:${pad(left % 60)}`;
      $('#timerTime').textContent = t; $('#timerFabTime').textContent = t;
      $('#timerMode').textContent = MODES[mode].label;
      $('#tSwitch').textContent = MODES[mode].other === 'break' ? 'Break' : 'Focus';
      $('#tStart').textContent = id ? 'Pause' : 'Start';
      box.classList.toggle('is-running', !!id);
    };
    const stop = () => { clearInterval(id); id = null; };
    const setMode = (m) => { stop(); mode = m; left = MODES[m].secs; show(); };
    fab.addEventListener('click', () => { const o = panel.hidden; panel.hidden = !o; fab.setAttribute('aria-expanded', o); });
    $('#tStart').addEventListener('click', () => {
      if (id) { stop(); show(); return; }
      id = setInterval(() => {
        left--;
        if (left <= 0) {
          const next = MODES[mode].other;
          toast(next === 'break' ? 'Focus round done. Take 5 minutes.' : 'Break over. Ready for another round?');
          setMode(next);
          if (navigator.vibrate) navigator.vibrate(200);
          return;
        }
        show();
      }, 1000);
      show();
    });
    $('#tReset').addEventListener('click', () => setMode(mode));
    $('#tSwitch').addEventListener('click', () => setMode(MODES[mode].other));
    show();
  })();

  /* ================= Init ================= */
  renderPlan();
  renderChapters();
  renderPapers();
  renderFormulas();
  updateProgress();
})();
