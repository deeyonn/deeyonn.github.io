// ════════════════════════════════════════════
// DATA — edit this to customise your site
// ════════════════════════════════════════════

const DATA = {

  typewriterLines: [
    'software engineer',
    'security & IAM specialist',
    'cloud & automation builder',
    'security-first developer',
  ],

  skills: [
    'AutoHotkey', 'AWS CloudWatch', 'AWS IAM', 'AWS Lambda',
    'BeanShell', 'C', 'C#', 'C++', 'CSS',
    'Figma', 'GitHub', 'Go', 'Heroku', 'HTML5',
    'Java', 'JavaScript', 'Kali Linux', 'Keras',
    'ML.NET', 'NATS', 'Node.js',
    'PHP', 'Postman', 'PowerBI', 'PyTorch', 'Python',
    'REST APIs', 'Rust', 'SailPoint IIQ/ISC', 'ServiceNow',
    'Slack API', 'SQL', 'Tableau', 'Telegram API', 'TensorFlow',
    'UiPath', 'Vim', 'Vue.js',
  ],

  certs: [
    { name: 'Google AI Essentials Specialization',            issuer: 'Google',   date: 'Sep 2025' },
    { name: 'Google Prompting Essentials Specialization',     issuer: 'Google',   date: 'Sep 2025' },
    { name: 'Maximize Productivity With AI Tools',            issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Use AI as a Creative or Expert Partner',         issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Use AI Responsibly',                             issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Stay Ahead of the AI Curve',                     issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Design Prompts for Everyday Work Tasks',         issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Discover the Art of Prompting',                  issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Speed Up Data Analysis and Presentation Building', issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Introduction to AI',                             issuer: 'Coursera', date: 'Sep 2025' },
    { name: 'Start Writing Prompts like a Pro',               issuer: 'Coursera', date: 'Aug 2025' },
  ],

  projects: [
    {
      title: 'IAM Lifecycle Workflows',
      desc: 'Designed and implemented joiner-mover-leaver provisioning workflows at CPF Board using SailPoint IIQ/ISC, with custom BeanShell rules, plugins, and compliance reports for audit evidence generation.',
      tags: ['SailPoint IIQ/ISC', 'BeanShell', 'Java'],
      github: null,
      live: null,
    },
    {
      title: 'Serverless Slack App',
      desc: 'Revamped a GovTech internal Slack application on AWS Lambda, achieving a 33% codebase reduction by migrating from text to visual Block Kit UI. Integrated CloudWatch structured logging, cutting log size by 60%.',
      tags: ['AWS Lambda', 'Python', 'Slack API', 'CloudWatch'],
      github: null,
      live: null,
    },
    {
      title: 'N-Gram Bot Suggestion Engine',
      desc: 'Built a pre-computed trigram similarity engine for a trading platform\'s bot command suggestions at TransactCloud, reducing query time by 10x. Managed real-time message routing via NATS messaging infrastructure.',
      tags: ['Java', 'NATS', 'Algorithms'],
      github: null,
      live: null,
    },
    {
      title: 'Sentiment Analysis Prototype',
      desc: 'Built a two-iteration sentiment analysis system at Singtel, improving accuracy from 62.3% to 89.0% between versions. Presented findings to clients and the department director.',
      tags: ['Python', 'ML', 'NLP'],
      github: null,
      live: null,
    },
    {
      title: 'ServiceNow Legacy Integration',
      desc: 'Integrated a legacy Singtel product with ServiceNow via Node.js, cutting daily compute time from 10 hours to 33 minutes and significantly improving server response times.',
      tags: ['Node.js', 'ServiceNow', 'Automation'],
      github: null,
      live: null,
    },
    {
      title: 'This Website',
      desc: 'My personal portfolio. Zero-dependency static site built with pure HTML, CSS, and vanilla JS — Bitburner-inspired pixel art aesthetic.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/deeyonn',
      live: null,
    },
  ],

  blog: [
    {
      date: '2026-04-01',
      title: 'Hello, World',
      desc: 'Site is live. More coming soon.',
      tags: ['meta'],
      url: '#',
    },
  ],

  contact: [
    { label: 'email',    icon: '✉', href: 'mailto:deeyonn@gmail.com' },
    { label: 'github',   icon: '⌥', href: 'https://github.com/deeyonn' },
    { label: 'linkedin', icon: '◈', href: 'https://linkedin.com/in/deon-tan' },
  ],

};


// ════════════════════════════════════════════
// PIXEL AVATAR
// ════════════════════════════════════════════

function drawAvatar() {
  const canvas = document.getElementById('avatar-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const px = 6; // size of each "pixel" in canvas units

  // 16×16 sprite — 0: transparent, 1: green, 2: dark green
  const sprite = [
    [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,1,2,2,1,1,2,2,1,1,0,0,0],
    [0,0,0,1,1,2,2,1,1,2,2,1,1,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,2,1,1,1,1,1,1,2,1,0,0,0],
    [0,0,0,1,1,2,2,2,2,2,2,1,1,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0],
    [0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0],
    [0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0],
  ];

  const colors = { 1: '#00ff41', 2: '#003311' };

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sprite.forEach((row, r) => {
    row.forEach((val, c) => {
      if (colors[val]) {
        ctx.fillStyle = colors[val];
        ctx.fillRect(c * px, r * px, px, px);
      }
    });
  });
}


// ════════════════════════════════════════════
// TYPEWRITER
// ════════════════════════════════════════════

function typewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const lines = DATA.typewriterLines;
  let lineIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = lines[lineIdx];
    el.textContent = current.slice(0, charIdx);

    if (!deleting && charIdx < current.length) {
      charIdx++;
      setTimeout(tick, 80);
    } else if (!deleting && charIdx === current.length) {
      deleting = true;
      setTimeout(tick, 1800);
    } else if (deleting && charIdx > 0) {
      charIdx--;
      setTimeout(tick, 40);
    } else {
      deleting = false;
      lineIdx = (lineIdx + 1) % lines.length;
      setTimeout(tick, 300);
    }
  }

  tick();
}


