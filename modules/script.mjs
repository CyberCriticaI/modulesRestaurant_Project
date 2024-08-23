let slideIndex = 0;

export function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(updateSlides, 3000);
    }

    updateSlides();
}