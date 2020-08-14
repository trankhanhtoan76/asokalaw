<?php

class SettingsController extends BaseController
{
    function general()
    {
        $this->render('settings/general');
    }

    function module_icon()
    {
        $this->render('settings/module_icon');
    }

    function translate_language()
    {
        $this->app['all_langs_app']['vi'] = KTLanguage::getLangsByLangName('vi');
        foreach ($this->app['all_langs_app']['vi'] as $key => $value) {
            if (is_array($value)) unset($this->app['all_langs_app']['vi'][$key]);
        }
        $this->app['all_langs_app']['en'] = KTLanguage::getLangsByLangName('en');
        foreach ($this->app['all_langs_app']['en'] as $key => $value) {
            if (is_array($value)) unset($this->app['all_langs_app']['en'][$key]);
        }
        $this->render('settings/translate_language');
    }

    function save_translate_language()
    {
        $data = $this->rq->getParam('data');
        include 'app/languages/vi.php';
        $langVi = $langs;
        include 'app/languages/en.php';
        $langEn = $langs;

        $langVir = array_merge($langVi, $data['vi']);
        $langEnr = array_merge($langEn, $data['en']);

        $strLangEn = "<?php\n\$langs=" . trim(print_r($langEnr, true)) . ';';
        $strLangVi = "<?php\n\$langs=" . trim(print_r($langVir, true)) . ';';

        $strLangEn = preg_replace('/Array/', 'array', $strLangEn);
        $strLangEn = preg_replace('/"/', '\\"', $strLangEn);
        $strLangEn = preg_replace('/\[(.+)\] => (.+)/', "'$1' => \"$2\",", $strLangEn);
        $strLangEn = preg_replace('/=> "array",/', "=> array", $strLangEn);
        $strLangEn = preg_replace('/\)[^;]/', "),", $strLangEn);

        $strLangVi = preg_replace('/Array/', 'array', $strLangVi);
        $strLangVi = preg_replace('/"/', '\\"', $strLangVi);
        $strLangVi = preg_replace('/\[(.+)\] => (.+)/', "'$1' => \"$2\",", $strLangVi);
        $strLangVi = preg_replace('/=> "array",/', "=> array", $strLangVi);
        $strLangVi = preg_replace('/\)[^;]/', "),", $strLangVi);

        file_put_contents('app/languages/vi.php',$strLangVi);
        file_put_contents('app/languages/en.php',$strLangEn);

        return $this->renderJson(array('success' => 1));
    }

    function save_module_icon()
    {
        file_put_contents('system/include/module_icon.json', json_encode($this->rq->getParam('data')));
        return $this->renderJson(array('success' => 1));
    }

    function email()
    {
        $this->render('settings/email');
    }

    function save()
    {
        if ($this->app['router']['id'] == 'general') {
            $data = array(
                'name' => $this->rq->getParam('name'),
                'phone' => $this->rq->getParam('phone'),
                'hot_line' => $this->rq->getParam('hot_line'),
                'email' => $this->rq->getParam('email'),
                'head_office' => $this->rq->getParam('head_office'),
                'branch_office' => $this->rq->getParam('branch_office'),
                'logo' => $this->rq->getParam('logo'),
                'favicon' => $this->rq->getParam('favicon'),
                'record_per_page' => $this->rq->getParam('record_per_page'),
            );
            $result = $this->db->update('settings', $data, 1);
            return $this->renderJson(array('success' => $result));
        } elseif ($this->app['router']['id'] == 'email') {
            $kte = new KTEncrypt();
            $data = array(
                'mailer_from' => $this->rq->getParam('mailer_from'),
                'mailer_fromname' => $this->rq->getParam('mailer_fromname'),
                'mailer_host' => $this->rq->getParam('mailer_host'),
                'mailer_port' => $this->rq->getParam('mailer_port'),
                'mailer_replyto' => $this->rq->getParam('mailer_replyto'),
                'mailer_replytoname' => $this->rq->getParam('mailer_replytoname'),
                'mailer_secure' => $this->rq->getParam('mailer_secure'),
                'mailer_user' => $this->rq->getParam('mailer_user'),
                'mailer_pass' => $kte->encode($this->rq->getParam('mailer_pass'), 'tkt'),
            );
            $result = $this->db->update('settings', $data, 1);
            return $this->renderJson(array('success' => $result));
        }
    }
}