<?php 
	date_default_timezone_set("Asia/Calcutta");   
	session_start();
	if(!isset($_SESSION['logtime']))
	{
		$_SESSION['logtime'] = date('d-m-Y H:i:s');
		setcookie("current",$_SESSION['logtime'], time() + (86400 * 30), "/");
		header('location:login.php');
	}

?>
<<!DOCTYPE html>
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
	    <a href="index.php"><button id="out" onclick="loggedOut();" >Logout</button></a>
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
