let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener('click',function(){
    menuBtn.classList.remove('active')
    loginForm.classList.remove('active')
    soppingCrd.classList.remove('active')
    searchForm.classList.toggle('active')

})

let soppingCrd = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    menuBtn.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
    soppingCrd.classList.toggle('active')
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    menuBtn.classList.remove('active')
    soppingCrd.classList.remove('active')
    searchForm.classList.remove('active')
    loginForm.classList.toggle('active')
}

let menuBtn = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    soppingCrd.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
    menuBtn.classList.toggle('active')
}

window.onscroll = () => {
    soppingCrd.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
    menuBtn.classList.remove('active')
}


// ------------swiper-js------------

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });







