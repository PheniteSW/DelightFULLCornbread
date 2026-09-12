document.getElementById('year').textContent = new Date().getFullYear();

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
