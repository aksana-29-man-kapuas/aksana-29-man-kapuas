const scroll = () => {
    const navbar = document.querySelector('nav');
    if (window.innerWidth > 1000) {
        navbar.classList.remove('bg-secondary');
        window.addEventListener('scroll', e => {
            if (window.scrollY == 0) {
                navbar.classList.remove('bg-secondary');
                navbar.style.backgroundColor = 'transparent';
            } else {
                navbar.classList.add('bg-secondary');
            }
        })
    }
}

const windowResize = () => {
    const navbar = document.querySelector('nav');
    window.addEventListener('resize', e => {
        if (window.innerWidth < 1000) {
            navbar.classList.add('bg-secondary');
        } else {
            navbar.classList.remove('bg-secondary');
        }
    })
}

const load = () => {
    windowResize();
    scroll();
}

document.body.onload = load;