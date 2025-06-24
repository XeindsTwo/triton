import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  targetOffset = targetElement.offsetTop - 30;
  window.scrollTo({top: targetOffset, behavior: 'smooth'});
}

const menuLinks = document.querySelectorAll('.desktop');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', scrollToSection);
});

new Swiper('.partners__swiper', {
  autoHeight: true,
  speed: 500,
  slidesPerView: 5,
  spaceBetween: 25,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  navigation: {
    prevEl: '.reviews__btn--prev',
    nextEl: '.reviews__btn--next'
  },
});