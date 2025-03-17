new Swiper('.slider-customer', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      },
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.slider-button.next',
      prevEl: '.slider-button.prev',
    },
  });
  