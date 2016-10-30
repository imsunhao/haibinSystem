<?php 
namespace home\controller;

use core\Controller;
use home\model\UserModel;

class UserController extends Controller
{
	public function index()
	{
        $model = new UserModel();
        header("Content-type: text/html; charset=utf-8");

	}
}