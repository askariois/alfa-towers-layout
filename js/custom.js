$(".ban__sl").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
});
