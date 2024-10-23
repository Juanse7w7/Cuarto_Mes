let currentPhoto = 0;
const photos = document.querySelectorAll('.photo');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const music = document.getElementById('music');
const toggleMusicButton = document.getElementById('toggle-music');
const finalSection = document.getElementById('final-section');

function showPhoto(index) {
    photos.forEach((photo, i) => {
        photo.style.display = i === index ? 'block' : 'none';
    });
    // Si estamos en la última foto, mostramos la carta
    if (index === photos.length - 1) {
        finalSection.style.display = 'block'; // Mostrar la carta
    } else {
        finalSection.style.display = 'none'; // Ocultar la carta
    }
}

function nextPhoto() {
    if (currentPhoto < photos.length - 1) {
        currentPhoto++;
        showPhoto(currentPhoto);
    }
}

function prevPhoto() {
    if (currentPhoto > 0) {
        currentPhoto--;
        showPhoto(currentPhoto);
    }
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        toggleMusicButton.textContent = "Pausar Música";
    } else {
        music.pause();
        toggleMusicButton.textContent = "Reproducir Música";
    }
}

// Inicializar
showPhoto(currentPhoto);
nextButton.addEventListener('click', nextPhoto);
prevButton.addEventListener('click', prevPhoto);
toggleMusicButton.addEventListener('click', toggleMusic);
