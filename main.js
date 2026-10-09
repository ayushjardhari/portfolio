/* ═══════════════════════════════════════════════════
   AYUSH NEGI PORTFOLIO — main.js
   All interactivity, rendering, and initialization
═══════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────────
   LOADER
──────────────────────────────────────────────────── */
(function initLoader() {
  const bar    = document.getElementById('loaderBar');
  const txt    = document.getElementById('loaderTxt');
  const loader = document.getElementById('loader');

  const steps = [
    [0,   'Initializing...'],
    [20,  'Loading assets...'],
    [45,  'Building profile card...'],
    [70,  'Rendering portfolio...'],
    [90,  'Almost ready...'],
    [100, 'Launching! 🚀'],
  ];

  let si = 0;
  function step() {
    if (si >= steps.length) return;
    const [pct, msg] = steps[si++];
    bar.style.width  = pct + '%';
    txt.textContent  = msg;
    if (si < steps.length) {
      setTimeout(step, 260 + Math.random() * 180);
    } else {
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 700);
      }, 400);
    }
  }
  step();
})();


/* ────────────────────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────────────────────── */
(function initCursor() {
  const ring = document.getElementById('cursorRing');
  const dot  = document.getElementById('cursorDot');
  if (!ring || !dot) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll(
    'a, button, input, textarea, .chip, .pr-card, .flip-card'
  ).forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width  = '52px';
      ring.style.height = '52px';
      ring.style.opacity = '0.6';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.opacity = '1';
    });
  });
})();


/* ────────────────────────────────────────────────────
   THEME TOGGLE
──────────────────────────────────────────────────── */
(function initTheme() {
  const btn   = document.getElementById('themeToggle');
  const saved = localStorage.getItem('an-theme') || 'dark';
  document.documentElement.dataset.theme = saved;
  btn.textContent = saved === 'dark' ? '☀' : '🌙';

  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    btn.textContent = next === 'dark' ? '☀' : '🌙';
    localStorage.setItem('an-theme', next);
  });
})();


/* ────────────────────────────────────────────────────
   NAV
──────────────────────────────────────────────────── */
function go(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('mobMenu').classList.remove('open');
}

(function initNav() {
  const navLinks  = document.getElementById('navLinks');
  const mobMenu   = document.getElementById('mobMenu');
  const hamBtn    = document.getElementById('hamBtn');
  const footerNav = document.getElementById('footerNav');

  const labels = {
    home: '~/home', about: '~/about',
    skills: '~/skills', projects: '~/projects',
    certification: '~/certs', contact: '~/contact',
  };

  DATA.navIds.forEach(id => {
    // Desktop
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.textContent = labels[id] || '~/' + id;
    btn.dataset.target = id;
    btn.addEventListener('click', () => go(id));
    navLinks.appendChild(btn);

    // Mobile
    const mb = document.createElement('button');
    mb.className = 'mob-btn';
    mb.textContent = labels[id] || '~/' + id;
    mb.addEventListener('click', () => go(id));
    mobMenu.appendChild(mb);

    // Footer
    const fb = document.createElement('button');
    fb.className = 'ft-btn';
    fb.textContent = labels[id] || '~/' + id;
    fb.addEventListener('click', () => go(id));
    footerNav.appendChild(fb);
  });

  hamBtn.addEventListener('click', () => mobMenu.classList.toggle('open'));
  document.getElementById('yr').textContent = new Date().getFullYear();
})();


/* ────────────────────────────────────────────────────
   TYPING EFFECT
──────────────────────────────────────────────────── */
(function initTyping() {
  const el     = document.getElementById('typedText');
  const roles  = DATA.roles;
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];
    if (!deleting && ci <= word.length) {
      el.textContent = word.slice(0, ci++);
      setTimeout(tick, 75);
    } else if (!deleting && ci > word.length) {
      deleting = true;
      setTimeout(tick, 1800);
    } else if (deleting && ci >= 0) {
      el.textContent = word.slice(0, ci--);
      setTimeout(tick, 36);
    } else {
      deleting = false;
      ri = (ri + 1) % roles.length;
      setTimeout(tick, 80);
    }
  }
  tick();
})();


/* ────────────────────────────────────────────────────
   HERO FLIP CARD — inject stat boxes
──────────────────────────────────────────────────── */
(function buildHeroFlipCard() {
  const statsWrap = document.getElementById('heroStats');
  if (!statsWrap) return;

  DATA.heroStats.forEach(s => {
    const box = document.createElement('div');
    box.className = 'fc-stat';
    box.innerHTML = `
      <span class="fc-stat-val">${s.val}</span>
      <div class="fc-stat-lbl">${s.lbl}</div>`;
    statsWrap.appendChild(box);
  });
})();


