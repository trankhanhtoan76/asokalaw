<?php
global $app;
$app['container']['db'] = function () use ($app) {
    $conn = null;
    if (!empty($app['config']['db']['host'])) {
        $conn = new mysqli($app['config']['db']['host'], $app['config']['db']['user'], $app['config']['db']['pass'], $app['config']['db']['db_name']);
        $conn->set_charset("utf8");
    }
    return $conn;
};