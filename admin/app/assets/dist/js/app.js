function convertToURLString(phrase) {
    var maxLength = 100;
    var returnString = phrase.toLowerCase();
    returnString = returnString.replace(/á/g, 'a');
    returnString = returnString.replace(/à/g, 'a');
    returnString = returnString.replace(/ả/g, 'a');
    returnString = returnString.replace(/ã/g, 'a');
    returnString = returnString.replace(/ạ/g, 'a');

    returnString = returnString.replace(/ă/g, 'a');
    returnString = returnString.replace(/ắ/g, 'a');
    returnString = returnString.replace(/ẳ/g, 'a');
    returnString = returnString.replace(/ằ/g, 'a');
    returnString = returnString.replace(/ẵ/g, 'a');
    returnString = returnString.replace(/ặ/g, 'a');

    returnString = returnString.replace(/â/g, 'a');
    returnString = returnString.replace(/ấ/g, 'a');
    returnString = returnString.replace(/ầ/g, 'a');
    returnString = returnString.replace(/ẩ/g, 'a');
    returnString = returnString.replace(/ẫ/g, 'a');
    returnString = returnString.replace(/ậ/g, 'a');

    returnString = returnString.replace(/ú/g, 'u');
    returnString = returnString.replace(/ù/g, 'u');
    returnString = returnString.replace(/ủ/g, 'u');
    returnString = returnString.replace(/ũ/g, 'u');
    returnString = returnString.replace(/ụ/g, 'u');

    returnString = returnString.replace(/ư/g, 'u');
    returnString = returnString.replace(/ứ/g, 'u');
    returnString = returnString.replace(/ừ/g, 'u');
    returnString = returnString.replace(/ử/g, 'u');
    returnString = returnString.replace(/ữ/g, 'u');
    returnString = returnString.replace(/ự/g, 'u');

    returnString = returnString.replace(/é/g, 'e');
    returnString = returnString.replace(/è/g, 'e');
    returnString = returnString.replace(/ẻ/g, 'e');
    returnString = returnString.replace(/ẽ/g, 'e');
    returnString = returnString.replace(/ẹ/g, 'e');

    returnString = returnString.replace(/ê/g, 'e');
    returnString = returnString.replace(/ế/g, 'e');
    returnString = returnString.replace(/ề/g, 'e');
    returnString = returnString.replace(/ể/g, 'e');
    returnString = returnString.replace(/ễ/g, 'e');
    returnString = returnString.replace(/ệ/g, 'e');

    returnString = returnString.replace(/ó/g, 'o');
    returnString = returnString.replace(/ò/g, 'o');
    returnString = returnString.replace(/ỏ/g, 'o');
    returnString = returnString.replace(/õ/g, 'o');
    returnString = returnString.replace(/ọ/g, 'o');

    returnString = returnString.replace(/ô/g, 'o');
    returnString = returnString.replace(/ố/g, 'o');
    returnString = returnString.replace(/ồ/g, 'o');
    returnString = returnString.replace(/ổ/g, 'o');
    returnString = returnString.replace(/ỗ/g, 'o');
    returnString = returnString.replace(/ộ/g, 'o');

    returnString = returnString.replace(/ơ/g, 'o');
    returnString = returnString.replace(/ớ/g, 'o');
    returnString = returnString.replace(/ờ/g, 'o');
    returnString = returnString.replace(/ở/g, 'o');
    returnString = returnString.replace(/ỡ/g, 'o');
    returnString = returnString.replace(/ợ/g, 'o');

    returnString = returnString.replace(/í/g, 'i');
    returnString = returnString.replace(/ì/g, 'i');
    returnString = returnString.replace(/ỉ/g, 'i');
    returnString = returnString.replace(/ĩ/g, 'i');
    returnString = returnString.replace(/ị/g, 'i');

    returnString = returnString.replace(/ö/g, 'o');
    returnString = returnString.replace(/ç/g, 'c');
    returnString = returnString.replace(/ş/g, 's');
    returnString = returnString.replace(/ı/g, 'i');
    returnString = returnString.replace(/ğ/g, 'g');
    returnString = returnString.replace(/ü/g, 'u');
    returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
    returnString = returnString.replace(/[\s-]+/g, " ");
    returnString = returnString.replace(/^\s+|\s+$/g, "");
    if (returnString.length > maxLength) returnString = returnString.substring(0, maxLength);
    returnString = returnString.replace(/\s/g, "-");
    return returnString;
}

