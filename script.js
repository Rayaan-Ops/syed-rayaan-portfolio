// ✅ Hover effect for buttons
document.querySelectorAll('button, .btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transition = 'transform 0.3s ease';
    button.style.transform = 'scale(1.05)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

// ✅ Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ✅ Dark mode toggle using ONE class only
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
  darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });
}
