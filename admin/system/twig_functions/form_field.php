<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("form_field", function ($type, $name, $required = "", $listOption = array(), $val = "", $addNullOption = 0) {
    $html = "";
    switch ($type) {
        case "text":
            $html = "<input type='text' class='form-control' value='{$val}' name='{$name}' {$required}/>";
            break;
        case "slug":
            $html = "<input type='text' onchange='this.value=convertToURLString(this.value)' class='form-control' value='{$val}' name='{$name}' {$required}/>";
            break;
        case "datetime":
            if ($val == 'now') $d = date($GLOBALS['config']['date_format'] . ' H:i');
            elseif ($val != "") {
                $d = date($GLOBALS['config']['date_format'] . ' H:i', strtotime($val));
            } else {
                $d = '';
            }
            $html = '<div class="input-group">
                                <input type="text" class="form-control datetimepicker" value="' . $d . '" name="' . $name . '" ' . $required . '/>
                                <div class="input-group-append">
                                  <span class="input-group-text"><i class="far fa-calendar"></i></span>
                                </div>
                              </div>';
            break;
        case "date":
            if ($val == 'now') $d = date($GLOBALS['config']['date_format']);
            elseif ($val != '') {
                $d = date($GLOBALS['config']['date_format'], strtotime($val));
            } else {
                $d = '';
            }
            $html = '<div class="input-group">
                                <input type="text" class="form-control datepicker" value="' . $d . '" name="' . $name . '" ' . $required . '/>
                                <div class="input-group-append">
                                  <span class="input-group-text"><i class="far fa-calendar"></i></span>
                                </div>
                              </div>';
            break;
        case "time":
            if ($val == 'now') $val = date('H:i');
            $html = '<div class="input-group">
                                <input type="text" class="form-control timepicker" value="' . $val . '" name="' . $name . '" ' . $required . '/>
                                <div class="input-group-append">
                                  <span class="input-group-text"><i class="far fa-calendar"></i></span>
                                </div>
                              </div>';
            break;
        case "editor":
            $html = "<textarea class='ckeditor' name='{$name}' {$required}>{$val}</textarea>";
            break;
        case "textarea":
            $html = "<textarea class='form-control' name='{$name}' {$required}>{$val}</textarea>";
            break;
        case "multienum":
            $html = "<select class='form-control select2' multiple='multiple' name='{$name}[]' style='width: 100%'>";
            if ($addNullOption) $html .= "<option value=''>#</option>";
            if (is_array($listOption)) {
                foreach ($listOption as $k => $v) {
                    if (is_array($val)) $html .= "<option value='{$k}' " . (in_array($k, $val) ? 'selected' : '') . ">$v</option>";
                    else $html .= "<option value='{$k}' " . ($k == $val ? 'selected' : '') . ">$v</option>";
                }
            }
            $html .= "</select>";
            break;
        case "enum":
            $html = "<select class='form-control select2' name='{$name}' style='width: 100%'>";
            if ($addNullOption) $html .= "<option value=''>#</option>";
            if (is_array($listOption)) {
                foreach ($listOption as $k => $v) {
                    $html .= "<option value='{$k}' " . ($k == $val ? 'selected' : '') . ">$v</option>";
                }
            }
            $html .= "</select>";
            break;
        case "image":
            $html = '<div class="input-group">
                                <input type="text" class="form-control file-value" value="' . $val . '" name="' . $name . '" ' . $required . '/>
                                <div class="input-group-append" style="cursor:pointer" onclick="buttonChooseFieldUpload(\'' . $name . '\',\'Images\')">
                                    <span class="input-group-text"><i class="far fa-file-upload"></i></span>
                                </div>
                              </div>
                              <div style="margin-top:3px" class="embed-responsive file-preview-' . $name . '">' . ($val ? '<img class="img-thumbnail" src="' . $val . '" style="height: 100px;width: auto"/>' : '') . '</div>';
            break;
        case "file":
            $html = '<div class="input-group">
                                <input type="text" class="form-control file-value" value="' . $val . '" name="' . $name . '" ' . $required . '/>
                                <div class="input-group-append" style="cursor:pointer" onclick="buttonChooseFieldUpload(\'' . $name . '\',\'Files\')">
                                    <span class="input-group-text"><i class="far fa-file-upload"></i></span>
                                </div>
                              </div>';
            break;
        case "pass":
            $kte = new KTEncrypt();
            $val = $kte->decode($val, 'tkt');
            $html = '<div class="input-group">
                                <input type="password" class="form-control field-pass-value" value="' . $val . '" name="' . $name . '" ' . $required . ' ' . (empty($val) ? '' : 'readonly') . '/>
                                <div class="input-group-append" title="Edit" data-toggle="tooltip" style="cursor:pointer" onclick="$(this).parent().find(\'.field-pass-value\').prop(\'readonly\',false)">
                                    <span class="input-group-text"><i class="far fa-pencil"></i></span>
                                </div>
                              </div>';
            break;
    }
    return $html;
});
$view->addFunction($extFunction);