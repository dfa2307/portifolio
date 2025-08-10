const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 50,
  speed: 600,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});