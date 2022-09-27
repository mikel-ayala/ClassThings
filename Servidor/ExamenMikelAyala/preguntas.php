<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen Mikel Ayala</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
<?php 
    

    if (!empty($_POST['nombre']) && !empty($_POST['apellidos']) && !empty($_POST['curso'])) {
        session_start();
        $_SESSION['nombre'] = $_POST['nombre'];
        $_SESSION['apellidos'] = $_POST['apellidos'];
        $_SESSION['curso'] = $_POST['curso'];
    };

    $preguntas = ['', '']
    
    ?>
    <h2>EXAMEN</h2>
    <?php
        if($_SESSION['nombre'] != null) {
            echo '<p>Preguntas para alumno: ' . $_SESSION['nombre'] . $_SESSION['apellidos'] . '</p>';
        }
    ?>
    <form action="preguntas.php" method="post">
        <p id="nombrePagina"></p>
        <p>Responda a las preguntas siguientes:</p>
        1 - 
        <input type="text" name="p1">
        2 - 
        <input type="text" name="p2">
        3 - 
        <input type="text" name="p3">
        <button type="submit">Responder</button>
        <button type="button">Borrar</button>
    </form>
    <section>
        <p>Es necesario responder a 2 preguntas para pasar el examen.</p>
    </section>
</body>
</html>