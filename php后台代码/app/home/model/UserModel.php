<?php 
namespace home\model;

use core\Model;
class UserModel extends Model
{
	function __construct()
	{
		parent::__construct('users');
	}

}