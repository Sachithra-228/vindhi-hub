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
    { n: 1, short: 'Intro & Sampling', sym: 'n', title: 'Intro to Biostatistics & Random Sampling',
      blurb: 'What biostatistics is for, the language of populations and samples, and how random samples are drawn.',
      topics: ['Population vs sample', 'Data types', 'Random sampling'] },
    { n: 2, short: 'Descriptive Stats', sym: 'x̄', title: 'Descriptive Statistics',
      blurb: 'Summarising data with tables, charts, centre and spread.',
      topics: ['Frequency tables', 'Mean · median · mode', 'Spread', 'Charts'] },
    { n: 3, short: 'Probability', sym: 'P', title: 'Introduction to Probability',
      blurb: 'Events, probability rules and conditional probability.',
      topics: ['Events', 'Probability rules', 'Conditional probability'] },
    { n: 4, short: 'Random Variables', sym: 'σ', title: 'Random Variables & Probability Distributions',
      blurb: 'Discrete and continuous random variables, ending with the star of the show: the normal distribution.',
      topics: ['Discrete', 'Continuous', 'Normal distribution'] },
    { n: 5, short: 'Sampling & CIs', sym: 'μ', title: 'Sampling Distributions & Confidence Intervals',
      blurb: 'Parameter vs statistic, sampling distributions, the Central Limit Theorem and confidence intervals.',
      topics: ['Parameter vs statistic', 'Central Limit Theorem', 'Confidence intervals'] },
    { n: 6, short: 'Hypothesis Testing', sym: 'α', title: 'Hypothesis Testing',
      blurb: 'Framing H₀ and H₁, choosing α, reading p-values and concluding in biological context.',
      topics: ['H₀ vs H₁', 'p-values', 'Significance level α'] },
    { n: 7, short: 'Common Tests', sym: 'r', title: 'Common Statistical Tests',
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
    $$('[data-theme-toggle]').forEach((btn) => btn.addEventListener('click', () => {
      const isDark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
      const next = isDark ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem(CONFIG.themeKey, next); } catch { /* ignore */ }
    }));
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
        set('#sbDays', 'Today');
        return false;
      }
      const s = Math.floor(ms / 1000);
      set('#cdD', Math.floor(s / 86400));
      set('#cdH', pad(Math.floor((s % 86400) / 3600)));
      set('#cdM', pad(Math.floor((s % 3600) / 60)));
      set('#cdS', pad(s % 60));
      set('#sbDays', `${Math.floor(s / 86400)}d ${pad(Math.floor((s % 86400) / 3600))}h`);
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
      n === 0 ? 'Tick items in Chapters as you finish them.' :
      n === total ? 'All materials completed.' :
      pct >= 60 ? 'Over halfway. Keep going.' : 'Good start. One at a time.';
    $('#sbCount').textContent = `${n}/${total}`;
    $('#sbBar').style.width = pct + '%';
    renderSidebarChapters();
  }

  function toggleDone(id, on) {
    const before = chapterComplete();
    if (on) done.add(id); else done.delete(id);
    store.save(done);
    updateProgress();
    const after = chapterComplete();
    renderChapterBody();
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
    const play = e.target.closest('[data-play]');
    if (play) {
      const id = encodeURIComponent(play.dataset.play);
      play.parentElement.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="YouTube video player" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
      return;
    }
    const rm = e.target.closest('[data-rmlink]');
    if (rm) {
      const list = user.links[curCh] || [];
      list.splice(+rm.dataset.rmlink, 1);
      if (!list.length) delete user.links[curCh];
      saveUser(); renderChapterBody(); return;
    }
    const del = e.target.closest('[data-recdel]');
    if (del) {
      if (!confirm('Delete this recording from this device?')) return;
      vdb.del(+del.dataset.recdel).then(() => renderRecList(curCh)).catch(() => toast('Could not delete the recording'));
      return;
    }
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
  document.addEventListener('submit', (e) => {
    const f = e.target.closest('#linkForm'); if (!f) return;
    e.preventDefault();
    let u;
    try { u = new URL(f.elements.url.value.trim()); } catch { toast('Enter a valid link'); return; }
    if (!/^https?:$/.test(u.protocol)) { toast('Only http and https links are allowed'); return; }
    if (!user.links[curCh]) user.links[curCh] = [];
    user.links[curCh].push({ url: u.href, title: f.elements.title.value.trim(), id: ytId(u.href) || '' });
    saveUser(); renderChapterBody(); toast('Link added');
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

  /* ================= Sidebar, views & routing ================= */
  const VIEWS = ['overview', 'plan', 'chapters', 'papers', 'formulas'];
  const TITLES = { overview: 'Overview', plan: 'Study plan', chapters: 'Chapters', papers: 'Past papers', formulas: 'Formula sheet' };
  let currentView = null;
  let activeChapter = null;

  const checkSvg = '<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function renderSidebarChapters() {
    const comp = chapterComplete();
    $('#sbChapters').innerHTML = CHAPTERS.map((c) => {
      const cls = [comp.has(c.n) ? 'is-complete' : '', activeChapter === c.n ? 'is-active' : ''].join(' ').trim();
      return `<li><a href="#ch-${c.n}" class="${cls}" title="${esc(c.title)}"${activeChapter === c.n ? ' aria-current="location"' : ''}><span class="n">${comp.has(c.n) ? checkSvg : c.n}</span><span class="t">${esc(c.short)}</span></a></li>`;
    }).join('');
  }

  function showView(name) {
    VIEWS.forEach((v) => { $('#' + v).hidden = v !== name; });
    $$('[data-nav]').forEach((a) => {
      if (a.dataset.nav === name) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    $('#topbarTitle').textContent = TITLES[name];
    document.title = name === 'overview' ? 'Vindhi' : `${TITLES[name]} · Vindhi`;
    if (name !== currentView) window.scrollTo({ top: 0, behavior: 'instant' });
    currentView = name;
  }

  /* ================= Chapter workspace ================= */
  const CONTENT = window.VINDHI_CONTENT || {};
  const TABS = [['docs', 'Documents'], ['slide', 'Key slide'], ['videos', 'Videos']];
  const USER_KEY = 'vindhi-user-v1';
  const loadUser = () => {
    try {
      const u = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
      return { slides: u.slides || {}, notes: u.notes || {}, links: u.links || {}, tab: TABS.some((t) => t[0] === u.tab) ? u.tab : 'docs' };
    } catch { return { slides: {}, notes: {}, links: {}, tab: 'docs' }; }
  };
  const user = loadUser();
  const saveUser = () => { try { localStorage.setItem(USER_KEY, JSON.stringify(user)); } catch { /* storage blocked */ } };
  let curCh = 1;
  let curTab = user.tab;

  const ytId = (raw) => {
    try {
      const u = new URL(raw);
      const h = u.hostname.replace(/^(www|m)\./, '');
      let id = null;
      if (h === 'youtu.be') id = u.pathname.slice(1).split('/')[0];
      else if (h === 'youtube.com' || h === 'youtube-nocookie.com') {
        id = u.searchParams.get('v');
        if (!id) { const m = /^\/(embed|shorts|live)\/([\w-]{11})/.exec(u.pathname); id = m && m[2]; }
      }
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    } catch { return null; }
  };

  const playSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
  const linkSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>';

  function vidCard(v, ownIdx = -1) {
    const id = esc(v.id);
    return `
      <article class="vid">
        <div class="vid-frame">
          <button class="vid-thumb" type="button" data-play="${id}" aria-label="Play: ${esc(v.title)}">
            <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
            <span class="play">${playSvg}</span>
          </button>
        </div>
        <div class="vid-body">
          <h4>${esc(v.title)}</h4>
          <p class="vid-meta">${esc(v.channel || 'YouTube')}${ownIdx >= 0 ? ' · added by you' : ''}</p>
          ${v.note ? `<p class="vid-note">${esc(v.note)}</p>` : ''}
          <div class="vid-actions">
            <a class="btn sm ghost" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Open on YouTube</a>
            ${ownIdx >= 0 ? `<button class="btn sm ghost" type="button" data-rmlink="${ownIdx}">Remove</button>` : ''}
          </div>
        </div>
      </article>`;
  }

  function linkCard(l, i) {
    let host = l.url;
    try { host = new URL(l.url).hostname.replace(/^www\./, ''); } catch { /* keep raw */ }
    return `
      <article class="linkcard">
        <span class="link-ico">${linkSvg}</span>
        <div><h4>${esc(l.title || host)}</h4><p class="vid-meta">${esc(host)} · added by you</p></div>
        <a class="btn sm" href="${esc(l.url)}" target="_blank" rel="noopener">Open</a>
        <button class="btn sm ghost" type="button" data-rmlink="${i}">Remove</button>
      </article>`;
  }

  function docsPanel(c) {
    const rs = RESOURCES.filter((r) => r.ch === c.n);
    const vids = (CONTENT[c.n] && CONTENT[c.n].videos) || [];
    return `
      <ul class="res-list">${rs.map((r) => resRow(r)).join('')}</ul>
      ${vids.length ? `
      <section class="related">
        <div class="related-head"><h4>Related videos</h4><a class="btn sm ghost" href="#ch-${c.n}/videos">Open Videos tab</a></div>
        <ul>${vids.map((v) => `<li><a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">${esc(v.title)}</a><span>${esc(v.channel)}</span></li>`).join('')}</ul>
      </section>` : ''}`;
  }

  function videosPanel(c) {
    const curated = (CONTENT[c.n] && CONTENT[c.n].videos) || [];
    const mine = user.links[c.n] || [];
    return `
      <div class="video-grid">${curated.length ? curated.map((v) => vidCard(v)).join('') : '<p class="hint">No videos added for this chapter yet.</p>'}</div>
      <section class="box add-link">
        <h4>Add your own link</h4>
        <p class="muted">Paste a YouTube video or any useful page. It is saved on this device.</p>
        <form class="link-form" id="linkForm">
          <input name="url" type="url" required placeholder="https://www.youtube.com/watch?v=…" aria-label="Link address">
          <input name="title" type="text" maxlength="120" placeholder="Title (optional)" aria-label="Title">
          <button class="btn" type="submit">Add link</button>
        </form>
      </section>
      ${mine.length ? `<h4 class="sub-h">Your links</h4><div class="video-grid">${mine.map((l, i) => (l.id ? vidCard({ id: l.id, title: l.title || 'YouTube video', channel: 'YouTube', note: '' }, i) : linkCard(l, i))).join('')}</div>` : ''}`;
  }

  /* ---- Key slide ---- */
  const slideBase = (c) => (CONTENT[c.n] && CONTENT[c.n].slide) || { title: c.title, sub: c.blurb, ideas: [], formulas: [], traps: [], example: '' };
  const slideData = (c) => { const b = slideBase(c), u = user.slides[c.n]; return u ? { ...b, ...u } : b; };
  const liList = (arr) => arr.map((t) => `<li>${esc(t)}</li>`).join('');

  function slidePanel(c) {
    const d = slideData(c);
    const edited = !!user.slides[c.n];
    const provided = (CONTENT[c.n] && CONTENT[c.n].voice) || [];
    return `
      <div class="slide-bar">
        <div><h4>Key slide${edited ? '<span class="badge-soft">Edited by you</span>' : ''}</h4><p class="muted">The important points to run through before the exam. Select Edit to change anything.</p></div>
        <div class="slide-actions">
          <button class="btn sm ghost" id="slideEdit" type="button">Edit</button>
          <button class="btn sm ghost" id="slideReset" type="button"${edited ? '' : ' hidden'}>Reset</button>
          <button class="btn sm" id="slidePresent" type="button">Present</button>
        </div>
      </div>
      <div class="slide" id="slide">
        <span class="slide-kicker">Chapter ${c.n} · SC2203</span>
        <h4 class="slide-title">${esc(d.title)}</h4>
        <p class="slide-sub">${esc(d.sub)}</p>
        <div class="slide-cols">
          <section><h5>Key ideas</h5><ul data-sec="ideas">${liList(d.ideas)}</ul></section>
          <section><h5>Formulas</h5><ul data-sec="formulas" class="mono">${liList(d.formulas)}</ul></section>
          <section><h5>Exam watch-outs</h5><ul data-sec="traps">${liList(d.traps)}</ul></section>
        </div>
        <div class="slide-example"><h5>Worked example</h5><p data-sec="example">${esc(d.example)}</p></div>
      </div>
      <div class="panel-grid">
        <section class="box" id="voiceBox">
          <h4>Voice explanation</h4>
          <p class="muted">Listen to a spoken walkthrough of this chapter.</p>
          ${provided.length
            ? provided.map((v) => `<figure class="voice"><figcaption>${esc(v.title || 'Voice note')}</figcaption><audio controls preload="none" src="${esc(encodeURI(v.file))}"></audio></figure>`).join('')
            : '<p class="hint">No voice note has been added for this chapter yet.</p>'}
          <h5>My recordings</h5>
          <div class="rec-actions">
            <button class="btn sm" id="recBtn" type="button">Record</button>
            <label class="btn sm ghost">Upload audio<input id="recFile" type="file" accept="audio/*"></label>
            <span class="rec-status" id="recStatus" role="status"></span>
          </div>
          <ul class="rec-list" id="recList"></ul>
          <p class="hint">Recordings are saved on this device only. Use Download to keep a copy.</p>
        </section>
        <section class="box">
          <h4>My notes</h4>
          <p class="muted">Add your own points, mnemonics or questions. Saved as you type.</p>
          <textarea class="notes-box" id="notesBox" placeholder="Write here…" aria-label="My notes for chapter ${c.n}">${esc(user.notes[c.n] || '')}</textarea>
          <p class="saved" id="notesSaved" role="status"></p>
        </section>
      </div>`;
  }

  function bindSlide(c) {
    const slide = $('#slide'); if (!slide) return;
    const editBtn = $('#slideEdit');
    let editing = false;
    const lines = (el) => el.innerText.split('\n').map((t) => t.trim()).filter(Boolean);
    function setEditing(on) {
      editing = on;
      slide.classList.toggle('is-editing', on);
      editBtn.textContent = on ? 'Save' : 'Edit';
      editBtn.classList.toggle('ghost', !on);
      $$('[data-sec]', slide).forEach((el) => {
        if (on) { el.setAttribute('contenteditable', 'true'); el.setAttribute('spellcheck', 'true'); } else el.removeAttribute('contenteditable');
      });
      if (on) {
        $$('ul[data-sec]', slide).forEach((ul) => { if (!ul.children.length) ul.innerHTML = '<li></li>'; });
        $('[data-sec="ideas"]', slide).focus();
      }
    }
    editBtn.addEventListener('click', () => {
      if (!editing) { setEditing(true); return; }
      user.slides[c.n] = {
        ideas: lines($('[data-sec="ideas"]', slide)),
        formulas: lines($('[data-sec="formulas"]', slide)),
        traps: lines($('[data-sec="traps"]', slide)),
        example: $('[data-sec="example"]', slide).innerText.trim(),
      };
      saveUser(); toast('Slide saved on this device'); renderChapterBody();
    });
    $('#slideReset').addEventListener('click', () => {
      if (!confirm('Reset this slide to the original version? Your edits will be lost.')) return;
      delete user.slides[c.n]; saveUser(); renderChapterBody();
    });
    $('#slidePresent').addEventListener('click', () => {
      const req = slide.requestFullscreen || slide.webkitRequestFullscreen;
      if (req) req.call(slide); else toast('Fullscreen is not supported in this browser');
    });
    slide.addEventListener('paste', (e) => { // keep pasted text plain
      if (!editing) return;
      e.preventDefault();
      document.execCommand('insertText', false, (e.clipboardData || window.clipboardData).getData('text/plain'));
    });
  }

  function bindNotes(c) {
    const box = $('#notesBox'); if (!box) return;
    let t;
    box.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        if (box.value.trim()) user.notes[c.n] = box.value; else delete user.notes[c.n];
        saveUser(); $('#notesSaved').textContent = 'Saved';
        setTimeout(() => { const el = $('#notesSaved'); if (el) el.textContent = ''; }, 1500);
      }, 400);
    });
  }

  /* ---- Voice recordings (stored in IndexedDB on this device) ---- */
  const vdb = (() => {
    let db;
    const open = () => (db ? Promise.resolve(db) : new Promise((res, rej) => {
      if (!('indexedDB' in window)) { rej(new Error('IndexedDB unavailable')); return; }
      const r = indexedDB.open('vindhi-voice', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      r.onsuccess = () => { db = r.result; res(db); };
      r.onerror = () => rej(r.error);
    }));
    const run = async (mode, fn) => {
      const d = await open();
      return new Promise((res, rej) => {
        const t = d.transaction('notes', mode);
        const req = fn(t.objectStore('notes'));
        t.oncomplete = () => res(req.result);
        t.onerror = () => rej(t.error);
        t.onabort = () => rej(t.error);
      });
    };
    return {
      all: async (ch) => (await run('readonly', (s) => s.getAll())).filter((r) => r.ch === ch).sort((a, b) => a.created - b.created),
      add: (rec) => run('readwrite', (s) => s.add(rec)),
      del: (id) => run('readwrite', (s) => s.delete(id)),
    };
  })();

  let recUrls = [];
  let recorder = null;
  let recTimer = null;
  const extFor = (type) => (/mp4|m4a|aac/.test(type) ? 'm4a' : /ogg/.test(type) ? 'ogg' : /mpeg|mp3/.test(type) ? 'mp3' : /wav/.test(type) ? 'wav' : 'webm');
  const stamp = (t) => new Date(t).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

  async function renderRecList(n) {
    const ul = $('#recList'); if (!ul) return;
    recUrls.forEach((u) => URL.revokeObjectURL(u)); recUrls = [];
    let items = [];
    try { items = await vdb.all(n); } catch { const st = $('#recStatus'); if (st) st.textContent = 'Saving recordings is not available in this browser.'; }
    if (n !== curCh || !$('#recList')) return; // user moved on while loading
    ul.innerHTML = '';
    items.forEach((r) => {
      const url = URL.createObjectURL(r.blob); recUrls.push(url);
      const li = document.createElement('li'); li.className = 'rec-item';
      const name = r.name || `Recording, ${stamp(r.created)}`;
      li.innerHTML = `<div class="rec-top"><span>${esc(name)}</span><div><a class="btn sm ghost" download="vindhi-ch${n}-${r.id}.${extFor(r.type || '')}" href="${url}">Download</a><button class="btn sm ghost" type="button" data-recdel="${r.id}">Delete</button></div></div><audio controls preload="metadata" src="${url}"></audio>`;
      ul.appendChild(li);
    });
  }

  function stopRec() { if (recorder && recorder.state !== 'inactive') recorder.stop(); }

  async function toggleRec(n) {
    const btn = $('#recBtn'), st = $('#recStatus');
    if (recorder && recorder.state !== 'inactive') { stopRec(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { st.textContent = 'Recording is not supported in this browser. Try Upload audio.'; return; }
    let stream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { st.textContent = 'Microphone access was blocked.'; return; }
    const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'].find((t) => MediaRecorder.isTypeSupported(t)) || '';
    const chunks = [];
    const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
    recorder = rec;
    rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    rec.onstop = async () => {
      clearInterval(recTimer); recorder = null;
      stream.getTracks().forEach((t) => t.stop());
      const b = $('#recBtn'); if (b) { b.textContent = 'Record'; b.classList.remove('is-rec'); }
      const s2 = $('#recStatus'); if (s2) s2.textContent = '';
      if (!chunks.length) return;
      try { await vdb.add({ ch: n, blob: new Blob(chunks, { type: rec.mimeType || mime || 'audio/webm' }), type: rec.mimeType || mime, created: Date.now() }); toast('Recording saved'); } catch { toast('Could not save the recording'); }
      renderRecList(n);
    };
    rec.start();
    btn.textContent = 'Stop'; btn.classList.add('is-rec');
    const t0 = Date.now();
    st.textContent = 'Recording 0:00';
    recTimer = setInterval(() => { const sec = Math.floor((Date.now() - t0) / 1000); const el = $('#recStatus'); if (el) el.textContent = `Recording ${Math.floor(sec / 60)}:${pad(sec % 60)}`; }, 500);
  }

  function bindVoice(c) {
    const btn = $('#recBtn'); if (!btn) return;
    if (!navigator.mediaDevices || !window.MediaRecorder) { btn.disabled = true; btn.title = 'Recording is not supported in this browser'; }
    btn.addEventListener('click', () => toggleRec(c.n));
    $('#recFile').addEventListener('change', async (e) => {
      const f = e.target.files && e.target.files[0]; e.target.value = '';
      if (!f) return;
      if (f.size > 40 * 1024 * 1024) { toast('That file is too large (limit 40 MB)'); return; }
      try { await vdb.add({ ch: c.n, blob: f, type: f.type, name: f.name, created: Date.now() }); toast('Audio added'); } catch { toast('Could not save the audio'); }
      renderRecList(c.n);
    });
    renderRecList(c.n);
  }

  /* ---- Render ---- */
  function renderChapterBody() {
    const c = CHAPTERS[curCh - 1];
    const all = RESOURCES.filter((r) => r.ch === c.n);
    const d = all.filter((r) => done.has(r.id)).length;
    const nVid = ((CONTENT[c.n] && CONTENT[c.n].videos) || []).length + (user.links[c.n] || []).length;
    const counts = { docs: all.length, slide: '', videos: nVid };
    const panel = curTab === 'slide' ? slidePanel(c) : curTab === 'videos' ? videosPanel(c) : docsPanel(c);
    $('#chapterBody').innerHTML = `
      <article class="ch-hero" data-sym="${esc(c.sym)}">
        <div class="ch-top"><span class="ch-badge">Chapter ${c.n}</span><span class="ch-count">${d}/${all.length} done</span></div>
        <h3 class="ch-title">${esc(c.title)}</h3>
        <p class="ch-blurb">${esc(c.blurb)}</p>
        <div class="topics">${c.topics.map((t) => `<span class="topic">${esc(t)}</span>`).join('')}</div>
        <div class="bar" role="progressbar" aria-label="Chapter ${c.n} progress" aria-valuemin="0" aria-valuemax="${all.length}" aria-valuenow="${d}"><i style="width:${all.length ? (d / all.length) * 100 : 0}%"></i></div>
      </article>
      <nav class="tabs" aria-label="Chapter sections">
        ${TABS.map(([k, label]) => `<a href="#ch-${c.n}/${k}"${curTab === k ? ' aria-current="page"' : ''}>${label}${counts[k] !== '' ? `<span class="tab-n">${counts[k]}</span>` : ''}</a>`).join('')}
      </nav>
      <div class="tab-panel" id="tabPanel">${panel}</div>`;
    if (curTab === 'slide') { bindSlide(c); bindNotes(c); bindVoice(c); }
  }

  function showChapter(n, tab) {
    const chapterChanged = n !== curCh;
    if ((chapterChanged || tab !== curTab) && recorder) stopRec();
    curCh = n; curTab = tab; user.tab = tab; saveUser();
    $('#chSelect').value = String(n);
    $('#chPrev').disabled = n <= 1;
    $('#chNext').disabled = n >= CHAPTERS.length;
    renderChapterBody();
    setActiveChapter(n);
    return chapterChanged;
  }

  (function chapterControls() {
    $('#chSelect').innerHTML = CHAPTERS.map((c) => `<option value="${c.n}">${c.n}. ${esc(c.title)}</option>`).join('');
    const go = (n) => { location.hash = `#ch-${n}/${curTab}`; };
    $('#chSelect').addEventListener('change', (e) => go(+e.target.value));
    $('#chPrev').addEventListener('click', () => go(Math.max(1, curCh - 1)));
    $('#chNext').addEventListener('click', () => go(Math.min(CHAPTERS.length, curCh + 1)));
  })();

  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    const m = /^ch-(\d+)(?:\/(docs|slide|videos))?$/.exec(h);
    const view = m ? 'chapters' : (VIEWS.includes(h) ? h : 'overview');
    const prev = currentView;
    showView(view);
    if (view === 'chapters') {
      const n = m ? Math.min(Math.max(+m[1], 1), CHAPTERS.length) : curCh;
      const tab = (m && m[2]) || curTab;
      const changed = showChapter(n, tab);
      if (changed && prev === 'chapters') window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setActiveChapter(null);
    }
    closeDrawer();
  }

  function setActiveChapter(n) { if (n !== activeChapter) { activeChapter = n; renderSidebarChapters(); } }

  addEventListener('hashchange', route);
  // re-clicking the link for the current hash does not fire hashchange, so route manually
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  });

  const sidebar = $('#sidebar'), backdrop = $('#sbBackdrop'), openBtn = $('#sbOpen');
  function openDrawer() { sidebar.classList.add('is-open'); backdrop.hidden = false; openBtn.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; $('#sbClose').focus(); }
  function closeDrawer() { sidebar.classList.remove('is-open'); backdrop.hidden = true; openBtn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  openBtn.addEventListener('click', openDrawer);
  $('#sbClose').addEventListener('click', () => { closeDrawer(); openBtn.focus(); });
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && sidebar.classList.contains('is-open')) { closeDrawer(); openBtn.focus(); } });

  /* ================= Init ================= */
  renderPlan();
  renderPapers();
  renderFormulas();
  updateProgress();
  route();
})();
