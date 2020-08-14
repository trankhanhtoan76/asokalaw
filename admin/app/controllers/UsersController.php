<?php

/**
 * Class UsersController
 */
class UsersController extends BaseController
{
    function login()
    {
        $_SESSION['kt_login'] = $this->app['login'] = null;
        return $this->render('users/login');
    }

    function authenticate()
    {
        $kte = new KTEncrypt();

        $data = array(
            'username' => $this->rq->getParam('username'),
            'password' => $this->rq->getParam('password')
        );

        $user = $this->db->get("select * from users where username='{$data['username']}'");

        if (!empty($user['id']) && $data['password'] == $kte->decode($user['password'], 'tkt')) {
            $this->app['login'] = $_SESSION['kt_login'] = $user;
            $nowDb = gmdate("Y-m-d H:i:s");
            $this->db->query("update users set last_login='{$nowDb}' where id='{$user['id']}'");
            return $this->renderJson(array('success' => 1, 'token_expire' => 3600, 'token_time' => time(), 'access_token' => $kte->encode(serialize($user), 'tkt')));
        }
        return $this->renderJson(array('success' => 0));
    }

    function save()
    {
        $kte = new KTEncrypt();
        if ($this->app['router']['id'] == 'layout') {
            $data = array(
                'id' => createID(),
                'name' => $this->rq->getParam('name'),
                'created_at' => gmdate("Y-m-d H:i:s"),
                'created_by' => $this->app['login']['id'],
                'modified_at' => gmdate("Y-m-d H:i:s"),
                'modified_by' => $this->app['login']['id'],
                'username' => $this->rq->getParam('username'),
                'is_admin' => $this->rq->getParam('is_admin'),
                'password' => $kte->encode($this->rq->getParam('password'), 'tkt')
            );
            $result = $this->db->insert('users', $data);
            return $this->renderJson(
                array(
                    'success' => $result,
                    'redirect_to' => $this->app['config']['base_url'] . '/admin/users/' . $data['id']
                )
            );
        } else {
            $data = array(
                'name' => $this->rq->getParam('name'),
                'username' => $this->rq->getParam('username'),
                'is_admin' => $this->rq->getParam('is_admin'),
                'modified_at' => gmdate("Y-m-d H:i:s"),
                'modified_by' => $this->app['login']['id'],
                'password' => $kte->encode($this->rq->getParam('password'), 'tkt')
            );
            $result = $this->db->update('users', $data, $this->app['router']['id']);
            if ($result) {
                if ($this->app['login']['id'] == $this->app['router']['id']) {
                    $user = $this->db->get("select * from users where id='{$this->app['router']['id']}'");
                    $_SESSION['kt_login'] = $user;
                }
            }
            return $this->renderJson(
                array(
                    'success' => $result,
                    'redirect_to' => $this->app['config']['base_url'] . '/admin/users/' . $this->app['router']['id']
                )
            );
        }
    }
}