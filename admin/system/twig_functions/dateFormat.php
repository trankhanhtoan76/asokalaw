<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("dateFormat", function ($date, $format = 'Y-m-d H:i', $timezone = 'Asia/Ho_Chi_Minh') {
    if ($date == '') return '';
    $userTimezone = new DateTimeZone($timezone);
    $gmtTimezone = new DateTimeZone('GMT');
    $myDateTime = new DateTime($date, $gmtTimezone);
    $offset = $userTimezone->getOffset($myDateTime);
    $inter = DateInterval::createFromDateString((string)$offset . 'seconds');
    $myDateTime->add($inter);
    return $myDateTime->format($format);
});
$view->addFunction($extFunction);