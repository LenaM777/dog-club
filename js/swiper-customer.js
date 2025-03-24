const swiper = new Swiper('.slider-customer', {
    // Optional parameters
    
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
        el: '.pagination',
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active',
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button.next',
      prevEl: '.slider-button.prev',
    },
  
    
  });