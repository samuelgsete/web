// Habilita a biblioteca de ícones
lucide.createIcons();

const goTo = (target) => {
    window.location.href = target;
}

const home = document.querySelector('#home');
home.addEventListener('click', () => goTo('index.html'));