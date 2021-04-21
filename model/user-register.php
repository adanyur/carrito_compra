<?php
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once RUTA_CLASS."/class/User-class.php";

$_user = new User();

$firstname = isset($_POST["firstname"]) ?$_POST["firstname"]:'';
$lastname = isset($_POST["lastname"]) ? $_POST["lastname"]:'';
$email = isset($_POST["email"])?$_POST["email"]:'';
$password = isset($_POST["password"])?$_POST["password"]:'';
$comment = isset($_POST["comment"])?$_POST["comment"]:'';
$zip = isset($_POST["zip"])?$_POST["zip"]:'';
$town = isset($_POST["town"])?$_POST["town"]:'';
$cell = isset($_POST["cell"])?$_POST["cell"]:'';


// echo $firstname."<br>";
// echo $lastname."<br>";
// echo $email."<br>";
// echo $password."<br>";
// echo $comment."<br>";
// echo $zip."<br>";
// echo $town."<br>";
// echo $cell."<br>";



print_r($_user->registrar($firstname,$lastname,$email,$password,$comment,$zip,$town,$cell));
// echo $_user->registrar($firstname,$lastname,$email,$password,$comment,$zip,$town,$cell);


?>