document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navigation = document.getElementById('main-navigation');

    if (menuBtn && navigation) {
        menuBtn.addEventListener('click', () => {
            // Alterna la animación de la hamburguesa a la X
            menuBtn.classList.toggle('active');
            // Alterna el desplazamiento lateral del menú beige
            navigation.classList.toggle('open');
            
            // Bloquea el scroll del fondo cuando el menú está abierto
            if (navigation.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
});