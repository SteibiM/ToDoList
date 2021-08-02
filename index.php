<?php include_once("connection.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
    <title>Select Project</title>
    <link rel="stylesheet" href="/ToDoList/index.css">
    <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&family=Pacifico&display=swap" rel="stylesheet">

</head>
<body>
    <div class="pachet">
        <div class="pachet_b">
            <h1> - List ToDo Projects - </h1>
        </div>
        <div class="pachet_b">
            <input type="text" onchange="insert(event)" placeholder="Please insert name of the project...">
        </div>
        <div class="pachet_b_c">
            <div class="pachet_b_item"><input type="button"  value="Proiect 1"></div>
            <div class="pachet_b_item"><input type="button"  value="Proiect 2"></div>
            <div class="pachet_b_item"><input type="button"  value="Proiect 3"></div>
            <div class="pachet_b_item"><input type="button"  value="Proiect 4"></div>
            <div class="pachet_b_item"><input type="button"  value="Proiect 5"></div>  
        </div>
    </div>
    <script src="index.js"></script>
  
</body>
</html>