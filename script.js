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

document.getElementById("download-resume").addEventListener("click", () => {
  // Trigger download
  const resumeUrl = "resume.pdf"; // Path to your resume file
  const link = document.createElement("a"); // Create a temporary link element
  link.href = resumeUrl; // Set href to the file URL
  link.download = "Shubhendu_Resume.pdf"; // Set the name for the downloaded file
  document.body.appendChild(link); // Add the link to the body
  link.click(); // Trigger the click event to start download
  document.body.removeChild(link); // Remove the temporary link element
});


document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Redirect to the home page after 1 seconds
  setTimeout(() => {
    window.location.href = "/"; // Replace '/' with your home page URL
  }, 1000); // 1000ms = 1 seconds
});
