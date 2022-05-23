var swiper = new Swiper(".sectionThree__body", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".sectionThree__body--pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});