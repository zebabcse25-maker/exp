
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.transform = 'translateY(-100%)';  // hide
  } else {
    navbar.style.transform = 'translateY(0)';       // show
  }

  lastScroll = currentScroll;
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


// ── RESERVATION FORM VALIDATION ──
const bookBtn = document.querySelector('#reservation .btn-gold');

if (bookBtn) {
  bookBtn.addEventListener('click', () => {
    const name  = document.querySelector('#reservation input[placeholder="Your Name"]').value.trim();
    const phone = document.querySelector('#reservation input[placeholder="Phone Number"]').value.trim();
    const date  = document.querySelector('#reservation input[type="date"]').value;

    if (!name || !phone || !date) {
      alert('⚠️ Please fill in all fields before booking!');
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert('⚠️ Please enter a valid 10-digit phone number.');
      return;
    }

    alert(`✅ Table booked for ${name} on ${date}! We'll confirm on ${phone}.`);
  });
}


// ── SEARCH BAR FILTER (Menu Cards) ──
const searchInput = document.querySelector('input[type="search"]');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('#food .card');

    cards.forEach(card => {
      const title = card.querySelector('h5').textContent.toLowerCase();
      card.closest('.col-md-4').style.display = title.includes(query) ? '' : 'none';
    });
  });
}


// ── SMOOTH SCROLL for Nav Links ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #d4a017;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 20px;
  cursor: pointer;
  display: none;
  z-index: 9999;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
  transition: background 0.3s;
`;
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
