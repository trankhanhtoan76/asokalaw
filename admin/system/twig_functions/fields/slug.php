<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_slug", function ($name, $val = "", $required = '') {
    $html = "<input id=\"{$name}\" data-field-type='slug' data-type='field' type='text' class='form-control' onchange='this.value=convertToURLString(this.value)' value='{$val}' name='{$name}'  data-required='{$required}'/>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_slug", function ($name, $val = "") {
    $html = "<div data-field-type='slug' data-type='field' data-name='{$name}'>{$val}</div>";
    return $html;
});
$view->addFunction($extFunction);