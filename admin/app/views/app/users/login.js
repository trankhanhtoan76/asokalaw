$(document).ready(function () {
    $('.change-language').on('change', function () {
        $.ajax({
            url: app.config.base_url + '/setLang',
            data: {'lang': $('.change-language').val()},
            dataType: 'JSON',
            method: 'POST',
            success: function (res) {
                if (res.success) location.reload();
                else alert('Error!');
            }
        });
    });
    $('.btn-login').on('click', function () {
        $(this).find('i').removeClass('fa-sign-in-alt').addClass('fa-spin fa-spinner');
        $.ajax({
            url: app.config.base_url + '/admin/users/layout/authenticate',
            data: {
                'username': $('.username').val(),
                'password': $('.password').val()
            },
            dataType: 'JSON',
            method: 'POST',
            success: function (res) {
                $('.btn-login').find('i').removeClass('fa-spin fa-spinner').addClass('fa-sign-in-alt');
                if (res.success) {
                    window.location.href = app.config.base_url + '/admin'
                } else alert('Password or Username incorrect!');
            }
        });
    });
    $('.username,.password').on('keyup', function (e) {
        if (e.keyCode === 13) {
            $('.btn-login').click();
        }
    });
});