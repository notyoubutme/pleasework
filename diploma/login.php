
<?php 
session_start();

$db = mysqli_connect('localhost','root','','loginsys') or die($db);

if(isset($_POST['login'])){

$user = mysqli_real_escape_string($db,$_POST['user']);
$pass = mysqli_real_escape_string($db,$_POST['pass']);

$errors = array();

if(empty($user)){
			array_push($errors,"username is required");
		}
		if(empty($pass)){
			array_push($errors,"password is required");
		}

		if(count($errors) == 0){
			$_SESSION['username'] = $user;
			$_SESSION['success'] = "Вы вошли";
			header('location: homepage.html');
		}




}

 ?>