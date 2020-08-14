<?php
global $app;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$app['app']->any('/admin[/{module}[/{id}[/{action}]]]', function (ServerRequestInterface $rq, ResponseInterface $rs, array $ag) {
    $GLOBALS['app']['router'] = array();
    $GLOBALS['app']['router']['ResponseInterface'] = $rs;
    $GLOBALS['app']['router']['ServerRequestInterface'] = $rq;
    $GLOBALS['app']['router']['request_params'] = $ag;
    if (empty($ag['module'])) {
        $GLOBALS['app']['router']['module'] = 'Home';
    } else {
        $GLOBALS['app']['router']['module'] = $ag['module'];
        if (empty($ag['id'])) {
            $GLOBALS['app']['router']['action'] = 'list';
        } else {
            $GLOBALS['app']['router']['id'] = $ag['id'];
            if (empty($ag['action'])) {
                $GLOBALS['app']['router']['action'] = 'detail';
            } else {
                $GLOBALS['app']['router']['action'] = $ag['action'];
            }
        }
    }
    $module = ucfirst($GLOBALS['app']['router']['module']);
    $action = strtolower($GLOBALS['app']['router']['action']);
    if ($module == 'Home') $action = $GLOBALS['app']['router']['action'] = 'dashboard';
    $beanName = $module . 'Controller';
    $bean = new $beanName($rs, $rq);
    return $bean->$action();
});
$app['app']->get('/setLangs/{lang}', function (ServerRequestInterface $rq, ResponseInterface $rs, array $ag) {
    $_SESSION['lang'] = $ag['lang'];
    return $rs->withRedirect($rq->getParam('redirect_to'));
});
$app['app']->post('/setLang', function (ServerRequestInterface $rq, ResponseInterface $rs, array $ag) {
    $_SESSION['lang'] = $rq->getParam('lang');
    return $rs->withJson(array('success' => 1));
});
$app['app']->any('/[{url1}[/{url2}[/{url3}[/{url4}[/{url5}[/{url6}[/{url7}[/{url8}[/{url9}[/{url10}]]]]]]]]]]', function (ServerRequestInterface $rq, ResponseInterface $rs, array $ag) {
    /**
     * redirect to admin if did not config front-end yet
     */
    if (empty($GLOBALS['app']['config']['theme'])) return $rs->withRedirect($GLOBALS['app']['config']['base_url'] . '/admin');

    /**
     * handle front-end routing
     */
    $GLOBALS['app']['router'] = array();
    $GLOBALS['app']['router']['ResponseInterface'] = $rs;
    $GLOBALS['app']['router']['ServerRequestInterface'] = $rq;
    $GLOBALS['app']['router']['request_params'] = $ag;
    $url = implode('/', $ag);
    $db = new KTDB($GLOBALS['app']['container']->db);
    $routings = $db->gets("select name,target from routing");
    foreach ($routings as $routing) {
        if (preg_match($routing['name'], $url)) {
            $target = explode(':', $routing['target']);
            $beanName = $target[0] . 'FEController';
            $action = $target[1];
            $bean = new $beanName($rs, $rq);
            return $bean->$action();
        }
    }

    /**
     * redirect to base url if front-end routing not found in table routing
     */
    return $rs->withRedirect($GLOBALS['app']['config']['base_url']);
});