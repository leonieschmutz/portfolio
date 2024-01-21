import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

var button = document.querySelector(".header-nav-mobile-button");
var menu = document.querySelector(".header-nav-mobile-link");
var body = document.querySelector("body");
var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
  body.classList.toggle("is-blocked");
};

button.addEventListener("click", openMenu);
