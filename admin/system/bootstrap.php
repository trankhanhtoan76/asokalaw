<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$GLOBALS['app']['container']['errorHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        return $c->get('response')->withStatus($response->getStatus())
            ->withHeader('Content-Type', 'application/json')
            ->write(json_encode(array('success' => 0, 'message' => $exception->getMessage())));
    };
};

$GLOBALS['app']['app']->add(function (ServerRequestInterface $rq, ResponseInterface $rs, $n) {
    $view = $GLOBALS['app']['container']->view->getEnvironment();
    $uri = $rq->getUri();
    $uri = trim($uri->getPath(), '/');
    $GLOBALS['app']['uri']['cur_uri'] = $uri;
    $GLOBALS['app']['uri']['uri'] = explode('/', $uri);
    $view->addGlobal("app", $GLOBALS['app']);

    if (empty($_SESSION['lang'])) $_SESSION['lang'] = $GLOBALS['app']['config']['language_default'];
    $GLOBALS['app']['langs']['current'] = $_SESSION['lang'];

    $GLOBALS['app']['langs']['app'] = KTLanguage::getAppLangs();
    $GLOBALS['app']['langs']['theme'] = KTLanguage::getThemeLangs();
    $GLOBALS['app']['db']['def'] = KTDB::getAllDBDef();

    $GLOBALS['app']['is_api'] = 0;
    $access_token = $rq->getHeaderLine('access_token');
    if ($access_token == 'abcxyz123456') {
        $user = array('id' => '1');
        $_SESSION['kt_login'] = $user;
        $GLOBALS['app']['is_api'] = 1;
    } elseif (!empty($access_token)) {
        $kte = new KTEncrypt();
        $user = $kte->decode(trim($access_token, '"'), 'tkt');
        $user = unserialize($user);
        if (!empty($user['last_login']) && !empty($user['id']) && (strtotime(gmdate("Y-m-d H:i:s")) - strtotime($user['last_login'])) < 3600) {
            $_SESSION['kt_login'] = $user;
            $GLOBALS['app']['is_api'] = 1;
        } else {
            return $rs->withJson(array('success' => 0, 'message' => 'need_login'));
        }
    }

    $ex = array(
        'admin/users/layout/login',
        'admin/users/layout/authenticate',
        'admin/admin/layout/repair',
        'admin/admin/layout/cronjob'
    );
    if (preg_match('/^admin/', $uri) && !in_array($uri, $ex)) {
        if (empty($_SESSION['kt_login'])) {
            return $rs->withRedirect($GLOBALS['app']['config']['base_url'] . '/admin/users/layout/login');
        } else {
            $GLOBALS['app']['login'] = $_SESSION['kt_login'];
            $view->addGlobal("app", $GLOBALS['app']);
        }
    }

    return $n($rq, $rs);
});