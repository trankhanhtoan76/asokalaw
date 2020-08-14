<?php

class ApiController extends BaseController
{
    function test()
    {
        return $this->renderJson(array('success'=>1));
    }
}