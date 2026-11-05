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

let srcText = "sala/foto?.jpg";
let altText = "Foto ?";

let images1 = Array.from({ length: 16 });

images1 = images1.map((item, key) => {
    let index = ++key;
    return {
        src: srcText.replace('?', index),
        alt: altText.replace('?', index)
    }
})

render(images1, 'galeria-sala');

// Galeria de fotos do projeto final

srcText = "projeto/foto?.jpg";
altText = "Foto ?";

let images2 = Array.from({ length: 8 });

images2 = images2.map((item, key) => {
    let index = ++key;
    return {
        src: srcText.replace('?', index),
        alt: altText.replace('?', index)
    }
})

render(images2, 'galeria-projeto');

// Galeria de fotos da certificação

srcText = "certificacao/foto?.jpg";
altText = "Foto ?";

let images3 = Array.from({ length: 8 });

images3 = images3.map((item, key) => {
    let index = ++key;
    return {
        src: srcText.replace('?', index),
        alt: altText.replace('?', index)
    }
})

render(images3, 'galeria-certificacao');