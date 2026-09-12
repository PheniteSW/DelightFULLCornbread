document.getElementById('year').textContent = new Date().getFullYear();

// Zoom-into-the-oven splash intro. Plays once per browser tab session.
(function () {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const alreadySeen = sessionStorage.getItem('delightfull_splash_shown');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function finishSplash() {
    splash.classList.add('is-done');
    document.body.style.overflow = '';
    sessionStorage.setItem('delightfull_splash_shown', '1');
    setTimeout(() => splash.remove(), 500);
  }

  if (alreadySeen || reducedMotion) {
    splash.classList.add('skip-anim');
    finishSplash();
    return;
  }

  document.body.style.overflow = 'hidden';
  splash.addEventListener('click', finishSplash);
  setTimeout(finishSplash, 1800);
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
