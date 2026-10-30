const elements = Array.from(document.querySelectorAll('.nav-anchor > li > a'));

elements.forEach(el => {
    el.addEventListener('click', () => {
        const activeLink = elements.find(link => link.classList.contains('active'));

        if (activeLink) {
            activeLink.classList.remove('active');
        }
        el.classList.add('active');
    });
});