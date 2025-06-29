// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    menuButton.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mainNav.style.display = isExpanded ? 'none' : 'block';
        
        // Animate hamburger icon
        this.classList.toggle('open');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.style.display = 'none';
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.classList.remove('open');
        });
    });
});
