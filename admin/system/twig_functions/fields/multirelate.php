<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_multirelate", function ($name, $module, $required = '', $val = array(), $displayName = array()) {
    $html = "<select id=\"{$name}\" data-field-type='relate' data-module='{$module}' data-type='field' data-required='{$required}' class='form-control select2-field-relate' multiple='multiple' name='{$name}' style='width: 100%'>";
    foreach ($val as $v) $html .= "<option selected value='{$v}'>{$displayName[$v]['name']}</option>";
    $html .= "</select>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_multirelate", function ($name, $module, $val, $displayName) {
    $html = "<ul data-field-type='multirelate' data-type='field' data-name='{$name}'>";
    foreach ($val as $v) $html .= "<li><a href='{$GLOBALS['app']['config']['base_url']}/admin/{$module}/{$v}'>{$displayName[$v]['name']}</a></li>";
    $html .= "</ul>";
    return $html;
});
$view->addFunction($extFunction);