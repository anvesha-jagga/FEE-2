// Navbar toggle
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle active class on navbar
});

// Function to apply parallax effect
function applyParallaxEffect() {
    const scrollPosition = window.scrollY;
    const banners = document.querySelectorAll('.banner');

    banners.forEach((banner) => {
        const bannerOffsetTop = banner.offsetTop; // Banner's top offset from the document
        const bannerHeight = banner.offsetHeight; // Height of the banner
        const bgLayers = banner.querySelectorAll('.bg');

        // Calculate if the banner is in the viewport
        const isVisible = scrollPosition + window.innerHeight > bannerOffsetTop && scrollPosition < bannerOffsetTop + bannerHeight;

        if (isVisible) {
            const bannerOffset = scrollPosition - bannerOffsetTop; // Calculate offset based on scroll position
            const maxOffset = 170; // Maximum offset for the parallax effect

            // Apply parallax effect to background layers
            bgLayers.forEach((bgLayer, index) => {
                const speed = index + 1; // Speed based on layer index
                const offset = (bannerOffset * speed) / 12; // Increased divisor for slower movement
                bgLayer.style.transform = `translateY(-${Math.min(offset, maxOffset)}px)`; // Limit max offset
            });
        }
    });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Optimized scroll event listener
window.addEventListener('scroll', debounce(() => {
    applyParallaxEffect();
}, 8)); // Adjust the delay as needed


