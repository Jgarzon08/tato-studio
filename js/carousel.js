document.addEventListener('DOMContentLoaded', () => {
    // Selección de todos los slides individuales
    const slides = document.querySelectorAll('.carousel-slides .slide');
    let currentSlideIndex = 0;
    const slideIntervalTime = 3000; // Tiempo en milisegundos (3 segundos)

    // Función para cambiar de imagen
    function nextSlide() {
        // Quitamos la clase active del CSS al slide que se está mostrando actualmente
        slides[currentSlideIndex].classList.remove('active');

        // Calculamos el índice del siguiente slide de forma cíclica
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // Añadimos la clase active al nuevo slide
        slides[currentSlideIndex].classList.add('active');
    }

    // Iniciamos el temporizador automático si existen slides en la página
    if (slides.length > 0) {
        setInterval(nextSlide, slideIntervalTime);
    }
});
