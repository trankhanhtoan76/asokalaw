<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();

$extFunction = new TwigFunction("ffield_time", function ($name, $val = "", $required = "") {
    if ($val == 'now') $d = date('H:i');
    elseif ($val != "") {
        $d = date('H:i', strtotime('2020-02-20 '.$val));
    } else {
        $d = '';
    }
    $html = '<div class="input-group">
                                <input id="{$name}" data-field-type="datetime" data-type="field" data-required="' . $required . '" type="text" class="form-control timepicker" value="' . $d . '" name="' . $name . '" />
                                <div class="input-group-append">
                                  <span class="input-group-text"><i class="far fa-clock-o"></i></span>
                                </div>
                              </div>';
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_time", function ($name, $val = "") {
    if ($val != '') {
        $userTimezone = new DateTimeZone($GLOBALS['app']['config']['timezone']);
        $gmtTimezone = new DateTimeZone('GMT');
        $myDateTime = new DateTime($val, $gmtTimezone);
        $offset = $userTimezone->getOffset($myDateTime);
        $inter = DateInterval::createFromDateString((string)$offset . 'seconds');
        $myDateTime->add($inter);
        return $myDateTime->format($GLOBALS['app']['config']['date_format'] . ' ' . $GLOBALS['app']['config']['time_format']);
    }
    $html = "<div data-field-type='datetime' data-type='field' data-name='{$name}'>{$val}</div>";
    return $html;
});
$view->addFunction($extFunction);