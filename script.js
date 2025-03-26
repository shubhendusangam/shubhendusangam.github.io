// JavaScript for Single Page Navigation
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior

      const targetSection = this.getAttribute('data-section');

      // Hide all sections
      sections.forEach(section => section.classList.remove('visible'));

      // Show the clicked section
      document.getElementById(targetSection).classList.add('visible');
    });
  });

  // By default, show the "About Me" section
  document.getElementById('about').classList.add('visible');
});

document.getElementById('toggle-resume').addEventListener('click', function () {
  const viewer = document.querySelector('.resume-viewer');
  const button = document.getElementById('toggle-resume');

  if (viewer.style.display === 'none') {
    viewer.style.display = 'block';
    button.textContent = 'Hide Resume';
  } else {
    viewer.style.display = 'none';
    button.textContent = 'View Resume';
  }
});
