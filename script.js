// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hover effect for social icons
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.color = '#007bff';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.color = '#333';
  });
});
