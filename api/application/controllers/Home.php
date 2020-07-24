<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
  public function index($a, $b)
  {
    echo json_encode(array('success' => 123, $a, $b));
  }
}
