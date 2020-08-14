<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_textarea", function ($name, $val = "", $required = '') {
    $html = "<textarea id=\"{$name}\" data-field-type='textarea' data-type='field' class='form-control' rows='3' name='{$name}' date-required='{$required}'>{$val}</textarea>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_textarea", function ($name, $val) {
    $html = "<div data-field-type='textarea' data-type='field' data-name='{$name}'>{$val}</div>";
    return $html;
});
$view->addFunction($extFunction);