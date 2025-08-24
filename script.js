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

document.addEventListener("DOMContentLoaded", () => {
  // By default, show the resume
  const resumeViewer = document.querySelector(".resume-viewer");
  resumeViewer.style.display = "block";

  // Download Resume functionality
  document.getElementById("download-resume").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "resume.pdf"; // Path to your resume file
    link.download = "Shubhendu_Resume.pdf"; // Customize the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Redirect to the home page after 1 seconds
  setTimeout(() => {
    window.location.href = "/"; // Replace '/' with your home page URL
  }, 1000); // 1000ms = 1 seconds
});

function resizeIframe(iframe) {
    try {
        // Wait a moment for content to load
        setTimeout(function() {
            if (iframe.contentWindow && iframe.contentWindow.document) {
                var content = iframe.contentWindow.document;
                var height = Math.max(
                    content.body.scrollHeight,
                    content.body.offsetHeight,
                    content.documentElement.clientHeight,
                    content.documentElement.scrollHeight,
                    content.documentElement.offsetHeight
                );

                // Set minimum height and add some padding
                iframe.style.height = Math.max(height + 50, 600) + 'px';
            }
        }, 500);
    } catch(e) {
        // Fallback if cross-origin issues
        iframe.style.height = '800px';
    }
}

// Handle download resume button
document.getElementById('download-resume').addEventListener('click', function() {
    // Create a temporary link to download the resume
    var link = document.createElement('a');
    link.href = 'resume.html'; // You might want to point this to a PDF file instead
    link.download = 'Shubhendu_Sangam_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
