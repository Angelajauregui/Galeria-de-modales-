var modal = document.getElementById('modal-proyecto');

function mostrarProyecto(urlProyecto) {
    document.getElementById('iframe-proyecto').src = urlProyecto;
    document.getElementById('modal-proyecto').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal-proyecto').style.display = 'none';

    // Resetear el scroll del iframe
    if (iframe.contentWindow) {
        iframe.contentWindow.scrollTo(0, 0);
    }
 

}

//cuando el usuario hace click en cualquier espacio del modal, que se cierre.
modal.onclick = function () {
   modal.style.display = "none";
}