const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach( link => {
    link.addEventListener('click', (e) => {
        let navMenu = document.querySelector('#navbarText');
        if ( navMenu.classList.contains('show') ) {
            navMenu.classList.remove('show');
        }
    });
});
