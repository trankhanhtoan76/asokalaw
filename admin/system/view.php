<?php
global $app;

use Slim\Views\Twig;
use Slim\Views\TwigExtension;

$app['container']['view'] = function ($c) use ($app) {
    $themepath = array('app/views');
    if (!empty($app['config']['theme']) && file_exists($app['config']['theme'] . '/views')) $themepath[] = $app['config']['theme'] . '/views';
    $v = new Twig($themepath, ['cache' => $app['config']['cache']]);
    $v->addExtension(new TwigExtension($c->router, $c->request->getUri()));
    return $v;
};