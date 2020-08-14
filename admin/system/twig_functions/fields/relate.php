<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_relate", function ($name, $module, $val = "", $required = '', $displayName = "") {
    $html = "<select id=\"{$name}\" data-field-type='relate' data-module='{$module}' data-type='field' data-required='{$required}' class='form-control select2-field-relate' name='{$name}' style='width: 100%'>";
    if (!empty($val)) {
        $html .= "<option selected value='{$val}'>{$displayName}</option>";
    }
    $html .= "</select>";
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_relate", function ($name, $module, $val, $displayName) {
    $html = "<div data-field-type='relate' data-type='field' data-name='{$name}'>
                        <a href='{$GLOBALS['app']['config']['base_url']}/admin/{$module}/{$val}'>{$displayName}</a>
                    </div>";
    return $html;
});
$view->addFunction($extFunction);