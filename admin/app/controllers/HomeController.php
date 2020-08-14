<?php

class HomeController extends BaseController
{
    function dashboard()
    {
        $this->render('home/dashboard');
    }
}