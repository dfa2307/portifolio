const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  speed: 600,
  slidesPerView: 1,

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

const btnNav = document.getElementById("btn-nav")
const menuNav = document.getElementById("navResposivo")

btnNav.addEventListener("click", ()=>{
  btnNav.classList.toggle("ativo")
  menuNav.classList.toggle("menuNav")
})