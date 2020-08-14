<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_multienum", function ($name, $options, $val = "", $required = '') {
    $html = "<select id=\"{$name}\" data-field-type='multienum' data-type='field' data-required='{$required}' class='form-control select2' multiple='multiple' name='{$name}' style='width: 100%'>";
    foreach ($options as $k => $v) {
        if (is_array($val)) $html .= "<option value='{$k}' " . (in_array($k, $val) ? 'selected' : '') . ">$v</option>";
        else $html .= "<option value='{$k}' " . ($k == $val ? 'selected' : '') . ">$v</option>";
    }
    $html .= "</select>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_multienum", function ($name, $options, $val = array()) {
    $html = "<ul data-field-type='multienum' data-type='field' data-name='{$name}'>";
    foreach ($val as $k) {
        $html .= "<li  data-value='{$k}'>{$options[$k]}</li>";
    }
    $html .= "</ul>";
    return $html;
});
$view->addFunction($extFunction);