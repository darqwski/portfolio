<?php
    include_once "PHP/Database/PDOController.php";
    include_once "PHP/Utils/DataStream.php";

    $visits = PDOController::getCommand("SELECT * FROM visit_counter")[0]['value'];
    $questionAsked = 0;
    PDOController::putCommand("UPDATE visit_counter SET `value`=`value`+1");
    if(isset($_POST['question'])&&isset($_POST['username'])){
        PDOController::putCommand("
            INSERT INTO `user_questions` (`questionId`, `username`, `question`, `resolved`) 
            VALUES (NULL, :username, :question, '0');", [
                "question" =>$_POST['question'],
                "username" =>$_POST['username'],
            ]);
        $questionAsked=1;
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dariusz Cabała - Portfolio</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="icon" href="/favicon.ico">
</head>
<body>
<div id="react-app"></div>
<template id="data-visits"><?=$visits?></template>
<template id="data-question"><?=$questionAsked?></template>
<script src="build/bundle.js"></script><script src="build/main.bundle.js"></script>
</body>
</html>
