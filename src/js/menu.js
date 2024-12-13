const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const menu = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked'); // Log when the menu toggle button is clicked
    menu.classList.add('menu--active');
});

menuClose.addEventListener('click', () => {
    console.log('Menu close clicked'); // Log when the menu close button is clicked
    menu.classList.remove('menu--active');
});

document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', (event) => {
        console.log(`Menu item clicked: ${event.target.textContent}`); // Log which menu item was clicked
    });
});