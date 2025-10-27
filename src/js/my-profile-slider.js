// Members slider for my-profile.html
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the members slider
    initMembersSlider();
});

function initMembersSlider() {
    // Get slider elements
    const slider = document.querySelector('.slider');
    if (!slider) return; // Exit if slider doesn't exist

    const slides = Array.from(slider.children);
    const totalSlides = slides.length;

    // Get navigation elements
    const prevBtn = document.querySelector('.slider-nav button:first-child');
    const nextBtn = document.querySelector('.slider-nav button:last-child');
    const dots = document.querySelectorAll('.slider-dots span');

    // Set initial state
    let currentSlide = 0;
    let slidesToShow = getSlidesToShow();
    let isTransitioning = false;

    // Initialize slider
    setupSlider();
    updateActiveDot(currentSlide);

    // Handle window resize to adjust slides shown
    window.addEventListener('resize', () => {
        slidesToShow = getSlidesToShow();
        setupSlider();
    });

    // Add event listeners to navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNextSlide);
    }

    // Add event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Determine how many slides to show based on screen width
    function getSlidesToShow() {
        // For mobile screens
        if (window.innerWidth < 768) {
            return 1;
        }
        // For tablet screens
        else if (window.innerWidth < 1024) {
            return 2;
        }
        // For desktop screens
        else {
            return 3;
        }
    }

    // Set up initial slider layout
    function setupSlider() {
        // Make first set of slides visible
        slides.forEach((slide, index) => {
            if (index < slidesToShow) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }

            // Apply appropriate width based on slides to show
            slide.style.flex = `0 0 calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 16 / slidesToShow}px)`;
        });
    }

    // Show previous slide
    function showPrevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;

        currentSlide = (currentSlide - 1 + Math.ceil(totalSlides / slidesToShow)) % Math.ceil(totalSlides / slidesToShow);
        updateSlider();
        updateActiveDot(currentSlide);

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    // Show next slide
    function showNextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;

        currentSlide = (currentSlide + 1) % Math.ceil(totalSlides / slidesToShow);
        updateSlider();
        updateActiveDot(currentSlide);

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    // Go to specific slide
    function goToSlide(index) {
        if (isTransitioning || currentSlide === index) return;
        isTransitioning = true;

        currentSlide = index;
        updateSlider();
        updateActiveDot(currentSlide);

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    // Update slider display
    function updateSlider() {
        // Calculate which slides to show
        const startIdx = currentSlide * slidesToShow;
        const endIdx = Math.min(startIdx + slidesToShow, totalSlides);

        // Apply slide transition with fade effect
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
            slide.style.transition = 'opacity 0.3s ease-in-out';

            setTimeout(() => {
                // Hide all slides first
                slide.style.display = 'none';

                // Show only current visible slides
                if (index >= startIdx && index < endIdx) {
                    slide.style.display = 'block';
                    setTimeout(() => {
                        slide.style.opacity = '1';
                    }, 50);
                }
            }, 300);
        });
    }

    // Update the active dot indicator
    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-yellow-main');
            } else {
                dot.classList.remove('active');
                dot.classList.remove('bg-yellow-main');
                dot.classList.add('bg-gray-300');
            }
        });
    }
}
