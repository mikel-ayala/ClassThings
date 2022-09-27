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
    <h2>EXAMEN</h2>
    <form action="preguntas.php" method="post">
        <p id="nombrePagina"></p>
        <p>Escriba los datos siguientes:</p>
        Nombre:
        <input type="text" name="nombre">
        Apellidos:
        <input type="text" name="apellidos">
        Curso:
        <select name="curso">
            <option value="p">Primero</option>
            <option value="s">Segundo</option>
        </select>
        <button type="submit">Enviar</button>
        <button type="button">Borrar</button>
    </form>
    <section>
        <p>Pagina del examen de acceso.</p>
        <p>Introduce nombres y apellidos alumno.</p>
        <p>Seleccione el curso del que quieras hacer el examen Autor: Mikel Ayala</p>
    </section>
</body>
</html>