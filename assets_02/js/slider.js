document.addEventListener('DOMContentLoaded', function () {

  $('.orphanages-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 700000,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      // centerMode: true,
      prevArrow: false,
      nextArrow: false,
      rows: 0,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerMode: true,
          }
        }
      ]
    });
  })

  $('.adults-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 700000,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      prevArrow: $('.adults .adults-arrow-prev'),
      nextArrow: $('.adults .adults-arrow-next'),
      rows: 0,
    });
  })

  $('.monthly-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 700000,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('.monthly .monthly-arrow-prev'),
      nextArrow: $('.monthly .monthly-arrow-next'),
      rows: 0,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerMode: true,
          }
        }
      ]
    });
  })

  $('.news-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 700000,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      prevArrow: $('.news .news-arrow-prev'),
      nextArrow: $('.news .news-arrow-next'),
      rows: 0,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerMode: true,
          }
        }
      ]
    });
  })

})


if ($('.block-cats').hasClass('block-cats-02')) {
  $('.cats-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 7000,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: false,
      nextArrow: $('.cats-slider__arrow.cats-slider__arrow-next'),
      rows: 0,
      responsive: [
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            nextArrow: false
          }
        }
      ]
    });
  });
}
