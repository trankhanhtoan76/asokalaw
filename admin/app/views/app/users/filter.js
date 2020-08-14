$(document).ready(function () {
    //key enter for search
    $('[data-action="filter-search"]').on('keyup', function (e) {
        if (e.keyCode === 13) {
            users_filter_search();
        }
    });

    //set deafult value for search listview
    var url_string = window.location.href;
    var url = new URL(url_string);
    var query = url.searchParams.get("query");
    if (/^name like "%(.+)%"$/.test(query)) {
        var matchs = query.match(/^name like "%(.+)%"$/);
        $('[data-action="filter-search"]').val(matchs[1]);
    } else {
        var filter_id = url.searchParams.get("filter_id");
        switch (filter_id) {
            case 'is_admin':
                var filter_display = $('[data-type="filter-defined"][data-id="is_admin"]').attr('data-display');
                $('[data-action="filter-search"]').val(filter_display);
                break;
        }
    }
});

function users_filter_is_admin() {
    var search = '?query=is_admin=1&filter_id=is_admin';
    window.location.href = app.config.base_url + '/admin/users' + search;
}

function users_filter_search() {
    var isClicked = false;
    var search = $('[data-action="filter-search"]').val();
    $('[data-type="filter-defined"]').each(function () {
        if (search === $(this).attr('data-display')) {
            $(this).click();
            isClicked = true;
        }
    });
    if (isClicked === false) {
        if (search !== '') search = '?query=name like "%25' + search + '%25"';
        window.location.href = app.config.base_url + '/admin/users' + search;
    }
}