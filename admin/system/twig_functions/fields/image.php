<?php

use Twig\TwigFunction;

global $app;
$view = $app['container']->view->getEnvironment();
$extFunction = new TwigFunction("ffield_image", function ($name, $val = "", $required = '') {
    $html = '<div class="input-group">
                                <input id="'.$name.'" data-field-type="image" data-type="field" date-required="'.$required.'" type="text" class="form-control file-value" value="' . $val . '" name="' . $name . '"/>
                                <div class="input-group-append" style="cursor:pointer" onclick="buttonChooseFieldUpload(\'' . $name . '\',\'image\')">
                                    <span class="input-group-text"><i class="far fa-file-upload"></i></span>
                                </div>
                              </div>
                              <div style="margin-top:3px" class="embed-responsive file-preview-' . $name . '">' . ($val ? '<img class="img-thumbnail" src="' . $val . '" style="height: 100px;width: auto;max-width:500px;"/>' : '') . '</div>';
    return $html;
});
$view->addFunction($extFunction);

$extFunction = new TwigFunction("vfield_image", function ($name, $val = "") {
    $html = '<div data-field-type="image" data-type="field" data-name="'.$name.'" style="margin-top:3px" class="embed-responsive file-preview-' . $name . '">' . ($val ? '<img class="img-thumbnail" src="' . $val . '" style="height: 100px;width: auto;max-width:500px;"/>' : '') . '</div>';
    return $html;
});
$view->addFunction($extFunction);