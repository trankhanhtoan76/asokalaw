<?php

class AdminController extends BaseController
{
    function repair()
    {
        $html = '<h2>Repair system</h2>';
        if (empty($this->db)) return 'Database not config yet!';
        foreach ($this->app['db']['def'] as $tableName => $table) {
            $result = $this->db->get("show tables like '{$tableName}'");
            if (count($result) > 0) {
                $html .= "<br/><b>Check: {$tableName}</b>";
                foreach ($table as $fieldName => $field) {
                    if ($fieldName == 'id') continue;
                    $resultColumn = $this->db->get("show columns from {$tableName} like '{$fieldName}'");
                    $required = (empty($field['required']) ? '' : 'not null');
                    if (count($resultColumn) > 0) {
                        if (!$this->db->query("alter table {$tableName} modify column {$fieldName} {$field['dbType']} {$required}")) {
                            $html .= "<br/><b style='color: red'>ERROR: {$tableName} - {$fieldName}</b>";
                        }
                    } else {
                        $html .= "<br/>Add field: {$fieldName}";
                        if (!$this->db->query("alter table {$tableName} add column {$fieldName} {$field['dbType']} {$required}")) {
                            $html .= "<br/><b style='color: red'>ERROR: {$tableName} - {$fieldName}</b>";
                        }
                    }
                }
            } else {
                $html .= "<br/>Create table: {$tableName}";
                $sql = "create table {$tableName} (";
                foreach ($table as $fieldName => $field) {
                    $required = (empty($field['required']) ? '' : 'not null');
                    $sql .= "{$fieldName} {$field['dbType']} {$required},";
                }
                $sql = rtrim($sql, ',');
                $sql .= ")";
                $this->db->query($sql);
            }
        }

        return $this->renderText($html);
    }

    /**
     * url: base_url/admin/admin/layout/cronjob
     */
    function cronjob()
    {
//        $mail = new KTMailer();
//        $mail->sendEmail('test test email subject','body test test test',array(),array(
//            array(
//                'name'=>'toan tran',
//                'email'=>'toan.tran@dotb.vn'
//            )
//        ));
    }

    function repair_language()
    {
        include 'app/languages/vi.php';
        $langVi = $langs;
        include 'app/languages/en.php';
        $langEn = $langs;

        $langEnr = array_merge($langVi, $langEn);
        ksort($langEnr);
        $langVir = array_merge($langEn, $langVi);
        ksort($langVir);

        $strLangEn = "<?php\n\$langs=" . var_export($langEnr, true) . ';';
        $strLangVi = "<?php\n\$langs=" . var_export($langVir, true) . ';';

        file_put_contents('app/languages/vi.php', $strLangVi);
        file_put_contents('app/languages/en.php', $strLangEn);

        return $this->renderText("<h2>Repair Languages</h2><br/>Done.");
    }

    function createmodule()
    {
        return $this->render('settings/createmodule');
    }

    function save_createmodule()
    {
        $moduleName = strtolower($this->rq->getParam('module_name'));

        $content = preg_replace('/module_name/', $moduleName, file_get_contents('system/templates/db.php'));
        file_put_contents('app/database/' . $moduleName . '.php', $content);

        $content = preg_replace('/module_name/', ucfirst($moduleName), file_get_contents('system/templates/controller.php'));
        file_put_contents('app/controllers/' . ucfirst($moduleName) . 'Controller.php', $content);

        mkdir('app/views/app/' . $moduleName);

        $content = preg_replace('/module_name/', $moduleName, file_get_contents('system/templates/list.twig'));
        file_put_contents('app/views/app/' . $moduleName . '/list.twig', $content);

        $content = preg_replace('/module_name/', $moduleName, file_get_contents('system/templates/create.twig'));
        file_put_contents('app/views/app/' . $moduleName . '/create.twig', $content);

        $content = preg_replace('/module_name/', $moduleName, file_get_contents('system/templates/detail.twig'));
        file_put_contents('app/views/app/' . $moduleName . '/detail.twig', $content);

        $content = preg_replace('/module_name/', $moduleName, file_get_contents('system/templates/edit.twig'));
        file_put_contents('app/views/app/' . $moduleName . '/edit.twig', $content);

        $html = "\n" . '$menu[] = array(
    "module" => "' . $moduleName . '",
    "label" => "LBL_MODULE_' . strtoupper($moduleName) . '"
);';
        file_put_contents('app/menu.php', $html, FILE_APPEND);

        return $this->renderJson(
            array(
                'success' => 1,
                'redirect_to' => $this->app['config']['base_url'] . '/admin/admin/layout/repair'
            )
        );
    }
}