const PRUEBAS = document.querySelectorAll('.prueba');

let imcForm = document.getElementById('imcForm');
let respuesta1Imc = document.getElementById('cmImc');
let respuesta2Imc = document.getElementById('kgImc');
let resultadoImc = document.getElementById('resultadoImc');

let fcmForm = document.getElementById('fcmForm');
let respuesta1Fcm = document.getElementById('edFcm');
let respuesta2Fcm = document.getElementById('seFcm');
let resultadoFcm = document.getElementById('resultadoFcm');

let catForm = document.getElementById('catForm');
let respuestaCat = document.getElementById('edCat');
let resultadoCat = document.getElementById('resultadoCat');

let horForm = document.getElementById('horForm');
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let tabla;
let hora;

let forms = document.querySelectorAll('.form');
let resultado;
let botones = document.querySelectorAll('.boton');

PRUEBAS.forEach(prueba => {
    prueba.addEventListener('click', function() {

        forms.forEach(form => {
            form.style.display = "none";
        });

        switch (this.id) {
            case 'imc': {
                respuesta1Imc.value = "";
                respuesta2Imc.value = "";
                resultadoImc.innerHTML = "";
                imcForm.style.display = "block";
            } break;
            case 'fcm': {
                respuesta1Fcm.value = "";
                respuesta2Fcm.value = "";
                resultadoFcm.innerHTML = "";
                fcmForm.style.display = "block";
            } break;
            case 'cat': {
                respuestaCat.value = "";
                resultadoCat.innerHTML = "";
                catForm.style.display = "block";
            } break;
            case 'hor': {
                horForm.innerHTML = "";
                horForm.style.display = "block";

                tabla = "<table><tr><th></th>";
                for (let entre = 0; entre <5; entre++) {
                    tabla += "<th>" + DIAS[entre] + "</th>";
                }
                tabla += "</tr>";
                for (hora = 9; hora < 15; ) {
                   tabla += "<tr><td>" + hora + "-" + (hora += 2) + "</td></tr>";
                };
                tabla += "</table>";

                tabla += "<table><tr><th></th>";
                DIAS.forEach(dia => {
                   tabla += "<th>" + dia + "</th>";
                });
                tabla += "</tr>";
                for (hora = 16; hora < 22; ) {
                   tabla += "<tr><td>" + hora + "-" + (hora += 1) + "</td></tr>";
                };
                tabla += "</table>";
                horForm.innerHTML = tabla;
            } break;
        };
        
    });
});

