// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mainNav = document.querySelector('.main-nav ul');
  
  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    mainNav.style.display = isExpanded ? 'none' : 'flex';
    this.classList.toggle('open');
  });

  // Close menu when clicking on nav links (for single-page navigation)
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        mainNav.style.display = 'none';
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.classList.remove('open');
      }
    });
  });

  // Smooth scrolling for anchor links (if needed)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Track outbound links to silo pages (optional analytics)
  document.querySelectorAll('a[href^="/family-takaful"], a[href^="/unit-trust"]').forEach(link => {
    link.addEventListener('click', function() {
      // Replace with your analytics code
      console.log('Navigating to:', this.getAttribute('href'));
    });
  });
});
