<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("lang", function ($key, $location = 'app') {
    if (isset($GLOBALS['app']['langs'][$location][$key])) return $GLOBALS['app']['langs'][$location][$key];
    return $key;
});
$view->addFunction($extFunction);