botones.forEach(boton => {
    boton.addEventListener('click', function() {

        switch (this.id) {
            case 'confirmarImc': {
                respuesta1Imc.style.color = "black";
                respuesta2Imc.style.color = "black";
                if ((50 < respuesta1Imc.value && respuesta1Imc.value < 250) && (20 < respuesta2Imc.value && respuesta2Imc.value < 300)) {
                    let altura = respuesta1Imc.value/100;
                    resultado = respuesta2Imc.value / (altura * altura);
                    resultadoImc.innerHTML = "Tu indice de masa corporal es: " + resultado + "<br><br>";
                    if (resultado < 16) {
                        resultadoImc.innerHTML += "<b><16.00: Infrapeso (delgadez severa)<b><br>";
                    } else {
                        resultadoImc.innerHTML += "<16.00: Infrapeso (delgadez severa)<br>";
                    }
                    if (16 < resultado && resultado < 17) {
                        resultadoImc.innerHTML += "<b>16.00 - 16.99: Infrapeso (delgadez moderada)<b><br>";
                    } else {
                        resultadoImc.innerHTML += "16.00 - 16.99: Infrapeso (delgadez moderada)<br>";
                    }
                    if (17 < resultado && resultado < 18.50) {
                        resultadoImc.innerHTML += "<b>17.00 - 18.49: Infrapeso (delgadez aceptable)<b><br>";
                    } else {
                        resultadoImc.innerHTML += "17.00 - 18.49: Infrapeso (delgadez aceptable)<br>";
                    }
                    if (18.5 < resultado && resultado < 25) {
                        resultadoImc.innerHTML += "<b>18.50 - 24.99: Peso normal<b><br>";
                    } else {
                        resultadoImc.innerHTML += "18.50 - 24.99: Peso normal<br>";
                    }
                    if (25 < resultado && resultado < 30) {
                        resultadoImc.innerHTML += "<b>25.00 - 29.99: Sobrepeso<b><br>";
                    } else {
                        resultadoImc.innerHTML += "25.00 - 29.99: Sobrepeso<br>";
                    }
                    if (30 < resultado && resultado < 35) {
                        resultadoImc.innerHTML += "<b>30.00 - 34.99: Obeso (Tipo I)<b><br>";
                    } else {
                        resultadoImc.innerHTML += "30.00 - 34.99: Obeso (Tipo I)<br>";
                    }
                    if (35 < resultado && resultado < 40) {
                        resultadoImc.innerHTML += "<b>35.00 - 40.00: Obeso (Tipo II)<b><br>";
                    } else {
                        resultadoImc.innerHTML += "35.00 - 40.00: Obeso (Tipo II)<br>";
                    }
                    if (40 < resultado && resultado) {
                        resultadoImc.innerHTML += "<b>>40.00: Obeso (Tipo III)<b><br>";
                    } else {
                        resultadoImc.innerHTML += ">40.00: Obeso (Tipo III)<br>";
                    }
                } else {
                    respuesta1Imc.style.color = "red";
                    respuesta2Imc.style.color = "red";
                };
            } break;
            case 'confirmarFcm': {
                respuesta1Fcm.style.color = "black";
                respuesta2Fcm.style.color = "black";
                if (respuesta2Fcm.value == "hombre") {
                    resultado = 220 - respuesta1Fcm.value;
                    resultadoFcm.innerHTML = "Tu frecuencia cardiaca maxima es: " + resultado + "<br><br>Zona de recuperación (60%-70%)<br>Zona aeróbica (70%-80%)<br>Zona anaeróbica (80%-90%)<br>Línea roja (90%-100%)";
                } else if (respuesta2Fcm.value == "mujer") {
                    resultado = 226 - respuesta1Fcm.value;
                    resultadoFcm.innerHTML = "Tu frecuencia cardiaca maxima es: " + resultado + "<br><br>Zona de recuperación (60%-70%)<br>Zona aeróbica (70%-80%)<br>Zona anaeróbica (80%-90%)<br>Línea roja (90%-100%)";
                } else {
                    respuesta1Fcm.style.color = "red";
                    respuesta2Fcm.style.color = "red";
                };
            } break;
            case 'confirmarCat': {
                if (respuestaCat.value <= 1972) {
                    resultadoCat.innerHTML += "<b>Veterano</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Veterano <br>";
                }
                if (1972 < respuestaCat.value && respuestaCat.value <= 2000) {
                    resultadoCat.innerHTML += "<b>Senior</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Senior <br>";
                }
                if (2000 < respuestaCat.value && respuestaCat.value <= 2004) {
                    resultadoCat.innerHTML += "<b>Junior</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Junior <br>";
                }
                if (2004 < respuestaCat.value && respuestaCat.value <= 2007) {
                    resultadoCat.innerHTML += "<b>Cadete</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Cadete <br>";
                }
                if (2007 < respuestaCat.value && respuestaCat.value <= 2009) {
                    resultadoCat.innerHTML += "<b>Infantil</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Infantil <br>";
                }
                if (2009 < respuestaCat.value && respuestaCat.value <= 2011) {
                    resultadoCat.innerHTML += "<b>Alevin</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Alevin <br>";
                }
                if (2011 < respuestaCat.value && respuestaCat.value <= 2013) {
                    resultadoCat.innerHTML += "<b>Benjamin</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Benjamin <br>";
                }
                if (2013 < respuestaCat.value) {
                    resultadoCat.innerHTML += "<b>Prebenjamin</b> <br>";
                } else {
                    resultadoCat.innerHTML += "Prebenjamin <br>";
                }
            } break;
        };
    });
});