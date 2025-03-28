new Swiper('.slider-customer', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        768: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        1280: {
          slidesPerView: 3,
          centeredSlides: false,
        }
      },
  
      pagination: {
        el: '.pagination',
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active',
      },
  
    navigation: {
      nextEl: '.slider-button.next',
      prevEl: '.slider-button.prev',
    },
  });