<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("pagination", function () {
    //get current query
    $q = $_GET;
    $sq = array();
    if (!empty($q['page'])) unset($q['page']);
    foreach ($q as $k => $v) $sq[] = "{$k}={$v}";
    $sq = implode('&', $sq);

    $cur_page = !empty($_GET['page']) ? $_GET['page'] : 1;
    $cur_page = (int)$cur_page;
    $total = $GLOBALS['app']['records_total'];
    $per_page = (int)$GLOBALS['app']['settings']['record_per_page'];
    $pages = (int)($total / $per_page);
    if ($total > $per_page * $pages) $pages++;

    $html = "<ul class='pagination pagination-sm m-0 float-right' style='z-index: 0'>";
    if ($cur_page - 1 > 1) $html .= "<li class='page-item' ><a class='page-link' href='{$GLOBALS['app']['config']['base_url']}/admin/{$GLOBALS['app']['router']['module']}?{$sq}' > «</a ></li >";

    for ($i = $cur_page - 1; $i < $cur_page && $i >= 1; $i++) {
        if ($i == 1) $html .= "<li class='page-item' ><a class='page-link' href = '{$GLOBALS['app']['config']['base_url']}/admin/{$GLOBALS['app']['router']['module']}?{$sq}' >{$i}</a ></li >";
        else $html .= "<li class='page-item' ><a class='page-link' href = '{$GLOBALS['app']['config']['base_url']}/admin/{$GLOBALS['app']['router']['module']}?page={$i}&{$sq}' >{$i}</a ></li >";
    }

    $html .= "<li class='page-item active' ><a class='page-link' href = '#' >{$cur_page}</a ></li >";

    for ($i = $cur_page + 1; $i <= $pages; $i++) {
        $html .= "<li class='page-item' ><a class='page-link' href = '{$GLOBALS['app']['config']['base_url']}/admin/{$GLOBALS['app']['router']['module']}?page={$i}&{$sq}' >{$i}</a ></li >";
    }

    if ($cur_page + 1 < $pages) $html .= "<li class='page-item' ><a class='page-link' href = '{$GLOBALS['app']['config']['base_url']}/admin/{$GLOBALS['app']['router']['module']}?page={$pages}&{$sq}' > »</a ></li >";
    $html .= "</ul>";

    return $html;
});
$view->addFunction($extFunction);