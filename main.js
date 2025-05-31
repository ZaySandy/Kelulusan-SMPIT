const slides = document.querySelectorAll('.slide');
const inputName = document.getElementById('studentName');
const submitBtn = document.getElementById('submitName');
const displayName = document.getElementById('displayName');

setTimeout(() => {
  showSlide(1); 
}, 2000);

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
}

document.getElementById('continueBtn').addEventListener('click', () => {
  showSlide(2);
  inputName.focus();
});
document.getElementById('continueBtn').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    showSlide(2);
    inputName.focus();
  }
});

inputName.addEventListener('input', () => {
  submitBtn.disabled = inputName.value.trim().length === 0;
});

inputName.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !submitBtn.disabled) {
    submitBtn.click();
  }
});

submitBtn.addEventListener('click', () => {
  const raw = inputName.value.trim();
  if (raw.length === 0) return;

  const formatted = raw.toLowerCase()
    .split(' ')
    .filter(w => w.length > 0)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  displayName.textContent = formatted;
  showSlide(3);
  startConfetti();
});

function startConfetti() {
  const confettiContainer = document.querySelector('#page4 .confetti-container');
  confettiContainer.innerHTML = '';
  const colors = ['#bbdefb', '#42a5f5', '#1565c0', '#90caf9', '#64b5f6'];
  const num = 100;

  for (let i = 0; i < num; i++) {
    const c = document.createElement('div');
    c.style.position = 'absolute';
    const size = Math.random() * 8 + 4;
    c.style.width = `${size}px`;
    c.style.height = `${size}px`;
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.top = `${Math.random() * 100}%`;
    c.style.left = `${Math.random() * 100}%`;
    c.style.opacity = Math.random() + 0.5;
    c.style.borderRadius = '50%';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    c.style.animation = `confetti-fall ${3 + Math.random() * 3}s linear infinite`;
    c.style.animationDelay = `${Math.random() * 3}s`;
    confettiContainer.appendChild(c);
  }
}
