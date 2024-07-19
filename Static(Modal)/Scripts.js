document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var modalMainImage = document.getElementById("modalMainImage");
    var modalThumbnails = document.getElementById("modalThumbnails");

    // Seleccionar todos los contenedores de imágenes
    var imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(function (container) {
        var images = container.querySelectorAll('img');
        if (images.length > 0) {
            var firstImage = images[0];
            firstImage.classList.remove('hidden');
            firstImage.classList.add('thumbnail');
            
            firstImage.onclick = function() {
                modal.style.display = "block";           
                document.body.classList.add('modal-open');
                showImagesInModal(container);
                
                // Dar foco a la imagen principal
                modalMainImage.focus();
                
                // Escuchar cuando la imagen principal pierde el foco
                modalMainImage.addEventListener('blur', function onBlur() {
                    // Resetear el scroll
                    modalThumbnails.scrollTop = 0;
                    
                    // Remover el event listener para que solo se ejecute una vez
                    modalMainImage.removeEventListener('blur', onBlur);
                });
            }
        }
    });

    function showImagesInModal(container) {
        // Limpiar el contenido anterior del modal
        modalMainImage.src = "";
        modalThumbnails.innerHTML = "";

        // Obtener todas las imágenes del contenedor
        var images = container.querySelectorAll('img');

        // Mostrar la primera imagen como imagen principal
        if (images.length > 0) {
            modalMainImage.src = images[0].src;
            modalMainImage.alt = images[0].alt;
        }

        // Crear miniaturas para todas las imágenes excepto la primera
        for (var i = 1; i < images.length; i++) {
            var thumbnail = document.createElement('img');
            thumbnail.src = images[i].src;
            thumbnail.alt = images[i].alt;
            thumbnail.classList.add('modal-thumbnail');

            thumbnail.onclick = function() {
                modalMainImage.src = this.src;
                modalMainImage.alt = this.alt;
                document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            }

            modalThumbnails.appendChild(thumbnail);
        }
    }
//    cuando el usuario hace click en cualquier espacio del modal, que se cierre.
     modal.onclick = function () {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }
});




