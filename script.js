// Custom cursor
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
});

(function animRing() {
  rx += (mx - rx - 18) * 0.18;
  ry += (my - ry - 18) * 0.18;
  ring.style.transform = `translate(${rx}px, ${ry}px)`;
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .proj-card, .skill-group, .hack-item, .cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.width = cur.style.height = '22px';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width = cur.style.height = '12px';
  });
});

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 70);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Contact form
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Send message';
    btn.disabled = false;
    document.getElementById('form-msg').style.display = 'block';
    e.target.reset();
    setTimeout(() => {
      document.getElementById('form-msg').style.display = 'none';
    }, 4000);
  }, 1200);
}

// Mobile menu
function toggleMenu(el) {
  const links = document.querySelector('.nav-links');
  const open = links.style.display === 'flex';
  links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:72px;left:16px;right:16px;background:rgba(7,4,18,.97);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:20px 24px;gap:18px;z-index:999;backdrop-filter:blur(20px);';
  el.querySelectorAll('span')[0].style.transform = open ? '' : 'rotate(45deg) translate(5px, 5px)';
  el.querySelectorAll('span')[1].style.opacity = open ? '1' : '0';
  el.querySelectorAll('span')[2].style.transform = open ? '' : 'rotate(-45deg) translate(5px, -5px)';
}

// To add your profile photo later, call this from console or add src directly:
// document.getElementById('profile-img').src = 'your-photo.jpg';
// document.getElementById('profile-img').style.display = 'block';
// document.getElementById('avatar-initials').style.display = 'none';
