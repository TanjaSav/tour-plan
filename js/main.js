
  var hotelSlider = new Swiper('.hotel-slider', {
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  }
});
  
  var reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

  var menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function(){
      console.log("Button is clicked!");
      document
        .querySelector('.navbar-bottom')
        .classList.toggle('navbar-bottom--visible');
      document
        .querySelector('body')
        .classList.toggle('mobile-open');
});
