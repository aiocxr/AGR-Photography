const slideData = [
  {
    src: "./images/dafne.JPG",
    alt: "Dafne",
    position: "center",
  },
  {
    src: "./images/chris-front-truck-pose.JPG",
    alt: "Chris",
    position: "bottom",
  },
  {
    src: "./images/gabby-sitting-graduation.JPG",
    alt: "Sydney",
    position: "bottom",
  },
];

const slideshowTemplate = document.querySelector("#slideshow-template");
const slideshowContainer = document.querySelector("#slideshow");

const slides = [];

slideData.forEach((data, index) => {
  const slideshowTemplateClone = slideshowTemplate.content.cloneNode(true);
  const homeSlideshowImg = slideshowTemplateClone.querySelector(".slide");
  homeSlideshowImg.src = data.src;
  homeSlideshowImg.alt = data.alt;
  homeSlideshowImg.dataset.position = data.position;
  if (index === 0) homeSlideshowImg.classList.add("active");
  slideshowContainer.appendChild(slideshowTemplateClone);
  slides.push(homeSlideshowImg);
});

let currentIndex = 0;

setInterval(() => {
  // Remove active from current
  slides[currentIndex].classList.remove("active");

  // Move to next index, wrap around
  currentIndex = (currentIndex + 1) % slides.length;

  // Add active to new current
  slides[currentIndex].classList.add("active");
}, 3000); // Change every 3 seconds

const button = document.querySelector(".submit__btn");

button.addEventListener("click", function (e) {
  e.preventDefault(); // prevent actual form submit for demo

  // Add active and finished classes to trigger animation
  button.classList.add("active");

  // After the fill animation duration, add 'finished'
  setTimeout(() => {
    button.classList.add("finished");
  }, 800); // matches your CSS transition duration on ::before width

  // After 2 seconds total, reset classes to original state
  setTimeout(() => {
    button.classList.remove("active", "finished");
  }, 2000);
});
