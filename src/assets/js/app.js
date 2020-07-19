$(document).ready(function () {
  $("#modalHomeAdvice").on('hide.bs.modal', function () {
    $('#homeAdvice .form-group').each(function () {
      if ($(this).attr('hidden_field') === "true") {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
    $(this).find('input[type="hidden"]').remove();
  });
  $('.s6head').click(function (e) {
    e.preventDefault();
    $(this).parents("li").find(".s6body").slideToggle();
  });
  $('.tab-link-custom-mb a').on('click', function () {
    $('.tab-link-custom-mb').removeClass('active');
    $(this).parent().addClass('active');
  })

  $('.list-slide-statical').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<img src="' + '/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnStatical">',
    prevArrow: '<img src="' + '/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnStatical">',
  });

  $('.list-slide-partner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<img src="' + '/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnPartner">',
    prevArrow: '<img src="' + '/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnPartner">',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slide-asoka-des').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: false,
    prevArrow: false,
    focusOnSelect: true,
    customPaging: function (slider, i) {
      return '<i class="fa fa-circle"></i>';
    },
  });

  $('.list-slide-video iframe').each(function () {
    var w = $(this).width();
    $(this).attr('height', parseInt(parseFloat(w) / 1.77, 10));
  });
});
