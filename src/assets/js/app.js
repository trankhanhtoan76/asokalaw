$(document).ready(function () {
  $('.s6head').click(function (e) {
    e.preventDefault();
    $(this).parents("li").find(".s6body").slideToggle();
  });

  $('.tab-link-custom-mb a').on('click', function () {
    $('.tab-link-custom-mb').removeClass('active');
    $(this).parent().addClass('active');
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
});
