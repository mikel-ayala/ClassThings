<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php 
        include("header.html");    
        //1

        $random = rand(1, 100);

        echo 'Tienes más de ' . $random . ' años?';

        //2

        if($random % 2 == 0){
            echo"Es par"; 
        }
        else{
            echo"Es impar";
        };

        //3

        $vocales = array('a', 'e', 'i', 'o', 'u');

        $letra = 'A';

        foreach ($vocales as $vocal => $value) {
            if(str_contains(strtolower($letra), $value)){
                echo 'La letra "' . $letra .  '" es vocal';
                break;
            } else {
                echo 'La letra "' . $letra .  '" no es vocal';
            };
        };

        //4

        if(preg_match("/[A-Z]/", $letra)){
            print "Es mayuscula";
        } else {
            print "Es minuscula";
        };

        //5

        $sueldo = 1000.00;

        if ($sueldo < 1000.00) {
            echo 'Le quitamos el ' . ($sueldo*10)/100 . '%';
        } else if ($sueldo == 1000.00) {
            echo 'Le quitamos el ' . ($sueldo*12)/100 . '%';
        } else if ($sueldo > 1000.00) {
            echo 'Le quitamos el ' . ($sueldo*14)/100 . '%';
        };

        //6

        //9

        $nombre = 'Antonio';
        $apellido1 = 'Ruiz';
        $apellido2 = 'Santos';

        if ($nombre != 'Antonio' || $apellido1 != 'Ruiz' || $apellido2 != 'Santos') {
            echo 'no tiene acceso';
        } else {
            echo 'Bienvenido Antonio';
        };

        //10
        
        $usuario = 'baasaaaaa';

        if (count_chars($usuario) < 8 || count_chars($usuario) > 12 || is_numeric($usuario[0])) {
            echo 'Usuario no valido';
        } else {
            echo 'Usuario valido';
        };

        function media ($n1, $n2) {
            return ($n1 + $n2)/2;
        };

        echo media(2, 4);

        function refer (&$aaa) {
            return $aaa + 1;
        };

        $aaa = 4;

        echo refer($aaa);

        function beza ($precio, $beza = 21) {
            return ($precio * $beza) / 100;
        };

        echo "<br>" . beza(250, 50);


        function estatico (){
            static $n = 0;
            return $n++;
        };
            
        echo "<br>" . estatico();
        echo "<br>" . estatico();
        echo "<br>" . estatico();


        echo "<br>";
        echo "<br>";
        echo "<br>";
        echo "<br>";
        echo "<br>";

        $n = rand(0, 5);
        switch ($n) {
            case '0':
                echo "No hay nada";
                break;
            case '1':
                echo "Bienvenido";
                break;
            case '2':
                echo '<form action="" method="post">
                <input type="number" name="subject" id="subject" value="">
                <button type="submit" name="ok">OK</button>
              </form>';
              if(isset($_POST['ok'])){
                if($n == $_POST['subject'] && $_POST['subject'] != '') {
                    echo "<script>console.log('Muy bien, el numero era $n')</script>";
                } else {
                    echo "<script>console.log('Mal, el numero era $n')</script>";
                }
               
                }
                break;
            case '3':
                echo "$n * 0 = " . $n*0 . ", $n * 1 = " . $n*1 . ", $n * 2 = " . $n*2 . ", $n * 3 = " . $n*3 . ", $n * 4 = " . $n*4 . ", $n * 5 = " . $n*5 . ", $n * 6 = " . $n*6 . ", $n * 7 = " . $n*7 . ", $n * 8 = " . $n*8 . ", $n * 9 = " . $n*9 . ", $n * 10 = " . $n*10;
                break;
            case '4':
                echo "<table>
                <tr>
                  <th><img src='https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png'></th>
                  <th><img src='https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png'></th>
                  <th><img src='https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png'></th>
                  <th><img src='https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png'></th>
                </tr>
              </table>";
                break;
            case '5':
                $v = [];
                $v[1]=90;
                $v[30]=7;
                $v['e']=99;
                $v['kaixo']=43;
                foreach ($v as $va => $value) {
                    echo "$value <br>";
                };
                break;
        };

            


        

        include("footer.html");
    ?>


</body>
</html>