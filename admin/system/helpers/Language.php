<?php

class KTLanguage
{
    public static function getAppLangs()
    {
        global $app;
        $langs = array();
        $langName = $app['config']['language_default'];
        if (empty($_SESSION['lang'])) {
            $_SESSION['lang'] = $app['config']['language_default'];
        } else {
            $langName = $_SESSION['lang'];
        }

        if (file_exists('app/languages/' . $langName . '.php')) {
            include 'app/languages/' . $langName . '.php';
        }

        return $langs;
    }

    public static function getThemeLangs()
    {
        global $app;
        $langs = array();
        $langName = $app['config']['language_default'];
        if (empty($_SESSION['lang'])) {
            $_SESSION['lang'] = $app['config']['language_default'];
        } else {
            $langName = $_SESSION['lang'];
        }

        if (file_exists($app['config']['theme'] . '/languages/' . $langName . '.php')) {
            include $app['config']['theme'] . '/languages/' . $langName . '.php';
        }

        return $langs;
    }

    public static function getLangsByLangName($langName, $site = 'app')
    {
        $langs = array();
        if (file_exists('app/languages/' . $langName . '.php')) {
            include 'app/languages/' . $langName . '.php';
        }

        return $langs;
    }
}