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
  $('.list-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<img src="' + '/assets/media/landingpage/news/right.svg" class="nextArrowBtnNews news">',
    prevArrow: '<img src="' + '/assets/media/landingpage/news/left.svg" class="prevArrowBtnNews news">',
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
  $('.list-slide-statical').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<img src="' + '/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnStatical">',
    prevArrow: '<img src="' + '/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnStatical">',
  });
  $('.list-slide-video').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<img src="' + '/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnVideo">',
    prevArrow: '<img src="' + '/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnVideo">',
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
  $('.list-slide-team').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: false,
    prevArrow: false,
    customPaging: function (slider, i) {
      return '<i class="fa fa-circle"></i>';
    },
    focusOnSelect: true,
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

  $('select').change(function () {
    if ($(this).children('option:first-child').is(':selected')) {
      $(this).addClass('placeholder');
    } else {
      $(this).removeClass('placeholder');
    }
  });
  $.each($('select'), function (index, elem) {
    if ($(elem).val() == '') {
      $(elem).addClass('placeholder');
    }
  });

  $('.list-slide-video iframe').each(function () {
    var w = $(this).width();
    $(this).attr('height', parseInt(parseFloat(w) / 1.77, 10));
  });
});