/* ────────────────────────────────────────────────────
   ABOUT — STATS
──────────────────────────────────────────────────── */
(function buildAboutStats() {
  const wrap = document.getElementById('aboutStats');
  if (!wrap) return;
  DATA.stats.forEach(s => {
    const el = document.createElement('div');
    el.className = 'stat-box';
    el.innerHTML = `<span class="stat-val">${s.val}</span><span class="stat-lbl">${s.lbl}</span>`;
    wrap.appendChild(el);
  });
})();


/* ────────────────────────────────────────────────────
   ABOUT — TRAITS
──────────────────────────────────────────────────── */
(function buildTraits() {
  const wrap = document.getElementById('traitsBody');
  if (!wrap) return;
  DATA.traits.forEach(t => {
    const el = document.createElement('div');
    el.className = 'trait-item';
    el.innerHTML = `
      <span class="trait-icon">${t.icon}</span>
      <div>
        <div class="trait-name">${t.name}</div>
        <div class="trait-desc">${t.desc}</div>
      </div>`;
    wrap.appendChild(el);
  });
})();


/* ────────────────────────────────────────────────────
   PESE — flip cards (front: bullet points, back: YouTube embed)
──────────────────────────────────────────────────── */
/*function extractYoutubeId(raw) {
  if (raw == null || raw === '') return null;
  const s = String(raw).trim();
  if (!s) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  try {
    const url = /^https?:\/\//i.test(s) ? new URL(s) : new URL('https://' + s.replace(/^\/\//, ''));
    const v = url.searchParams.get('v');
    if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
    const path = url.pathname.replace(/^\//, '');
    const shorts = path.match(/^shorts\/([a-zA-Z0-9_-]{11})/);
    if (shorts) return shorts[1];
    const embed = path.match(/^embed\/([a-zA-Z0-9_-]{11})/);
    if (embed) return embed[1];
    const shortHost = /^youtu\.be$/i.test(url.hostname);
    if (shortHost) {
      const id = path.split('/')[0];
      if (id && /^[a-zA-Z0-9_-]{11}$/.test(id)) return id;
    }
  } catch {
  }
  return null;
}

(function buildPese() {
  const grid = document.getElementById('peseGrid');
  if (!grid) return;

  const prefersTapFlip = typeof window.matchMedia === 'function' &&
    window.matchMedia('(hover: none)').matches;

  DATA.pese.forEach((module, i) => {
    const videoId = extractYoutubeId(module.videoId);
    const hasVideo = !!videoId;

    // Outer wrapper — flip-capable only when videoId parses to an ID
    const wrapper = document.createElement('div');
    wrapper.className = 'pese-flip-wrap reveal' + (module.full ? ' full' : '');
    wrapper.style.animationDelay = (i * 0.08) + 's';
    if (hasVideo) {
      wrapper.classList.add('has-video');
      wrapper.setAttribute('tabindex', '0');
      const hintFront = prefersTapFlip ? '▶ tap for video' : '▶ hover for video';
      const hintBack  = prefersTapFlip ? '◀ tap to go back' : '◀ hover to go back';
      wrapper.dataset.hintFront = hintFront;
      wrapper.dataset.hintBack = hintBack;
      wrapper.setAttribute('role', 'button');
      wrapper.setAttribute(
        'aria-label',
        `${module.title}: ${prefersTapFlip ? 'tap' : 'hover'} to show lecture video`
      );
    }

    // Front face — bullet points
    const front = document.createElement('div');
    front.className = 'pese-card pese-front';
    const hintFrontTxt = hasVideo ? (wrapper.dataset.hintFront || '▶ hover for video') : '';
    front.innerHTML = `
      <h3>
        <span class="pese-num">${module.num}</span>
        ${module.title}
        ${hasVideo ? `<span class="pese-flip-hint">${hintFrontTxt}</span>` : ''}
      </h3>
      <ul>${module.items.map(item => `<li>${item}</li>`).join('')}</ul>`;

    wrapper.appendChild(front);

    // Back face — YouTube embed (only rendered when videoId exists)
    if (hasVideo) {
      const back = document.createElement('div');
      back.className = 'pese-card pese-back';
      const hintBackTxt = wrapper.dataset.hintBack || '◀ hover to go back';
      back.innerHTML = `
        <div class="pese-back-header">
          <span class="pese-num">${module.num}</span>
          <span class="pese-back-title">${module.title}</span>
          <span class="pese-flip-hint pese-flip-hint--back">${hintBackTxt}</span>
        </div>
        <div class="pese-video-wrap">
          <iframe
            src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
            title="${module.title} — lecture video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>`;
      wrapper.appendChild(back);
    }

    grid.appendChild(wrapper);

    if (hasVideo && prefersTapFlip) {
      wrapper.addEventListener('click', () => {
        wrapper.classList.toggle('is-flipped');
        wrapper.setAttribute('aria-expanded', wrapper.classList.contains('is-flipped') ? 'true' : 'false');
      });
      wrapper.addEventListener('keydown', ev => {
        if (ev.key !== 'Enter' && ev.key !== ' ') return;
        ev.preventDefault();
        wrapper.classList.toggle('is-flipped');
        wrapper.setAttribute('aria-expanded', wrapper.classList.contains('is-flipped') ? 'true' : 'false');
      });
      wrapper.setAttribute('aria-expanded', 'false');
    }
  });
})();
*/


