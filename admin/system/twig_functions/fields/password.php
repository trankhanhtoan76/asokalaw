<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_password", function ($name, $val = "", $required = '') {
    $kte = new KTEncrypt();
    $val = $kte->decode($val, 'tkt');
    $readonly = ($val == '' ? '' : 'readonly');
    if ($val == '') {
        $html = "<input id=\"{$name}\" data-field-type='password' data-type='field' type='password' class='form-control ffield_password_value' value='{$val}' name='{$name}'  data-required='{$required}'/>";
    } else {
        $html = "<div class='input-group'>
                    <input id=\"{$name}\" data-field-type='password' data-type='field' type='password' class='form-control ffield_password_value' value='{$val}' name='{$name}'  data-required='{$required}' {$readonly}/>
                    <div class='input-group-append' title='Edit' data-toggle='tooltip' style='cursor:pointer' onclick='$(this).parent().find(\".ffield_password_value\").prop(\"readonly\",false).val(\"\").focus();'>
                        <span class='input-group-text'><i class='far fa-pencil'></i></span>
                    </div>
                  </div>";
    }
    return $html;
});
$view->addFunction($extFunction);