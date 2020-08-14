<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_bool", function ($name, $val = "") {
    $checked = '';
    if ($val == 1) $checked = "checked";
    $html = "<input id='{$name}' data-field-type='bool' data-type='field' type='checkbox' {$checked} name='{$name}'  data-required=''/>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_bool", function ($name, $val = "") {
    $checked = '';
    if ($val == 1) $checked = "checked";
    $html = "<input id='{$name}' data-field-type='bool' data-type='field' type='checkbox' {$checked} name='{$name}' />";
    return $html;
});
$view->addFunction($extFunction);