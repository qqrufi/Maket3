document.addEventListener('DOMContentLoaded', function() {
    var images = [
        'C:/pic/slide1.jpg',
        'C:/pic/slide2.jpg'
    ]; 

    var currentIndex = 0;
    var slideshowImg = document.getElementById('slideshow');

    function slideshow() {
        // Change the opacity of the current image to 0
        slideshowImg.classList.add('hidden');

        // After 0.5 seconds, change the src of the image to the new one and change the opacity to 1
        setTimeout(function() {
            slideshowImg.src = images[currentIndex];
            slideshowImg.classList.remove('hidden');
        }, 500);

        // Increment the index or reset to the beginning of the array if the end is reached
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Run the slideshow function every 4 seconds
    setInterval(slideshow, 4000);
});