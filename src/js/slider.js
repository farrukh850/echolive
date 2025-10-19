// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery slider
    initGallerySlider();
});

function initGallerySlider() {
    const slider = document.getElementById('gallerySlider');
    if (!slider) return; // Exit if slider doesn't exist

    const slides = slider.querySelectorAll('.slider-slide');
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Set initial slider state
    updateSlider();

    // Add event listeners to arrow buttons
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    // Show previous slide
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Show next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}
