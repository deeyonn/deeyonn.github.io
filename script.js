// ════════════════════════════════════════════
// DATA — edit this to customise your site
// ════════════════════════════════════════════

const DATA = {

  typewriterLines: [
    'software developer',
    'builder of things',
    'pixel art enthusiast',
    'coffee enjoyer',
  ],

  skills: [
    // Replace with your actual skills
    'JavaScript', 'TypeScript', 'Python',
    'React', 'Node.js', 'SQL',
    'Docker', 'Git', 'Linux',
    'REST APIs', 'etc.',
  ],

  projects: [
    // Replace with your actual projects
    {
      title: 'Project Alpha',
      desc: 'A short description of what this project does and why it was built.',
      tags: ['JavaScript', 'Node.js'],
      github: 'https://github.com/your-username/project-alpha',
      live: null,
    },
    {
      title: 'Project Beta',
      desc: 'Another project. Replace these placeholders with your real work.',
      tags: ['Python', 'Docker'],
      github: 'https://github.com/your-username/project-beta',
      live: 'https://example.com',
    },
    {
      title: 'This Website',
      desc: 'My personal site. Pure HTML, CSS, and vanilla JS with a Bitburner-inspired pixel art aesthetic.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/your-username/your-username.github.io',
      live: null,
    },
  ],

  blog: [
    // Add blog posts here, or hook up a CMS later
    {
      date: '2026-03-31',
      title: 'Hello, World',
      desc: 'First post. Site is live. More coming soon.',
      tags: ['meta'],
      url: '#',
    },
  ],

  contact: [
    { label: 'email',    icon: '✉', href: 'mailto:you@example.com' },
    { label: 'github',   icon: '⌥', href: 'https://github.com/your-username' },
    { label: 'linkedin', icon: '◈', href: 'https://linkedin.com/in/your-profile' },
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
  renderProjects();
  renderBlog();
  renderContact();
  initScrollAnimations();
  initNav();
});
