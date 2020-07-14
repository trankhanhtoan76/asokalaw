$(document).ready(function () {
    $('#collapsibleNavbar').on('show.bs.collapse', function () {
        $('.background-header').css('background-color', 'rgb(243, 243, 243)');
    })

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
        nextArrow: '<img src="' + '/public/assets/media/landingpage/news/right.svg" class="nextArrowBtnNews news">',
        prevArrow: '<img src="' + '/public/assets/media/landingpage/news/left.svg" class="prevArrowBtnNews news">',
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
        nextArrow: '<img src="'  + '/public/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnStatical">',
        prevArrow: '<img src="'  + '/public/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnStatical">',
    });
    $('.list-slide-video').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<img src="'  + '/public/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnVideo">',
        prevArrow: '<img src="'  + '/public/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnVideo">',
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
        nextArrow: '<img src="'  + '/public/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnPartner">',
        prevArrow: '<img src="'  + '/public/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnPartner">',
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

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            if (st > 200) {
                $('.navbar-custom').addClass('nav-fixed');
                $('.header-search').css('display', 'inline-flex');
                $('.tel').hide();
                $('.background-header').css('background-color', '#f3f3f3')

            }

        } else {
            if (st < 200) {
                $('.navbar-custom').removeClass('nav-fixed', 2000, "swing");
                $('.header-search').hide();
                $('.tel').show();
                $('.background-header').css('background-color', 'transparent')

            }
        }
        lastScrollTop = st;
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


    $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown-menu a', toggleDropdown);
});

function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
        _m = $('.dropdown-menu', _d);
    setTimeout(function () {
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 100 : 0);
}

$(document).ready(function () {
    $('.list-slide-video iframe').each(function () {
        var w = $(this).width();
        $(this).attr('height', parseInt(parseFloat(w) / 1.77, 10));
    });
});

function validateNull(id) {

    if ($("#" + id).val() == null || $("#" + id).val() == "") {
        var div = $("#" + id).closest("div");
        div.removeClass("has-success");
        $("#glypcn" + id).remove();
        div.addClass("has-error has-feedback");
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-remove form-control-feedback">Trường bắt buộc điền!</span>');
        return false;
    } else {
        var div = $("#" + id).closest("div");
        div.removeClass("has-error");
        $("#glypcn" + id).remove();
        div.addClass("has-success has-feedback");
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-ok form-control-feedback">Đã điền.</span>');
        return true;
    }

}

function validateEmail(id) {
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email_regex.test($("#" + id).val())) {
        var div = $("#" + id).closest("div");
        div.removeClass("has-success");
        $("#glypcn" + id).remove();
        div.addClass("has-error has-feedback");
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-remove form-control-feedback">Email không hợp lệ!</span>');
        return false;
    } else {
        var div = $("#" + id).closest("div");
        div.removeClass("has-error");
        $("#glypcn" + id).remove();
        div.addClass("has-success has-feedback");
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-ok form-control-feedback">Email hợp lệ.</span>');
        return true;
    }

}

function validatePhone(id) {
    var email_regex = /^[0-9]{9,10}/i;
    if (!email_regex.test($("#" + id).val())) {
        var div = $("#" + id).closest("div");
        div.removeClass("has-success");
        $("#glypcn" + id).remove();
        div.addClass("has-error has-feedback");
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-remove form-control-feedback">Số điện thoại không hợp lệ!</span>');
        return false;
    } else {
        var div = $("#" + id).closest("div");
        div.removeClass("has-error");
        $("#glypcn" + id).remove();
        div.addClass("has-success has-feedback");
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-ok form-control-feedback">Số điện thoại hợp lệ.</span>');
        return true;
    }

}

function submitHomeAdvice(id) {
    var error = 0;
    id = (id)? id: '#homeAdvice';
    if (!validatePhone('phone')) {
        error++;
    }
    if (!validateEmail('email')) {
        error++;
    }
    if (error > 0) {
        return false;
    } else {debugger;
        var form = $(id)[0]; // You need to use standard javascript object here
        var formData = new FormData(form);
        formData.append('page_referral', window.location.href);

        $.ajax({
            url: app.config.base_url + '/admin/customer/layout/save',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            headers: {
                "Accept": "*",
                "access_token": 'abcxyz123456'
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError);
            },
            success: function (res) {
                console.log(res);
                $(id)[0].reset();
                $('.glyphicon').remove();
                $('.has-feedback').removeClass('has-success');
                $('.has-feedback').removeClass('has-error');
                $('.has-feedback').removeClass('has-feedback');
                $('#alert-success').modal('show');
                $('#modalHomeAdvice').modal('hide');
            }
        });
    }

}

function modalShow(fieldname, value, disabled, checkbox_value, enableField) {
    debugger;
    var valueField = null;
    if ($('[name="' + fieldname + '"]:visible').attr('type') == 'radio') {
        valueField = !(value) ? $('[name="' + fieldname + '"]:visible:checkedbackgrFormound').val() : value;
    }
    else{
        valueField = !(value) ? $('[name="' + fieldname + '"]:visible').val() : value;
    }
    $('#homeAdvice').append('<input type="hidden" name="' + fieldname + '" value="' + valueField + '"/>');
    if (typeof disabled !== 'undefined') {
        $(disabled).hide();
    }
    if (checkbox_value) {
        $('#homeAdvice .problem-checkbox #' + checkbox_value).prop('checked', true);
    }
    if (enableField) {
        var arrayField = enableField.split(',');
        _.each(arrayField, function (value) {
            $('#homeAdvice .' + value).show();
        })
    }
    $('#modalHomeAdvice').modal('toggle');
}

function onClickHeaderBtn() {
    debugger;
    if ($('.btn-banner').length < 1) {
        $('#modalHomeAdvice').modal('toggle');
    } else {
        $('.btn-banner').trigger('click');
    }
}
