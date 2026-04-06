const menu = document.querySelector('#mobile-menu'); //so its target the mobile-menu id element (#menas id)
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');//check whats mean toggle the classLists
    menuLinks.classList.toggle('active');
});
