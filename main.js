const pages = [
  document.getElementById('page1'),
  document.getElementById('page2'),
  document.getElementById('page3')
];
let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
    if (current === pages.length - 1) {
      document.getElementById('congratsMain')?.focus?.();
    }
  }
}

const continueBtn = document.getElementById('continueBtn');
continueBtn.addEventListener('click', nextPage);
continueBtn.addEventListener('keypress', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    nextPage();
  }
});

pages[0].addEventListener('click', nextPage);

document.addEventListener('keydown', e => {
  if ((e.key === 'ArrowRight' || e.key === ' ') && current < pages.length - 1) {
    e.preventDefault();
    nextPage();
  }
});
