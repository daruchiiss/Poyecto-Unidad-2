const btntheme = document.querySelector("#btn-theme");
const body = document.body;
btn.Theme.addEventListener("click", () => {
    body.classList.toggle( 'modo_osscuro');
    if(body.classList.contains('modo_oscuro')){
        btntheme.textContent="Modo Claro";
    } else {
        btntheme.textContent="Modo Oscuro";{
        }
    console.log("modo oscuro activado: ", body.classList.contains('modo_oscuro'));


};