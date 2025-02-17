$(document).ready(function(){
  $('.releases-slider').slick({
  	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
    arrows: false,
  	responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        swipeToSlide: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        swipeToSlide: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        swipeToSlide: true
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        swipeToSlide: true
      }
    },
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        swipeToSlide: true
      }
    }
  ]
  });
});