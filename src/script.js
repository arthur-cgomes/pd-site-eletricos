let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n >= totalSlides) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - 1; }
    
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[slideIndex].style.display = 'block';
}
