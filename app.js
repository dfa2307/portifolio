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

// CRIAÇÃO DE UM OBSERVADOR, PARA SABER SE O ELEMNETO ESTA SENDO VISTO NA TELA OU NÃO, CASO ELE ESTEJA SENDO VISTO NA TELA ELE IRÁ ADICIONAR A CLASSE SHOW, QUE FAZ COM QUE O ELEMENTO APAREÇA
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { //FOREACH USADO PARA PEGAR CADA ELEMENTO, JÁ QUE A INSTÂNCIA QUE CRIAMOS NO IntersectionObserver CRIA UM ARRAY COM TODOS OS ELEMENTOS QUE TENHAM AS CLASSES INVISIBLE QUE DECLARAMOS ABAIXO
    if(entry.isIntersecting){
      entry.target.classList.add("showLE")
    }else{
      entry.target.classList.remove("showLE")
    }
  })
})

const elements = document.querySelectorAll(".invisibleLE") //AQUI PEGUEI DO DOM TODOS OS ELEMENTOS COM A CLASSE ".invisibleLE" QUE SÃO TODOS OS ELEMENTOS DO LADO ESQUERDO DA DIV

elements.forEach((element) => { //AQUI COLOQUEI ELE EM UM FOREACH PARA PEGAR CADA UM DOS ELEMENTOS EM PARTICULAR E APLICAR O MÉTODO OBSERVE
  myObserver.observe(element)
})








const myObserverLD = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("showLD")
    }else{
      entry.target.classList.remove("showLD")
    }
  })
})

const elementsLD = document.querySelectorAll(".invisibleLD")

elementsLD.forEach((elementLD) =>{
  myObserverLD.observe(elementLD)
})