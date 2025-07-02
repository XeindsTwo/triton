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

new Swiper('.modal__brand-swiper', {
  speed: 500,
  slidesPerView: 4,
  spaceBetween: 15,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal--brand");
  const modalCloseBtn = document.getElementById("modal-brand-close");
  const partnerCards = document.querySelectorAll(".partners__card");

  partnerCards.forEach(card => {
    card.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.classList.add("modal-active");
      document.documentElement.classList.add("active");
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-active");
    document.documentElement.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("modal-active");
      document.documentElement.classList.remove("active");
    }
  });
});