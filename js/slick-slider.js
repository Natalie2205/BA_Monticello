$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    speed: 1400,
    dots: true,
    arrows: false,
    fade: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          autoplaySpeed: 1000,
        },
      },
    ],
  });
});


$(document).ready(function () {
  $(".slider_2").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    speed: 1400,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          autoplaySpeed: 3000,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 1000,
          arrows: false,
        },
      },
    ],
  });
});


