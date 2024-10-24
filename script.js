// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#ff6347'; // Change color on hover
    });

    icon.addEventListener('mouseout', () => {
        icon.style.color = 'black'; // Change back to original color
    });
});

