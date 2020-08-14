function saveTranslateLanguage() {
    var spinner = new JSSpinner();
    spinner.show('Saving');
    var data = {
        'en': {},
        'vi': {}
    };
    $('[data-type="field"][data-name="key"]').each(function () {
        var $thisTr = $(this).closest('tr');
        data['en'][$thisTr.attr('data-key')] = $thisTr.find('input[name="label_en"]').val();
        data['vi'][$thisTr.attr('data-key')] = $thisTr.find('input[name="label_vi"]').val();
    });
    $.ajax({
        url: app.config.base_url + '/admin/settings/layout/save_translate_language',
        type: 'POST',
        data: {data: data},
        dataType: 'JSON',
        success: function (res) {
            if (res.success) {
                toastr.success('Saved');
                window.location.reload();
            } else {
                toastr.error('Error');
            }
            spinner.hide()
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
            spinner.hide();
        }
    });
}