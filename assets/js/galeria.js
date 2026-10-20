const render = (images, id_element) => {
    const html = images.map(img => {
        return `
            <div class="item">
                <a href="assets/img/galeria/${img.src}" target="_blank">
                    <img src="assets/img/galeria/${img.src}" alt="${img.alt}">
                </a>
            </div>
        `;
    }).join("");

    const element = document.querySelector(`#${id_element}`);
    element.innerHTML = html;
}

// Galeria de fotos em sala

let images1 = [
    { src: 'sala/foto1.jpg', alt: 'Foto 1' },
    { src: 'sala/foto2.jpg', alt: 'Foto 2' },
    { src: 'sala/foto3.jpg', alt: 'Foto 3' }
];

render(images1, 'galeria-sala');