document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    showClientesSlides(clientesSlideIndex);
});

let slideIndex = 0;
const slides = document.querySelectorAll('.product-carousel .carousel-slide img');
const totalSlides = slides.length;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    slideIndex = (n + totalSlides) % totalSlides;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

let clientesSlideIndex = 0;
const clientesSlides = document.querySelectorAll('.clientes-carousel .carousel-slide img');
const totalClientesSlides = clientesSlides.length;

function plusSlidesClientes(n) {
    showClientesSlides(clientesSlideIndex += n);
}

function showClientesSlides(n) {
    clientesSlideIndex = (n + totalClientesSlides) % totalClientesSlides;

    for (let i = 0; i < totalClientesSlides; i++) {
        clientesSlides[i].style.display = 'none';
    }

    for (let i = 0; i < 3; i++) {
        const index = (clientesSlideIndex + i) % totalClientesSlides;
        clientesSlides[index].style.display = 'block';
    }
}