/* ────────────────────────────────────────────────────
   SKILLS
──────────────────────────────────────────────────── */
(function buildSkills() {
  const barsWrap  = document.getElementById('skillsBars');
  const chipsWrap = document.getElementById('chipsGrid');
  if (!barsWrap) return;

  DATA.skills.forEach(s => {
    const row = document.createElement('div');
    row.className = 'sk-row';
    row.innerHTML = `
      <div class="sk-meta">
        <span class="sk-name">${s.name}</span>
        <span class="sk-pct">${s.level}%</span>
      </div>
      <div class="sk-track">
        <div class="sk-fill" data-lv="${s.level}"
          style="background:linear-gradient(90deg,${s.color},${s.color}88);
                 box-shadow:0 0 8px ${s.color}55">
        </div>
      </div>`;
    barsWrap.appendChild(row);
  });

  if (chipsWrap) {
    DATA.chips.forEach(c => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = c;
      chipsWrap.appendChild(chip);
    });
  }
})();


/* ────────────────────────────────────────────────────
   PROJECTS
──────────────────────────────────────────────────── */
(function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  DATA.projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pr-card reveal';
    card.style.animationDelay = (i * 0.12) + 's';
    card.innerHTML = `
      <div class="pr-thumb" style="background:linear-gradient(135deg,${p.color}18,${p.color}06)">
        ${p.emoji}
        <div class="pr-action-row">
          <a href="${p.github}" target="_blank" rel="noopener" class="pr-link">GitHub ↗</a>
        </div>
      </div>
      <div class="pr-body">
        <div class="pr-title">${p.title}</div>
        <div class="pr-sub" style="color:${p.color}">${p.sub}</div>
        <div class="pr-desc">${p.desc}</div>
        <div class="pr-tags">
          ${p.tags.map(t => `<span class="pr-tag" style="background:${p.color}18;color:${p.color}">${t}</span>`).join('')}
        </div>
      </div>`;

    card.addEventListener('mouseenter', () => {
      card.style.borderColor = p.color + '55';
      card.style.boxShadow   = `0 20px 60px ${p.color}18`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
      card.style.boxShadow   = '';
    });

    grid.appendChild(card);
  });
})();


/* ────────────────────────────────────────────────────
   TIMELINE
──────────────────────────────────────────────────── */
(function buildTimeline() {
  const wrap = document.getElementById('timelineWrap');
  if (!wrap) return;

  const TYPE_COLORS = { edu: '#00ffaa', cert: '#ffd166', work: '#00c8ff' };
  const TYPE_ICONS  = { edu: '🎓',      cert: '🏅',      work: '💼' };

  DATA.timeline.forEach((item, i) => {
    const color = TYPE_COLORS[item.type] || '#00ffaa';
    const icon  = TYPE_ICONS[item.type]  || '📌';
    const el = document.createElement('div');
    el.className = 'tl-item reveal';
    el.style.animationDelay = (i * 0.1) + 's';
    el.innerHTML = `
      <div class="tl-dot" style="background:${color}15;border:1.5px solid ${color}">${icon}</div>
      <div class="tl-card">
        <div class="tl-head">
          <div>
            <div class="tl-title">${item.title}</div>
            <div class="tl-org">${item.org}</div>
          </div>
          <span class="tl-year">${item.year}</span>
        </div>
        <div class="tl-desc">${item.desc}</div>
      </div>`;
    wrap.appendChild(el);
  });
})();


