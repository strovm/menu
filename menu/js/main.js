function showCategory(category, element) {
    // Actualiza los botones
    const buttons = document.querySelectorAll('.navbar button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Agrega el contorno al botón activo
    element.classList.add('active');

    // Actualiza las imágenes
    const allCards = document.querySelectorAll('.card-wrapper');
    allCards.forEach(card => card.style.display = 'none');

    const selected = document.querySelectorAll('.' + category);
    selected.forEach(card => {
        card.style.display = 'block';
        // Reinicia si la imagen está volteada para que inicie desde la frontal
        card.querySelector('.card').classList.remove('flipped');
    });
}

// Muestra el desayuno al iniciar
window.onload = () => {
    const defaultBtn = document.getElementById('default-btn');
    showCategory('breakfast', defaultBtn);
};