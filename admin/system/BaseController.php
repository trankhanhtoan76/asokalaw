<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Views\Twig;

/**
 * Class UsersController
 */
class BaseController
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
        include 'app/menu.php';
        global $app;
        $this->app = $app;
        $this->app['menu'] = $menu;
        $this->view = $app['container']->view;
        $this->view->getEnvironment()->addGlobal("app", $app);
        $this->rs = $responseInterface;
        $this->rq = $serverRequestInterface;
        $this->view->getEnvironment()->addGlobal("base_url", $this->app['config']['base_url']);
        if (!empty($app['container']->db)) {
            $this->db = new KTDB($app['container']->db);
            $this->app['settings'] = $this->db->get("select * from settings");
            $this->view->getEnvironment()->addGlobal("settings", $this->app['settings']);
        }

        //get list module of app
        $this->app['list_module'] = array();
        $moduleIcon = json_decode(file_get_contents('system/include/module_icon.json'), true);
        $tmps = scandir('app/controllers');
        foreach ($tmps as $tmp) {
            if (is_file('app/controllers/' . $tmp)) {
                if (preg_match('/^(.+)Controller\.php$/', $tmp, $match)) {
                    $moduleName = strtolower($match[1]);
                    $this->app['list_module'][$moduleName] = array(
                        'name' => $moduleName,
                        'icon' => (!empty($moduleIcon[$moduleName]) ? $moduleIcon[$moduleName] : "fal fa-cube"),
                        'label' => 'LBL_MODULE_' . strtoupper($moduleName)
                    );
                }
            }
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
        return $this->view->render($this->rs, 'app/' . $template . '.twig');
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

    function renderText($text, $body_only = false)
    {
        $this->app['record']['html_render'] = $text;
        $this->syncGlobalApp();
        file_put_contents('app/assets/kt/kt_' . $this->app['version'] . '.js', 'var app=' . json_encode($GLOBALS['app']) . ';');
        if ($body_only) return $this->view->render($this->rs, 'app/home/text_body_only.twig');
        else return $this->view->render($this->rs, 'app/home/text.twig');
    }

    function delete()
    {
        $records = $this->rq->getParam('records');
        foreach ($records as $id) $this->db->delete($this->app['router']['module'], $id);
        return $this->renderJson(array('success' => 1));
    }

    function detail()
    {
        $this->app['record'] = $this->db->get("select * from {$this->app['router']['module']} where id='{$this->app['router']['id']}'");
        $this->prepairForDisplay($this->app['record'], $this->app['db']['def'], $this->app['router']['module']);

        //get all data for each field type rel_table
        foreach ($this->app['db']['def'][$this->app['router']['module']] as $fieldName => $field) {
            if (!empty($field['rel_table']) && !empty($this->app['record'][$fieldName])) {
                $fieldNameDisplay = substr($fieldName, 0, -3);
                if ($field['type'] == 'relate') $this->app['record'][$fieldNameDisplay] = $this->db->get("select * from {$field['rel_table']} where id='{$this->app['record'][$fieldName]}'");
                elseif ($field['type'] == 'multirelate') {
                    $tmp = "'" . implode("','", $this->app['record'][$fieldName]) . "'";
                    $tmp = $this->db->gets("select * from {$field['rel_table']} where id in ({$tmp})");
                    foreach ($tmp as $tmp2) $this->app['record'][$fieldNameDisplay][$tmp2['id']] = $tmp2;
                }
            }
        }

        if ($this->app['is_api']) {
            return $this->renderJson($this->app['record']);
        }
        return $this->render($this->app['router']['module'] . '/detail');
    }

    function edit()
    {
        $this->app['record'] = $this->db->get("select * from {$this->app['router']['module']} where id='{$this->app['router']['id']}'");
        $this->prepairForDisplay($this->app['record'], $this->app['db']['def'], $this->app['router']['module']);

        //get all data for each field type rel_table
        foreach ($this->app['db']['def'][$this->app['router']['module']] as $fieldName => $field) {
            if (!empty($field['rel_table']) && !empty($this->app['record'][$fieldName])) {
                $fieldNameDisplay = substr($fieldName, 0, -3);

                if ($field['type'] == 'relate') $this->app['record'][$fieldNameDisplay] = $this->db->get("select * from {$field['rel_table']} where id='{$this->app['record'][$fieldName]}'");
                elseif ($field['type'] == 'multirelate') {
                    $tmp = "'" . implode("','", $this->app['record'][$fieldName]) . "'";
                    $tmp = $this->db->gets("select * from {$field['rel_table']} where id in ({$tmp})");
                    foreach ($tmp as $tmp2) $this->app['record'][$fieldNameDisplay][$tmp2['id']] = $tmp2;
                }
            }
        }

        return $this->render($this->app['router']['module'] . '/edit');
    }

    function prepairForDB($def)
    {
        $data = array();
        foreach ($def as $fieldName => $fieldData) {
            if ($this->rq->getParam($fieldName) != null) {
                $tmp = $this->rq->getParam($fieldName);
                if (!empty($fieldData['type'])) {
                    if ($fieldData['type'] == 'password') {
                        $kte = new KTEncrypt();
                        $tmp = $kte->encode($tmp, 'tkt');
                    } elseif (in_array($fieldData['type'], array('multienum', 'multirelate'))) {
                        $tmp = serialize($tmp);
                    } elseif ($fieldData['type'] == 'datetime') {
                        $tmp = Timedate::toDbDatetime($tmp);
                    }
                }
                $data[$fieldName] = $tmp;
            }
        }
        return $data;
    }

    function prepairForDisplay(&$data, $dbDef, $module)
    {
        foreach ($data as $field => $value) {
            if (!empty($type = $dbDef[$module][$field]['type'])) {
                $type = $dbDef[$module][$field]['type'];
                if (in_array($type, array('multienum', 'multirelate'))) {
                    $data[$field] = unserialize($value);
                }
            }
        }
    }

    function list()
    {
        $where = '';
        $order_by = '';
        $limit = ' limit ' . $this->app['settings']['record_per_page'];
        if (!empty($page = (int)$this->rq->getParam('page'))) {
            $limit .= ' offset ' . ((int)$page - 1) * (int)$this->app['settings']['record_per_page'];
        } else {
            $page = 1;
        }

        if (empty($this->rq->getParam('full_query'))) {
            if (!empty($query = $this->rq->getParam('query'))) {
                $where .= "where " . $query;
            } else {
                $query = '';
            }

            if (!empty($order_by = $this->rq->getParam('order_by'))) {
                $order_by = "order by " . $order_by;
            } else {
                $order_by = "order by modified_at desc";
            }

            $this->app['records'] = $this->db->gets("select * from {$this->app['router']['module']} {$where} {$order_by} {$limit}");
        } else {
            $sql = $this->rq->getParam('full_query');
            $this->app['records'] = $this->db->gets(trim($sql, '"') . $limit);
        }

        $total = $this->db->get("select count(id) as count from {$this->app['router']['module']} {$where} {$order_by} {$limit}");
        $this->app['records_total'] = (int)$total['count'];

        foreach ($this->app['records'] as $index => $record) {
            $this->prepairForDisplay($this->app['records'][$index], $this->app['db']['def'], $this->app['router']['module']);

            //get all data for each field type rel_table
            foreach ($this->app['db']['def'][$this->app['router']['module']] as $fieldName => $field) {
                if (!empty($field['rel_table']) && !empty($record[$fieldName])) {
                    $fieldNameDisplay = substr($fieldName, 0, -3);
                    if ($field['type'] == 'relate') $this->app['records'][$index][$fieldNameDisplay] = $this->db->get("select * from {$field['rel_table']} where id='{$record[$fieldName]}'");
                    elseif ($field['type'] == 'multirelate') {
                        $tmp = "'" . implode("','", $this->app['records'][$index][$fieldName]) . "'";
                        $tmp = $this->db->gets("select * from {$field['rel_table']} where id in ({$tmp})");
                        foreach ($tmp as $tmp2) $this->app['records'][$index][$fieldNameDisplay][$tmp2['id']] = $tmp2;
                    }
                }
            }
        }

        if ($this->app['is_api']) {
            return $this->renderJson(array(
                'total' => $this->app['records_total'],
                'query' => $query,
                'page' => $page,
                'per_page' => (int)$this->app['settings']['record_per_page'],
                'records_count' => count($this->app['records']),
                'records' => $this->app['records']
            ));
        }
        return $this->render($this->app['router']['module'] . '/list');
    }

    function list_field_relate()
    {
        $result = array();
        $limit = ' limit ' . $this->app['settings']['record_per_page'];
        if (!empty($page = (int)$this->rq->getParam('page'))) {
            $limit .= ' offset ' . ((int)$page - 1) * (int)$this->app['settings']['record_per_page'];
        } else {
            $page = 1;
        }

        if (empty($this->rq->getParam('full_query'))) {
            $where = '';
            if (!empty($query = $this->rq->getParam('query'))) {
                $where .= "where name like '%" . $query . "%'";
            }

            $tmp = $this->db->gets("select id,name from {$this->app['router']['module']} {$where} order by name {$limit}");
        } else {
            $sql = $this->rq->getParam('full_query');
            $tmp = $this->db->gets(trim($sql, '"') . $limit);
        }

        foreach ($tmp as $record)
            $result[] = array(
                'id' => $record['id'],
                'text' => $record['name']
            );

        $total = $this->db->get("select count(id) as count from {$this->app['router']['module']}");
        $more = false;
        if (count($result) + ((int)$page - 1) * (int)$this->app['settings']['record_per_page'] < (int)$total['count']) $more = true;

        return $this->renderJson(array(
            'pagination' => array(
                'more' => $more
            ),
            'results' => $result
        ));
    }

    function create()
    {
        return $this->render($this->app['router']['module'] . '/create');
    }

    function save()
    {
        $data = $this->prepairForDB($this->app['db']['def'][$this->app['router']['module']]);

        if ($this->app['router']['id'] == 'layout') {
            $data['id'] = createID();
            $data['created_at'] = gmdate("Y-m-d H:i:s");
            $data['modified_at'] = gmdate("Y-m-d H:i:s");
            $data['created_by'] = $this->app['login']['id'];
            $data['modified_by'] = $this->app['login']['id'];
            $result = $this->db->insert($this->app['router']['module'], $data);
            $recordId = $data['id'];
        } else {
            unset($data['id']);
            $data['modified_at'] = gmdate("Y-m-d H:i:s");
            $data['modified_by'] = $this->app['login']['id'];
            $result = $this->db->update($this->app['router']['module'], $data, $this->app['router']['id']);
            $recordId = $this->app['router']['id'];
        }

        if ($this->app['is_api']) {
            $data['id'] = $recordId;
            return $this->renderJson(array(
                'success' => $result,
                'data' => $data
            ));
        }
        return $this->renderJson(
            array(
                'success' => $result,
                'redirect_to' => $this->app['config']['base_url'] . '/admin/' . $this->app['router']['module'] . '/' . $recordId
            )
        );
    }
}