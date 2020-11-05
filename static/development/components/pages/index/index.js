import './index.scss';

$('.slider_comment__block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '100px',
        arrows: true,
        prevArrow: '<div class="left_arrow"></div>',
        nextArrow: '<div class="right_arrow"></div>',
        lazyLoad: "ondemand",
        responsive: [
          {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
              }
          },
          {
              breakpoint: 854,
              settings: {
                slidesToShow: 1,
              }
          },
          {
            breakpoint: 470,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                centerPadding: '0px',
            }
          },
      ]
    });

  $('.left_arrow').click(function () {
    $(".slider_comment__block").slick('slickPrev');
  });
  $('.right_arrow').click(function () {
    $(".slider_comment__block").slick('slickNext');
  });


$('.btn_consultation').on('click', function() {
  $.fancybox.open({
    src: '#form_consultation',
    touch: false
  });
});
 