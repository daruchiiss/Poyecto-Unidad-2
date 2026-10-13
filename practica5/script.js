const btnModo = document.getElementById('btn-modo');

const imagenesHover = {
    '.tarjeta-1 img': { original: 'img/neutra.jpg', hover: 'img/pastel.jpg' },
    '.tarjeta-2 img': { original: 'img/pastel.jpg', hover: 'img/neutra.jpg' },
    '.tarjeta-3 img': { original: 'img/vibrantes.jpg', hover: 'img/monocromatica.jpg' },
    '.tarjeta-4 img': { original: 'img/monocromatica.jpg', hover: 'img/duo.jpg' },
    '.tarjeta-5 img': { original: 'img/duo.jpg', hover: 'img/vibrantes.jpg' }
};

const titulosTexto = [
    { selector: '.tarjeta-1 p', original: 'Paleta Neutra', alt: 'Neutra Alternativa' },
    { selector: '.tarjeta-2 p', original: 'Paleta pastel', alt: 'Pastel Alternativa' },
    { selector: '.tarjeta-3 p', original: 'Paleta vibrante', alt: 'Vibrante Alternativa' },
    { selector: '.tarjeta-4 p', original: 'Paleta monocromatica', alt: 'Monocromática Alt' },
    { selector: '.tarjeta-5 p', original: 'Paleta duocromatica', alt: 'Duocromática Alt' }
];

let activo = false;

btnModo.addEventListener('click', () => {
    document.body.classList.toggle('cambiado');
    activo = !activo;

    titulosTexto.forEach(item => {
        const p = document.querySelector(item.selector);
        if (p) {
            p.textContent = activo ? item.alt : item.original;
        }
    });
});

Object.keys(imagenesHover).forEach(selector => {
    const img = document.querySelector(selector);
    const rutas = imagenesHover[selector];

    if (img) {
        img.addEventListener('mouseenter', () => {
            img.src = rutas.hover;
        });

        img.addEventListener('mouseleave', () => {
            img.src = rutas.original;
        });
    }
});