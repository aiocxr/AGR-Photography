const slideData = [
  {
    src: "./images/dafne.JPG",
    alt: "Dafne",
    className: "slide--dafne",
  },
  {
    src: "./images/chris-front-truck-pose.JPG",
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

  // Optional: error handling
  homeSlideshowImg.onerror = () => {
    console.warn(`Failed to load image: ${data.src}`);
    homeSlideshowImg.alt = "Image failed to load";
    homeSlideshowImg.style.opacity = 0.5;
  };

  // First slide gets active class
  if (index === 0) {
    homeSlideshowImg.classList.add("active");
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
  slides[currentIndex].classList.remove("active");

  // Move to next index, wrap around
  currentIndex = (currentIndex + 1) % slides.length;

  // Add active to new current
  slides[currentIndex].classList.add("active");
}, 3000); // Change every 3 seconds
