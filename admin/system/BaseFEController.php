<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Views\Twig;

/**
 * Class UsersController
 */
class BaseFEController
{
    protected $app;

    /**
     * @var Twig
     */
    protected $view;

    /**
     * @var ResponseInterface
     */
    protected $rs;

    /**
     * @var ServerRequestInterface
     */
    protected $rq;

    /**
     * @var KTDB
     */
    protected $db;

    function __construct($responseInterface, $serverRequestInterface)
    {
        global $app;
        $this->app = $app;
        $this->view = $app['container']->view;
        $this->view->getEnvironment()->addGlobal("app", $app);
        $this->rs = $responseInterface;
        $this->rq = $serverRequestInterface;
        $this->view->getEnvironment()->addGlobal("base_url", $this->app['config']['base_url']);
        if (!empty($app['container']->db)) {
            $this->db = new KTDB($app['container']->db);
            $this->app['settings'] = $this->db->get("select * from settings");
        }

        if (empty($_SESSION['kt_version']) || !file_exists('app/assets/kt/kt_' . $_SESSION['kt_version'] . '.js')) {
            $kte = new KTEncrypt();
            $this->app['version'] = md5($kte->encode(time(), 'tkt'));
            $_SESSION['kt_version'] = $this->app['version'];
        } else {
            $this->app['version'] = $_SESSION['kt_version'];
        }
        $this->deleteFileCacheExpire();

        unset($this->app['config']['db']);
        $this->syncGlobalApp();
    }

    function deleteFileCacheExpire()
    {
        $files = scandir('app/assets/kt');
        foreach ($files as $file) {
            if (is_file('app/assets/kt/' . $file)) {
                if (time() - filectime('app/assets/kt/' . $file) > 300) {
                    unlink('app/assets/kt/' . $file);
                }
            }
        }
    }

    function syncGlobalApp()
    {
        $GLOBALS['app'] = $this->app;
        $this->view->getEnvironment()->addGlobal("app", $this->app);
    }

    function render($template)
    {
        $this->syncGlobalApp();
        file_put_contents('app/assets/kt/kt_' . $this->app['version'] . '.js', 'var app=' . json_encode($GLOBALS['app']) . ';');
        return $this->view->render($this->rs, 'public/' . $template . '.twig');
    }

    function renderJson($data)
    {
        $this->syncGlobalApp();
        return $this->rs->withJson($data);
    }

    function redirect($redirect_to)
    {
        $this->syncGlobalApp();
        return $this->rs->withRedirect($redirect_to);
    }

    function renderText($text)
    {
        $this->app['record']['html_render'] = $text;
        $this->syncGlobalApp();
        file_put_contents('app/assets/kt/kt_' . $this->app['version'] . '.js', 'var app=' . json_encode($GLOBALS['app']) . ';');
        return $this->view->render($this->rs, 'app/home/text_body_only.twig');
    }
}