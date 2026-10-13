const btnModo = document.getElementById('btn-modo');
const tituloHeader = document.querySelector('header h2');
const nombresPaletas = document.querySelectorAll('main div p');

const titulosOriginales = Array.from(nombresPaletas).map(p => p.textContent);

btnModo.onclick = () => {
  const activo = document.body.classList.toggle('activo');

  tituloHeader.textContent = activo
    ? 'Modo Edición / Especial'
    : 'Mejores Paletas de Colores para tu sitio web';

  nombresPaletas.forEach((p, i) => {
    p.textContent = activo
      ? `Nueva Paleta ${i + 1}`
      : titulosOriginales[i];
  });
};