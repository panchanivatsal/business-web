$(document).ready(function () {
  var owl = $('.fruits');
  owl.owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      576: {
        items: 2,
        nav: false
      },
      768: {
        items: 3,
        nav: false
      },
      992: {
        items: 4,
        nav: false
      },
      1200: {
        items: 4,
        nav: false
      },
      1400: {
        items: 5,
        nav: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })
})