new Swiper('.slider-category', {
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 24,
    breakpoints: {
    768: { slidesPerView: 3 },
    1280: { slidesPerView: 4 }
  },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });