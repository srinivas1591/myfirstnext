<?php
	date_default_timezone_set("Asia/Calcutta");   //India time (GMT+5:30)
	session_start();
	if(isset($_SESSION['logtime']))
	{
		$endtime = date('d-m-Y H:i:s');
		setcookie("end",$endtime, time() + (86400 * 30), "/");
		$datetime1 = new DateTime($endtime);
		$datetime2 = new DateTime($_SESSION['logtime']);
		$interval = $datetime1->diff($datetime2);
		$elapsed = $interval->format('%H:%i:%s');
		setcookie("diff",$elapsed, time() + (86400 * 30), "/");
		unset($_SESSION['logtime']);



		if(!isset($_COOKIE['tot']))
			setcookie("tot",$elapsed, time() + (86400 * 30), "/");
		else
		{
			$secs = strtotime($elapsed)-strtotime("00:00:00");
			$till = $_COOKIE['tot'];
			$result = date("H:i:s",strtotime($till)+$secs);
			setcookie("tot",$result, time() + (86400 * 30), "/");
		}
		header('location:index.php');


	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>:: U G L Y ::</title>
	<style type="text/css">
		button
		{
			width: 150px;
			padding: 15px;
			color: white;
			border-radius: 5px;
			outline: none;
			font-weight: bold;
			cursor: pointer;
			margin: 15px;
		}
		#in 
		{
			background-color: seagreen;
		}
		#out
		{
			background-color: brown;
		}
		td
		{
			border: 3px solid black;
			padding: 15px;
		}
		table
		{
			margin-top: 15px;
		}

	</style>
</head>
<body>
	<center>
		<a href="login.php"><button id="in" onclick="loggedIn();">Login</button></a>
		<br>
		<table>
			<tr>
				<td>Last Login Time :</td>
				<td><?php $dis=(isset($_COOKIE["current"]))?$_COOKIE["current"]:'---';echo $dis; ?></td>
			</tr>
			<tr>
				<td>Last Logout Time : </td>
				<td><?php $mis=(isset($_COOKIE["end"]))?$_COOKIE["end"]:'---';echo $mis; ?></td>
			</tr>
			<tr>
				<td>Difference Time:</td>
				<td><?php $lis=(isset($_COOKIE["diff"]))?$_COOKIE["diff"]:'---';echo $lis; ?> secs</td>
			</tr>
			<tr>
				<td>Total Login Time:</td>
				<td><?php $gis=(isset($_COOKIE["tot"]))?$_COOKIE["tot"]:'---';echo $gis; ?> secs</td>
			</tr>
		</table>
	</center>
</body>
</html>