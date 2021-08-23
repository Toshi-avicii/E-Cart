// ------------------------------------------------------------------- Variables ---------------------------------------------------------------
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mob-menu-container');
const carouselContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const prevSlideBtn = document.getElementById('prev-slide-btn');
const nextSlideBtn = document.getElementById('next-slide-btn');
const testimonialsSlides = document.querySelectorAll('.testimonials-slide');

// -------------------------------------------------------------------- Mobile Menu ----------------------------------------------------------
menuBtn.addEventListener('click', showMenu);
function showMenu() {
    menu.classList.toggle('show-menu');
}

// ------------------------------------------------------------------- Main Carousel ---------------------------------------------------------

let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  if(counter === slides.length) counter = 0;
  carousel();
});


const auto = setInterval(function() {
    counter++;
    if(counter === slides.length) counter = 0;
    carousel();
}, 10000);

prevBtn.addEventListener("click", function () {
  counter--;
  if(counter < 0) counter = slides.length - 1;
  carousel();
});

function carousel() {
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
      slide.style.transition = `all 1s`;
    });
}

// --------------------------------------------------------------- Testimonials Carousel ------------------------------------------------------
let testimonialsCounter = 0;

nextSlideBtn.addEventListener('click', () => {
  testimonialsCounter++;
  if(testimonialsCounter === testimonialsSlides.length) testimonialsCounter = 0;
  testimonialsCarousel();
  console.log(testimonialsCounter);
});

prevSlideBtn.addEventListener('click', () => {
  testimonialsCounter--;
  if(testimonialsCounter < 0) testimonialsCounter = testimonialsSlides.length - 1;
  testimonialsCarousel();
  console.log(testimonialsCounter);
});

function testimonialsCarousel() {
  testimonialsSlides.forEach(slide => {
    slide.style.transform = `translateX(-${testimonialsCounter * 100}%)`;
    slide.style.transition = `all 1s`;
  });
}

const autoTestimonials = setInterval(function() {
  testimonialsCounter++;
  if(testimonialsCounter === testimonialsSlides.length) testimonialsCounter = 0;
  testimonialsCarousel();
}, 10000);