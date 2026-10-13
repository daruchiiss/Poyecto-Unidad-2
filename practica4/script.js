document.addEventListener('DOMContentLoaded', () => {
    const listaIngredientes = document.querySelectorAll('.div2 ul li');
    const imagenReferencia = document.getElementById('imagen-referencia');

    listaIngredientes.forEach(ingrediente => {
        ingrediente.addEventListener('mouseenter', () => {
            const nuevaImagen = ingrediente.getAttribute('data-img');
            if (nuevaImagen) {
                imagenReferencia.src = nuevaImagen;
                imagenReferencia.alt = ingrediente.textContent;
            }
        });
    });

    const btnModo = document.getElementById('btn-modo');

    btnModo.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

    
        if (document.body.classList.contains('dark-mode')) {
            btnModo.textContent = 'Cambiar a Modo Claro';
        } else {
            btnModo.textContent = 'Cambiar a Modo Oscuro';
        }
    });
});