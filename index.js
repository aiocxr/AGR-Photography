const slideData = [
  {
    src: "./images/dafne.JPG",
    alt: "Dafne",
    className: "slide--dafne",
  },
  {
    src: "./images/chris-ashly-truck.JPG",
    alt: "Chris",
    className: "slide--chris",
  },
  {
    src: "./images/gabby-sitting-graduation.JPG",
    alt: "Gabby",
    className: "slide--gabby",
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

  // First slide gets active class
  if (index === 0) {
    homeSlideshowImg.classList.add("slideshow__isactive");
  }

  // ✅ Add custom class if provided
  if (data.className) {
    homeSlideshowImg.classList.add(data.className);
  }

  slideshowContainer.appendChild(slideshowTemplateClone);
  slides.push(homeSlideshowImg);
});

let currentIndex = 0;

setInterval(() => {
  // Remove active from current
  slides[currentIndex].classList.remove("slideshow__isactive");

  // Move to next index, wrap around
  currentIndex = (currentIndex + 1) % slides.length;

  // Add active to new current
  slides[currentIndex].classList.add("slideshow__isactive");
}, 3000); // Change every 3 seconds

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger__isactive");
  navLinks.classList.toggle("nav__links--isactive");
});
