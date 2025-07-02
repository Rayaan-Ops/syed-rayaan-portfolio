// script.js

// Hover effect for buttons
document.querySelectorAll('button, .btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.3s ease';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
