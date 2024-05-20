const slider = document.querySelector('.hero-slider');
const slides = slider.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let slideInterval = null;

// Function to show a specific slide
function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.style.opacity = 0;
  });
  slides[slideIndex].style.opacity = 1;
  currentSlide = slideIndex;
}

// Function to handle automatic slide switching
function autoplay() {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000); // Change the value to adjust transition interval (in milliseconds)
}

// Start the slideshow
showSlide(currentSlide);
autoplay();

// Add event listeners for navigation buttons (optional)
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  clearInterval(slideInterval);
  autoplay();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  clearInterval(slideInterval);
  autoplay();
});



var playButton = document.getElementById("play_button");
// Event listener for the play/pause button

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();
    this.addClass('hide');
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    // playButton.innerHTML = "Play";
    this.addClass('pause');
  }
});