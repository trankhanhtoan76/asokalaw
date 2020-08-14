$('[data-type="field"][name="icon"]').on('change', function () {
    var $this = $(this);
    $this.parent().next().find('i').attr('class', $this.val());
});

function saveModuleIcon() {
    var spinner = new JSSpinner();
    spinner.show('Saving');
    var data = {};
    $('[data-type="field"][name="icon"]').each(function () {
        var $this = $(this);
        data[$this.closest('tr').attr('data-module-name')] = $this.val();
    });
    $.ajax({
        url: app.config.base_url+'/admin/settings/layout/save_module_icon',
        type: 'POST',
        data: {data:data},
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