const NavMenu = document.querySelector('.link-contact');

NavMenu.addEventListener('click', e => {
    e.preventDefault();
    NavMenu.scrollinview({ behavior: 'smooth' });
});