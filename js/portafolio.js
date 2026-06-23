document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    const popupOverlay = document.getElementById('gallery-popup');
    const activeImg = document.getElementById('popup-active-img');
    const closeBtn = document.querySelector('.close-popup-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Variables de control de estado
    let currentCategory = '';
    let currentPhotoIndex = 1; // Controla en cuál de las fotos estamos

    // Mapeo exacto de tus archivos compartidos
    const config = {
        arte: { prefix: "artes", ext: "jpeg" },
        wedding: { prefix: "boda", ext: "jpg" },
        restaurantes: { prefix: "rest", ext: "jpeg" }
    };

    // Función para actualizar la imagen en el visor
    function updatePopupImage() {
        const currentData = config[currentCategory];
        if (currentData) {
            // Construye la ruta exacta, ej: ../assets/boda5.jpg
            activeImg.src = `../assets/${currentData.prefix}${currentPhotoIndex}.${currentData.ext}`;
        }
    }

    // Al hacer clic en una tarjeta, se abre el visor en la foto 1
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.getAttribute('data-gallery');
            currentPhotoIndex = 1; // Se empieza por la primera foto de la categoría
            
            updatePopupImage();
            popupOverlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Detiene scroll de fondo
        });
    });

    // Evento Flecha Derecha (Avanzar)
    nextBtn.addEventListener('click', () => {
        currentPhotoIndex++;
        if (currentPhotoIndex > 10) {
            currentPhotoIndex = 1; // Si pasa de 10, vuelve a la primera
        }
        updatePopupImage();
    });

    // Evento Flecha Izquierda (Retroceder)
    prevBtn.addEventListener('click', () => {
        currentPhotoIndex--;
        if (currentPhotoIndex < 1) {
            currentPhotoIndex = 10; // Si baja de 1, salta a la última 
        }
        updatePopupImage();
    });

    // Cerrar el popup
    function closePopup() {
        popupOverlay.classList.remove('show');
        document.body.style.overflow = '';
        activeImg.src = ''; // Limpia la ruta
    }

    closeBtn.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) closePopup();
    });
});