/* ────────────────────────────────────────────────────
   CONTACT LINKS
──────────────────────────────────────────────────── */
(function buildContact() {
  const wrap = document.getElementById('contactLinks');
  if (!wrap) return;

  if (DATA.resumePdf && String(DATA.resumePdf).trim()) {
    const pdf = document.createElement('a');
    pdf.className = 'contact-link-btn';
    pdf.href = encodeURI(String(DATA.resumePdf).trim());
    pdf.target = '_blank';
    pdf.rel = 'noopener noreferrer';
    pdf.innerHTML = `
      <span class="cl-icon">📄</span>
      <div>
        <div style="font-weight:700">Resume</div>
        <div class="cl-label">PDF · download / view</div>
      </div>
      <span style="margin-left:auto;opacity:0.4;font-size:12px">→</span>`;
    wrap.appendChild(pdf);
  }

  DATA.socials.forEach(s => {
    const a = document.createElement('a');
    a.className = 'contact-link-btn';
    a.href = s.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `
      <span class="cl-icon">${s.icon}</span>
      <div>
        <div style="font-weight:700">${s.label}</div>
        <div class="cl-label">${s.detail}</div>
      </div>
      <span style="margin-left:auto;opacity:0.4;font-size:12px">→</span>`;
    wrap.appendChild(a);
  });
})();


/* ────────────────────────────────────────────────────
   RESUME — hero CTA
──────────────────────────────────────────────────── */
(function initResumeHeroLink() {
  const path = DATA.resumePdf && String(DATA.resumePdf).trim();
  if (!path) return;
  const row = document.querySelector('.hero-left .cta-row');
  if (!row) return;
  const a = document.createElement('a');
  a.className = 'cta-secondary';
  a.href = encodeURI(path);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = 'Resume';
  row.appendChild(a);
})();



/* ────────────────────────────────────────────────────
   CONTACT FORM — EmailJS
──────────────────────────────────────────────────── */
(function initForm() {
  const form = document.getElementById('contactForm');
  if (!form || !window.emailjs) {
    console.error('Contact form or EmailJS SDK not found.');
    return;
  }

  emailjs.init({
    publicKey: 'Q2_mx6jOcH9BEhTuo'
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    const button = form.querySelector('button[type="submit"]');
    const originalButtonText = button.innerHTML;

    if (!name || !email || !message) {
      form.reportValidity();
      return;
    }

    button.disabled = true;
    button.innerHTML = '<span>Sending...</span>';

    try {
      await emailjs.send(
        'service_2hifwbf',
        'template_yph7icu',
        {
          name: name,
          email: email,
          message: message
        }
      );

      const area = document.getElementById('formArea');

      area.innerHTML = `
        <div class="ok-box" role="status" aria-live="polite">
          <div style="font-size:52px;margin-bottom:16px">✓</div>
          <h3>Message Sent!</h3>
          <p>Thanks for reaching out — your message was sent successfully.</p>
        </div>`;

    } catch (error) {
      console.error('EmailJS error:', error);

      let errorBox = form.querySelector('.form-error');

      if (!errorBox) {
        errorBox = document.createElement('p');
        errorBox.className = 'form-error';
        errorBox.setAttribute('role', 'alert');
        form.appendChild(errorBox);
      }

      errorBox.textContent =
        'Message could not be sent. Please try again or email ayushnegi23011784@gmail.com directly.';

      button.disabled = false;
      button.innerHTML = originalButtonText;
    }
  });
})();


/* ────────────────────────────────────────────────────
   SCROLL — reveal, skill bars, spy, scroll-top
──────────────────────────────────────────────────── */
(function initScroll() {
  // Reveal on scroll
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

  // Skill bars animate when section enters view
  const skillIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.sk-fill').forEach(bar => {
          bar.style.width = bar.dataset.lv + '%';
        });
        skillIO.disconnect();
      }
    });
  }, { threshold: 0.15 });

  const skillSec = document.getElementById('skills');
  if (skillSec) skillIO.observe(skillSec);

  // Scroll-top button + nav spy
  const stBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    stBtn.classList.toggle('show', window.scrollY > 400);

    const sy = window.scrollY + 140;
    let current = DATA.navIds[0];
    DATA.navIds.forEach(id => {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= sy) current = id;
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === current);
    });
  }, { passive: true });
})();


/* ────────────────────────────────────────────────────
   VISITOR COUNTER (Supabase)
──────────────────────────────────────────────────── */
(async function initVisitorCounter() {
  const countEl = document.getElementById('visitorCount');
  try {
    if (!window.supabase || !DATA.supabaseUrl || !DATA.supabaseKey) {
      if (countEl) countEl.textContent = '—';
      return;
    }
    const sb = window.supabase.createClient(DATA.supabaseUrl, DATA.supabaseKey);

    if (!localStorage.getItem('an-visited')) {
      const { data } = await sb.from('visitor').select('count').eq('id', 1).single();
      const newCount = (data?.count || 0) + 1;
      await sb.from('visitor').update({ count: newCount }).eq('id', 1);
      if (countEl) countEl.textContent = newCount;
      localStorage.setItem('an-visited', 'true');
    } else {
      const { data } = await sb.from('visitor').select('count').eq('id', 1).single();
      if (countEl && data) countEl.textContent = data.count;
    }
  } catch {
    if (countEl) countEl.textContent = '—';
  }
})();