$(function () {
    $('.select2').select2({
        theme: 'bootstrap4'
    });
    CKEDITOR.on('instanceReady', function (ev) {
        ev.editor.dataProcessor.htmlFilter.addRules({
            elements: {
                img: function (el) {
                    el.addClass('img-fluid');
                    var style = el.attributes.style;
                    if (style) {
                        var match = /(?:^|\s)width\s*:\s*(\d+)px/i.exec(style);
                        var width = match && match[1];
                        match = /(?:^|\s)height\s*:\s*(\d+)px/i.exec(style);
                        var height = match && match[1];
                        if (width) {
                            el.attributes.style = el.attributes.style.replace(/(?:^|\s)width\s*:\s*(\d+)px;?/i, '');
                            el.attributes.width = width;
                        }
                        if (height) {
                            el.attributes.style = el.attributes.style.replace(/(?:^|\s)height\s*:\s*(\d+)px;?/i, '');
                        }
                    }
                    if (!el.attributes.style) delete el.attributes.style;
                }
            }
        });
    });
    $('.datetimepicker').CalendarPopup({
        locale: app.langs.current,
        dayOfWeekStart: 1,
        format: app.config.date_format_js + ' HH:mm',
        wrapSourceInput: false,
        mousewheel: false,
        allowNotFillTime: false,
        validateOnBlur: false
    });
    $('.datepicker').CalendarPopup({
        locale: app.langs.current,
        dayOfWeekStart: 1,
        format: app.config.date_format_js,
        wrapSourceInput: false,
        mousewheel: false,
        validateOnBlur: false,
        timepicker: false
    });
    $('.timepicker').CalendarPopup({
        locale: app.langs.current,
        format: 'HH:mm',
        wrapSourceInput: false,
        mousewheel: false,
        validateOnBlur: false,
        datepicker: false
    });
    $('[data-toggle="tooltip"]').tooltip();

    //select all checkbox listview
    $('#select-all-record-list-view').on('change', function () {
        if ($(this).is(':checked')) $('.record-checkbox').prop('checked', true);
        else $('.record-checkbox').prop('checked', false);
    });
    $('.record-checkbox').on('change', function () {
        if ($('.record-checkbox').length === $('.record-checkbox:checked').length) $('#select-all-record-list-view').prop('checked', true);
        else $('#select-all-record-list-view').prop('checked', false);
    });

    $('[data-widget="pushmenu"]').on('click', function () {
        if ($('body').hasClass('sidebar-collapse')) {

            $('.content-wrapper > .content-header').css('left', '250px');
        } else {
            $('.content-wrapper > .content-header').css('left', '4.6rem');
        }
    });

    //init field relate
    $('.select2-field-relate').each(function () {
        var module = $(this).attr('data=module');
        $(this).select2({
            theme: 'bootstrap4',
            placeholder: 'Select one...',
            allowClear: true,
            ajax: {
                url: app.config.base_url + '/admin/' + $(this).attr('data-module') + '/layout/list_field_relate',
                data: function (params) {
                    return {
                        query: params.term,
                        page: params.page || 1
                    };
                }
            }
        });
    });
});

function clear_filter() {
    $('[data-action="filter-search"]').val('');
    $('.filter-search-button').click();
}

function deleteRecords(module) {
    var spinner = new JSSpinner();
    spinner.show('Loading');
    var data = {};
    $('.record-checkbox').each(function () {
        var $this = $(this);
        if ($this.is(':checked')) {
            var id = $this.attr('id');
            data[id] = id;
        }
    });
    $.ajax({
        url: app.config.base_url + '/admin/' + module + '/layout/delete',
        data: {records: data},
        type: 'post',
        dataType: 'json',
        success: function (res) {
            if (res.success) {
                toastr.success('Success!');
                window.location.reload();
            } else {
                toastr.error('Error!');
            }
            spinner.hide();
        }
    });
}

