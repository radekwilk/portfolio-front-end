const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    loopedSlides: 2,
    speed: 500,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    // Navigation arrows
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
    },
    effect: 'slide',

  });