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
    // Show the resume viewer by default (if it exists)
    const resumeViewer = document.querySelector(".resume-viewer");
    if (resumeViewer) {
        resumeViewer.style.display = "block";
    }

    // Download Resume functionality
    const downloadButton = document.getElementById("download-resume");
    if (downloadButton) {
        downloadButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior if it's a link

            try {
                const link = document.createElement("a");
                link.href = "Shubhendu_resume.pdf"; // Path to your resume file
                link.download = "Shubhendu_Resume.pdf"; // Customize the file name
                link.style.display = "none"; // Hide the temporary link

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error("Error downloading resume:", error);
                // Fallback: open in new tab if download fails
                window.open("Shubhendu_resume.pdf", "_blank");
            }
        });
    }
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