// Splide is released under the MIT license. © 2020 Naotoshi Fujita
// https://github.com/Splidejs/splide

new Splide( '.splide', {
    type: "loop",
    speed: 1000,
    autoplay: true,
    interval: 6000,
    width : '100vw',
    height: '100vh',
    arrows: false,
    //pagination: false,
    pauseOnHover: false,
    cover: true,
  } ).mount();