// ════════════════════════════════════════════
// RENDER SKILLS
// ════════════════════════════════════════════

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = DATA.skills
    .map(s => `<span class="skill-tag">${s}</span>`)
    .join('');
}


// ════════════════════════════════════════════
// RENDER CERTS
// ════════════════════════════════════════════

function renderCerts() {
  const list = document.getElementById('certs-list');
  if (!list) return;
  list.innerHTML = DATA.certs.map(c => `
    <div class="cert-item">
      <span class="cert-name">${c.name}</span>
      <span class="cert-meta">${c.issuer} · ${c.date}</span>
    </div>
  `).join('');
}


// ════════════════════════════════════════════
// RENDER PROJECTS
// ════════════════════════════════════════════

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = DATA.projects.map(p => `
    <article class="project-card">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-sm">github</a>` : ''}
        ${p.live   ? `<a href="${p.live}"   target="_blank" rel="noopener" class="btn-sm">live →</a>` : ''}
      </div>
    </article>
  `).join('');
}


// ════════════════════════════════════════════
// RENDER BLOG
// ════════════════════════════════════════════

function renderBlog() {
  const list = document.getElementById('blog-list');
  if (!list) return;

  list.innerHTML = DATA.blog.map(p => `
    <article class="blog-entry">
      <span class="blog-date">${p.date}</span>
      <div class="blog-content">
        <a href="${p.url}" class="blog-title">${p.title}</a>
        <p class="blog-desc">${p.desc}</p>
        <div class="blog-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}


// ════════════════════════════════════════════
// RENDER CONTACT
// ════════════════════════════════════════════

function renderContact() {
  const links = document.getElementById('contact-links');
  if (!links) return;

  links.innerHTML = DATA.contact.map(c => {
    const external = c.href.startsWith('http') ? 'target="_blank" rel="noopener"' : '';
    return `
      <a href="${c.href}" class="contact-item" ${external}>
        <span class="contact-icon">${c.icon}</span>
        <span>${c.label}</span>
      </a>
    `;
  }).join('');
}


// ════════════════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════════════════

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}


// ════════════════════════════════════════════
// NAV
// ════════════════════════════════════════════

function initNav() {
  const nav      = document.getElementById('navbar');
  const toggle   = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}


// ════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  drawAvatar();
  typewriter();
  renderSkills();
  renderCerts();
  renderProjects();
  renderBlog();
  renderContact();
  initScrollAnimations();
  initNav();
});
