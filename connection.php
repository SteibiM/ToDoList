<?php
    $localHost="localhost";
    $username="root";
    $password="";
    $connection=mysqli_connect($localHost,$username,$password);
    mysqli_query($connection,"CREATE DATABASE todolist");
    mysqli_select_db($connection,'todolist');
    $sql="SELECT * FROM project";
    $result=mysqli_query($connection,$sql);
    if(empty($result)){
        $sql="CREATE TABLE todolist
        (
            ID int(11) AUTO_INCREMENT,
            Nume_Proiect varchar(25),
            Code int(22),
            PRIMARY KEY  (ID)
        )
        ";
        mysqli_query($connection,$sql);
    }