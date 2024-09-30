document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var imageContainer = document.getElementById('slide-image');

    // Función para cambiar la imagen en el image-container
    function changeImage(imgSrc) {
        imageContainer.src = imgSrc;
    }

    // Manejar el clic en cada diapositiva
    slides.forEach(function(slide) {
        slide.addEventListener('click', function() {
            var imgContainerSrc = slide.getAttribute('data-img-container');
            changeImage(imgContainerSrc);
        });
    });

    // Manejar el scroll para cambiar la imagen
    var slidesContainer = document.getElementById('slides-container');
    slidesContainer.addEventListener('scroll', function() {
        slides.forEach(function(slide) {
            var slideRect = slide.getBoundingClientRect();
            var containerRect = slidesContainer.getBoundingClientRect();
            if (slideRect.top >= containerRect.top && slideRect.bottom <= containerRect.bottom) {
                var imgContainerSrc = slide.getAttribute('data-img-container');
                changeImage(imgContainerSrc);
            }
        });
    });

    // Establecer la imagen inicial en el image-container
    if (slides.length > 0) {
        changeImage(slides[0].getAttribute('data-img-container'));
    }
});
