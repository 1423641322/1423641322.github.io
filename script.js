(() => {
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fill = (id, content) => { document.getElementById(id).innerHTML = content; };
  let language = 'zh';
  try {
    const requested = new URLSearchParams(location.search).get('lang');
    const saved = localStorage.getItem('resume-language');
    if (requested === 'en' || requested === 'zh') language = requested;
    else if (saved === 'en') language = 'en';
  } catch {}

  const toggle = document.querySelector('.theme-toggle');
  try { if (localStorage.getItem('resume-theme') === 'dark') document.body.classList.add('dark'); } catch {}
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer = 'IntersectionObserver' in window && !reducedMotion
    ? new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      }), { threshold: 0.08 })
    : null;
  const observeContent = () => {
    if (observer) {
      observer.disconnect();
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  };

  const updateToggle = () => {
    const dark = document.body.classList.contains('dark');
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', window.resumeI18n[language][dark ? 'themeLight' : 'themeDark']);
  };

  const render = (nextLanguage, initial = false) => {
    const openDetails = [...document.querySelectorAll('#project-list details')].map(el => el.open);
    language = nextLanguage;
    const text = window.resumeI18n[language];
    const data = language === 'en' ? window.resumeDataEn : window.resumeData;
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = text.title;
    document.querySelector('meta[name="description"]').setAttribute('content', text.description);
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = text[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', text[el.dataset.i18nAria]); });
    document.querySelectorAll('[data-language]').forEach(el => { el.setAttribute('aria-pressed', String(el.dataset.language === language)); });

    fill('course-list', data.courses.map(c => `<div><span>${escape(c.name)}</span><strong>${escape(c.score)}</strong></div>`).join(''));
    fill('research-list', data.research.map((r, i) => `<article class="research-item reveal"><span class="index">0${i + 1}</span><h3>${escape(r.title)}</h3><div><p>${escape(r.description)}</p><span class="tag-line">${escape(r.tag)}</span></div></article>`).join(''));
    fill('project-list', data.projects.map((p, i) => `<article class="project reveal"><div class="project-art ${escape(p.art)}" role="img" aria-label="${escape(p.artLabel)}"><span class="project-no">0${i + 1} / CONCEPT</span><div class="molecule"><i></i><i></i><i></i><i></i></div><strong>${escape(p.visualTitle)}</strong><span class="art-subtitle">${escape(p.visualSubtitle)}</span><span class="art-note">${escape(p.visualNote)}</span></div><div class="project-meta"><p class="project-date">${escape(p.date)} · ${escape(p.role)}</p><p class="project-type">${escape(p.type)}</p><h3>${escape(p.title)}</h3><p class="project-summary">${escape(p.summary)}</p><div class="tags">${p.tags.map(t => `<span>${escape(t)}</span>`).join('')}</div><details${openDetails[i] ? ' open' : ''}><summary>${escape(text.details)} <span aria-hidden="true">＋</span></summary>${p.details.map(d => `<div class="project-detail"><h4>${escape(d.title)}</h4><p>${escape(d.text)}</p></div>`).join('')}</details></div></article>`).join(''));
    fill('skills-list', data.skills.map((s, i) => `<article class="reveal"><span class="skill-index">0${i + 1}</span><h3>${escape(s.title)}</h3><p>${escape(s.description)}</p></article>`).join(''));
    fill('awards-list', data.awards.map(a => `<article class="reveal"><p>${escape(a.date)}</p><h3>${escape(a.title)}</h3><span>${escape(a.institution)}</span></article>`).join(''));
    if (!initial) document.querySelectorAll('#research-list .reveal, #project-list .reveal, #skills-list .reveal, #awards-list .reveal').forEach(el => el.classList.add('visible'));
    updateToggle();
    observeContent();
    try { localStorage.setItem('resume-language', language); } catch {}
  };

  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.language !== language) render(button.dataset.language);
  }));
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    try { localStorage.setItem('resume-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch {}
    updateToggle();
  });

  document.querySelector('.print-button').addEventListener('click', () => window.print());
  let printDetails = [];
  window.addEventListener('beforeprint', () => {
    printDetails = [...document.querySelectorAll('details')].map(el => ({ el, open: el.open }));
    printDetails.forEach(({ el }) => { el.open = true; });
  });
  window.addEventListener('afterprint', () => printDetails.forEach(({ el, open }) => { el.open = open; }));
  render(language, true);
})();
