<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("view_field", function ($type, $name, $val, $listOption = array()) {
    $html = "";
    switch ($type) {
        case "text":
        case "time":
            $html = "<div data-field-name='{$name}' data-field-value='{$val}'>{$val}</div>";
            break;
        case "enum":
            $html = "<div data-field-name='{$name}' data-field-value='{$val}'>{$listOption[$val]}</div>";
            break;
        case "multienum":
            $html = "<div data-field-name='{$name}'><ul>";
            foreach ($val as $k) {
                $html .= "<li data-field-value='{$k}'>{$listOption[$k]}</li>";
            }
            $html .= "</ul></div>";
            break;
        case "datetime":
            $d = date($GLOBALS['config']['date_format'] . ' H:i', strtotime($val));
            $html = "<div data-field-name='{$name}' data-field-value='{$val}'>{$d}</div>";
            break;
        case "date":
            $d = date($GLOBALS['config']['date_format'], strtotime($val));
            $html = "<div data-field-name='{$name}' data-field-value='{$val}'>{$d}</div>";
            break;
        case "image":
            $html = "<div data-field-name='{$name}' data-field-value='{$val}'><img class='img-thumbnail' style='width: 100px;height: auto' src='{$val}'/> </div>";
            break;
    }
    return $html;
});
$view->addFunction($extFunction);