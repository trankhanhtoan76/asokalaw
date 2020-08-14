<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();

$extFunction = new TwigFunction("ffield_date", function ($name, $val = "", $required = "") {
    if ($val == 'now') $d = date($GLOBALS['config']['date_format']);
    elseif ($val != "") {
        $d = date($GLOBALS['config']['date_format'], strtotime($val));
    } else {
        $d = '';
    }
    $html = '<div class="input-group">
                                <input id="{$name}" data-field-type="datetime" data-type="field" data-required="' . $required . '" type="text" class="form-control datepicker" value="' . $d . '" name="' . $name . '" />
                                <div class="input-group-append">
                                  <span class="input-group-text"><i class="far fa-calendar"></i></span>
                                </div>
                              </div>';
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_date", function ($name, $val = "") {
    if ($val != "") $val = date($GLOBALS['config']['date_format'], strtotime($val));
    $html = "<div data-field-type='date' data-type='field' data-name='{$name}'>{$val}</div>";
    return $html;
});
$view->addFunction($extFunction);