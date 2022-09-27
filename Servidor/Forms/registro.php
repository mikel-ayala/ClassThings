<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <header>
        <h1>AppRegistro</h1>
    </header>
    <section id="body2">
        <article></article>
        <form action="" method="post">
            <section>
                Nombre <br>
                <input type="name" name="nombre" placeholder="Introduce tu nombre">
            </section>
            <section>
                Correo electronico <br>
                <input type="email" name="correo" placeholder="Introduce tu correo electronico">
            </section>
            <section>
                Contraseña <br>
                <input type="password" name="pass" placeholder="Introduce tu contraseña">
            </section>
            <section>
                Selecciona tu género <br>
                <input type="radio" name="genero" value="h">
                Hombre <br>
                <input type="radio" name="genero" value="m">
                Mujer
            </section>
            <section>
                Selecciona tus hobbies <br>
                <input type="checkbox" name="hobbies[]" value="d" placeholder="Deportes">
                <input type="checkbox" name="hobbies[]" value="v" placeholder="Videojuegos"> <br>
                <input type="checkbox" name="hobbies[]" value="m" placeholder="Manualidades">
                <input type="checkbox" name="hobbies[]" value="c" placeholder="Coches">
            </section>
            <section>
                Sube tu foto de perfil
                <input type="file" name="foto">
            </section>
        </form>
        <article></article>
    </section>
</body>
</html>