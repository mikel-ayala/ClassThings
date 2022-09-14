<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <h1>Kaixo mundua</h1>

    <?php

        class Car {

            public $brand;
            public $model;
            public $price;
            public $image;

            public function __construct(string $brand, string $model, int $price, string $image) {
                $this->brand = $brand;
                $this->model = $model;
                $this->price = $price;
                $this->image = $image;
            }

            function set_brand($brand) {
                $this->brand = $brand;
            }

            function get_brand() {
                return $this->brand;
            }

            function set_model($model) {
                $this->model = $model;
            }

            function get_model() {
                return $this->model;
            }

            function set_price($price) {
                $this->price = $price;
            }

            function get_price() {
                return $this->price;
            }

            function set_image($image) {
                $this->image = $image;
            }

            function get_image() {
                return $this->image;
            }

        };

        $cars = array(new Car('BMW', 'M8', 125, 'https://cdn.motor1.com/images/mgl/y2gxLG/s1/2022-bmw-m8-competition-coupe.webp'), 
            new Car('Mercedes', 'C220', 53, 'https://a.ccdn.es/cnet/contents/media/mercedes__benz/clase_c/1084894.jpg//937x624cut/'), 
            new Car('Audi', 'Q8', 83, 'https://cdn.motor1.com/images/mgl/XL8gv/s3/audi-q8-by-abt.jpg'));

    ?> 

    <section id="carsColumn">

        <?php

            foreach ($cars as $car) { 
                echo '<article class="car">
                    <img src="' . $car->image . '" alt="' . $car->model . '">
                    <h3>' . $car->brand . '</h3>
                    <h5>' . $car->model . '</h5>
                    <b>' . $car->price . 'k</b>
                    <br>
                    </article>';
            };

        ?>

    </section>

    <?php 
    
        $lehenengoa = 10;
        $bigarrena = 2;

        $batuketa = $lehenengoa + $bigarrena;
        $kenketa = $lehenengoa - $bigarrena;
        $biderketa = $lehenengoa * $bigarrena;
        $zatiketa = $lehenengoa / $bigarrena;

        echo 'Batuketa = ' . $batuketa . ', Kenketa = ' .  $kenketa . ', Biderketa = ' . $biderketa . ', Zatiketa = ' . $zatiketa;
            
    ?>
    
</body>
</html>