const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const originalContainer = document.getElementById('originalContainer');
const newInterface = document.getElementById('newInterface');
const finalMessage = document.getElementById('finalMessage');

yesButton.addEventListener('click', () => {
    // Ocultar la interfaz original
    originalContainer.style.display = 'none';  // Ocultamos la interfaz original completamente
    
    // Mostrar la nueva interfaz
    newInterface.style.display = 'block'; // Mostramos la interfaz nueva

    // Mostrar el mensaje final
    finalMessage.textContent = "Prometo darte todo de mi, para que nunca te falte nada a ti🥺";
    
    // Añadir corazones flotantes después de presionar "Sí"
    createFloatingHeart();
});

noButton.addEventListener('click', () => {
    // Movimiento aleatorio del botón "No"
    const randomX = Math.floor(Math.random() * 300) - 150; // Mueve entre -150px y +150px en X
    const randomY = Math.floor(Math.random() * 300) - 150; // Mueve entre -150px y +150px en Y
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Función para crear corazones flotantes
function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    
    // Posición aleatoria para el corazón
    const randomX = Math.random() * window.innerWidth;
    heart.style.left = `${randomX}px`;

    // Añadir el corazón al body
    document.body.appendChild(heart);

    // Eliminar el corazón después de que haya terminado la animación
    setTimeout(() => {
        heart.remove();
    }, 2000);
}
