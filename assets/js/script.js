// Array of image URLs for background images
const images = [
    'assets/bg/bg1.jpg',
    'assets/bg/bg2.jpg',
    'assets/bg/bg3.jpg'
];

let currentImageIndex = 0;

// Function to change the background image with fade effect
function changeBackgroundImage() {
    const element = document.querySelector('.linniel_1');
    
    // Apply a fade-out effect before changing the image
    element.style.opacity = 2;
    
    // After fade-out duration, change the background image
    setTimeout(() => {
        element.style.backgroundImage = `url(${images[currentImageIndex]})`;
        
        // Apply fade-in effect
        element.style.opacity = 1;
        
        // Move to the next image, or loop back to the first one
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 3000); // Match the fade-out duration (1 second)
}

// Ensure the page loads with no delay in the first image
window.addEventListener('load', () => {
    // Ensure the first image is shown right away
    document.querySelector('.linniel_1').style.opacity = 1;

    // Start changing the background after page load
    setInterval(changeBackgroundImage, 3000);
});

// Initial background change (this will happen once the page has fully loaded)
changeBackgroundImage();

