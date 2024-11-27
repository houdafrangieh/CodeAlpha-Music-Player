const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => {
    console.log('Menu open clicked');
    sidebar.style.left = '0';});

menuClose.addEventListener('click', () => {
    console.log('Menu close clicked');
    sidebar.style.left = '-100%';});