function deleteRecord(module, id) {
    var spinner = new JSSpinner();
    spinner.show('Loading');
    var data = {};
    data[id] = id;
    $.ajax({
        url: app.config.base_url + '/admin/' + module + '/layout/delete',
        data: {records: data},
        type: 'post',
        dataType: 'json',
        success: function (res) {
            if (res.success) {
                toastr.success('Success!');
                window.location.href = app.config.base_url + '/admin/' + module;
            } else {
                toastr.error('Error!');
            }
            spinner.hide();
        }
    });
}

function buttonChooseFieldUpload(fieldName, type = '') {
    if (type === 'image') {
        CKFinder.popup({
            resourceType: 'Images',
            language: app.langs.current,
            selectActionFunction: function (fileUrl, data, allFiles) {
                $('input[name="' + fieldName + '"]').val(fileUrl);
                var html = '<img class="img-responsive img-thumbnail" src="' + fileUrl + '" style="height: 100px;width: auto;max-width: 500px"/>';
                $('.file-preview-' + fieldName).html(html);
            }
        });
    } else if (type === 'file') {
        CKFinder.popup({
            resourceType: 'Files',
            language: app.langs.current,
            selectActionFunction: function (fileUrl, data, allFiles) {
                $('input[name="' + fieldName + '"]').val(fileUrl);
                var html = '<a href="' + fileUrl + '">' + fileUrl.replace(/^.*\/([^\/]+)$/, '$1') + '</a>';
                $('.file-preview-' + fieldName).html(html);
            }
        });
    }
}

function formOnSubmit(url) {
    var fieldRequiredIsInputed = true;
    $('[data-type="field"]').each(function () {
        if ($(this).attr('data-required') === 'required') {
            var fieldType = $(this).attr('data-field-type');
            var tmp_value;
            switch (fieldType) {
                case 'editor':
                    tmp_value = CKEDITOR.instances[fieldName].getData();
                    break;
                case 'text':
                case 'number':
                case 'multienum':
                case 'image':
                case 'password':
                case 'slug':
                case 'datetime':
                case 'date':
                case 'time':
                case 'textarea':
                case 'file':
                case 'relate':
                case 'multirelate':
                    tmp_value = $(this).val();
                    break;
                case 'bool':
                    break;
            }
            if (tmp_value === "" || tmp_value === undefined) {
                fieldRequiredIsInputed = false;
                $(this).addClass('is-invalid').removeClass('is-valid');
            } else {
                $(this).addClass('is-valid').removeClass('is-invalid');
            }
        }
    });

    if (fieldRequiredIsInputed === false) {
        $('.is-invalid[data-type="field"]')[0].focus();
        toastr.error("Input fields that required before submit!");
    } else {
        var spinner = new JSSpinner();
        spinner.show('Saving');
        var data = {};
        $('[data-type="field"]').each(function () {
            var $this = $(this);
            var fieldName = $this.attr('name');
            var fieldType = $this.attr('data-field-type');
            switch (fieldType) {
                case 'editor':
                    data[fieldName] = CKEDITOR.instances[fieldName].getData();
                    break;
                case 'text':
                case 'number':
                case 'multienum':
                case 'image':
                case 'password':
                case 'slug':
                case 'datetime':
                case 'date':
                case 'time':
                case 'textarea':
                case 'file':
                case 'relate':
                case 'multirelate':
                case 'enum':
                    data[fieldName] = $this.val();
                    break;
                case 'bool':
                    data[fieldName] = ($this.is(':checked') ? 1 : 0)
                    break;
            }
        });
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: 'JSON',
            success: function (res) {
                if (res.success) {
                    if (!_.isEmpty(res.redirect_to)) window.location.href = res.redirect_to;
                    toastr.success('Saved');
                } else {
                    toastr.error('Error');
                }
                spinner.hide()
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError);
                spinner.hide();
            }
        })
    }
}