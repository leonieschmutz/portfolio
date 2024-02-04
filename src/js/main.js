import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// slider

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
});

// burger menu

var button = document.querySelector(".header-nav-mobile-button");
var menu = document.querySelector(".header-nav-mobile-link");
var body = document.querySelector("body");

var openMenu = function () {
  menu.classList.toggle("is-open");
  body.classList.toggle("is-blocked");
};

button.addEventListener("click", openMenu);

// projet hover image

document.querySelectorAll(".projets-section").forEach((section) => {
  const hoverImageContainer = section.querySelector(".hover-image-container");

  section.addEventListener("mouseenter", () =>
    startImageFollow(section, hoverImageContainer)
  );
  section.addEventListener("mouseleave", () =>
    stopImageFollow(hoverImageContainer)
  );
});

let isFollowing = false;
let currentHoverImageContainer = null;

function startImageFollow(section, hoverImageContainer) {
  if (isFollowing && currentHoverImageContainer !== hoverImageContainer) {
    currentHoverImageContainer.style.opacity = 0;
    currentHoverImageContainer.style.pointerEvents = "none";
  }

  isFollowing = true;
  currentHoverImageContainer = hoverImageContainer;
  hoverImageContainer.style.display = "block";
  hoverImageContainer.style.opacity = 1;
  hoverImageContainer.style.pointerEvents = "auto";

  document.addEventListener("mousemove", (e) =>
    updateHoverImagePosition(e, hoverImageContainer)
  );
}

function stopImageFollow(hoverImageContainer) {
  isFollowing = false;
  hoverImageContainer.style.opacity = 0;
  hoverImageContainer.style.pointerEvents = "none";

  document.removeEventListener("mousemove", updateHoverImagePosition);
}

function updateHoverImagePosition(e, hoverImageContainer) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Utilisation de requestAnimationFrame pour une animation plus fluide
  requestAnimationFrame(() => {
    hoverImageContainer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
}
