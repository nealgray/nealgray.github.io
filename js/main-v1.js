// Javascript Functions

// JS for Displaying the Mobile Menu from the Hamburger Icon
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.mobile-menu');
    const navMenu = document.getElementById('navMenu');

    menuButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
