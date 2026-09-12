document.getElementById('year').textContent = new Date().getFullYear();

// Oven-door intro: tap the oven to zoom through into the site.
// Skips itself (no animation) on repeat visits within the same tab session.
(function () {
  const intro = document.getElementById('intro');
  const site = document.getElementById('site');
  if (!intro || !site) return;

  const alreadySeen = sessionStorage.getItem('delightfull_intro_shown');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function skipIntro() {
    intro.style.display = 'none';
    site.classList.add('visible');
    sessionStorage.setItem('delightfull_intro_shown', '1');
  }

  if (alreadySeen || reducedMotion) {
    skipIntro();
    return;
  }

  function openOven() {
    intro.classList.add('zooming');
    site.classList.add('visible');
    sessionStorage.setItem('delightfull_intro_shown', '1');
    setTimeout(() => { intro.style.display = 'none'; }, 950);
  }

  intro.addEventListener('click', openOven);
  intro.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openOven();
    }
  });
})();

const ovenBtn = document.getElementById('ovenBtn');
const ovenModal = document.getElementById('ovenModal');
const ovenClose = document.getElementById('ovenClose');

function openOven() {
  ovenModal.hidden = false;
  ovenBtn.setAttribute('aria-expanded', 'true');
  ovenClose.focus();
}

function closeOven() {
  ovenModal.hidden = true;
  ovenBtn.setAttribute('aria-expanded', 'false');
  ovenBtn.focus();
}

ovenBtn.addEventListener('click', openOven);
ovenClose.addEventListener('click', closeOven);

ovenModal.addEventListener('click', (e) => {
  if (e.target === ovenModal) closeOven();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !ovenModal.hidden) closeOven();
});
