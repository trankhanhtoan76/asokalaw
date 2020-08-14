<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_enum", function ($name, $options, $val = "", $required = '') {
    $html = "<select id=\"{$name}\" data-field-type='enum' data-type='field' data-required='{$required}' class='form-control select2' name='{$name}' style='width: 100%'>";
    foreach ($options as $k => $v) {
        if (is_array($val)) $html .= "<option value='{$k}' " . (in_array($k, $val) ? 'selected' : '') . ">$v</option>";
        else $html .= "<option value='{$k}' " . ($k == $val ? 'selected' : '') . ">$v</option>";
    }
    $html .= "</select>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_enum", function ($name, $options, $val) {
    $html = "<div data-field-type='enum' data-type='field' data-name='{$name}'  data-value='{$val}'>{$options[$val]}</div>";
    return $html;
});
$view->addFunction($extFunction);