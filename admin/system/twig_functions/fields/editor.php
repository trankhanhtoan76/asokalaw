<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_editor", function ($name, $val = "", $required = '') {
    $html = "<textarea id=\"{$name}\" data-field-type='editor' data-type='field' class='ckeditor' name='{$name}' date-required='{$required}'>{$val}</textarea>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_editor", function ($name, $val = "") {
    $html = "<textarea id=\"{$name}\" data-field-type='editor' data-type='field' data-name='{$name}' name='{$name}' class='ckeditor' readonly>{$val}</textarea>";
    return $html;
});
$view->addFunction($extFunction);