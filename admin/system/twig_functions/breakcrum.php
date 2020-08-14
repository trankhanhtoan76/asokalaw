<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("breakcrum", function ($module, $action = '', $name = '') {
    $module = strtolower($module);
    $moduleUPPER = strtoupper($module);
    $moduleDisplayName = empty($GLOBALS['app']['langs']['app']['LBL_MODULE_' . $moduleUPPER]) ? 'LBL_MODULE_' .$moduleUPPER : $GLOBALS['app']['langs']['app']['LBL_MODULE_' . $moduleUPPER];
    if (empty($GLOBALS['app']['list_module'][$module]['icon'])) $icon = 'fal fa-cube';
    else $icon = $GLOBALS['app']['list_module'][$module]['icon'];
    $html = "<i style='font-size:20px' class='{$icon}'></i>
                    <b style='font-size: 20px'>{$moduleDisplayName}</b>";
    if ($name != '' && $action != '') $html .= "<i style='font-size:20px' class='far fa-chevron-right'></i>
                                                                        <b style='font-size: 20px'>{$name}</b>
                                                                        <i style='font-size:20px' class='far fa-chevron-right'></i>
                                                                        <b style='font-size: 20px'>{$action}</b>";
    elseif ($action != '') $html .= "<i style='font-size:20px' class='far fa-chevron-right'></i>
                                                     <b style='font-size: 20px'>{$action}</b>";
    elseif ($name != '') $html .= "<i style='font-size:20px' class='far fa-chevron-right'></i>
                                                     <b style='font-size: 20px'>{$name}</b>";
    return $html;
});
$view->addFunction($extFunction);