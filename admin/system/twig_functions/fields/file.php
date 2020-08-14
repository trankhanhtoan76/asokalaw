<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_file", function ($name, $val = "", $required = '') {
    $html = '<div class="input-group">
                                <input id="' . $name . '" data-field-type="file" data-type="field" date-required="' . $required . '" type="text" class="form-control file-value" value="' . $val . '" name="' . $name . '"/>
                                <div class="input-group-append" style="cursor:pointer" onclick="buttonChooseFieldUpload(\'' . $name . '\',\'file\')">
                                    <span class="input-group-text"><i class="far fa-file-upload"></i></span>
                                </div>
                              </div>
                              <div style="margin-top:3px" class="file-preview-' . $name . '">' . ($val ? '<a href="' . $val . '">' . preg_replace('/^.*\/([^\/]+)$/', '$1', $val) . '</a>' : '') . '</div>';
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_file", function ($name, $val = "") {
    $html = '<div style="margin-top:3px" class="file-preview-' . $name . '" data-field-type="file" data-type=field data-name="' . $name . '">' . ($val ? '<a href="' . $val . '">' . preg_replace('/^.*\/([^\/]+)$/', '$1', $val) . '</a>' : '') . '</div>';
    return $html;
});
$view->addFunction($extFunction);