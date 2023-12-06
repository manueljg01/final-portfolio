// Mobile menu display script
const hamburger = document.querySelector('.hamburger');
const mobileNavLinks = document.querySelector('.mobile-nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNavLinks.classList.toggle('active');
});

// Hide the mobile menu initially
document.addEventListener('DOMContentLoaded', () => {
    mobileNavLinks.classList.remove('active');
});