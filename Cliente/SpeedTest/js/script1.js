//Faltan comillas
'use strict';
//Las comillas que se estaban usando no eran las permitidas. Las constantes tienen que ir en mayusculas
const DATUAKESKATU = "Gehitu zenbaki bat.";
const GALDERA = "Beste zenbaki bat sartu nahi duzu?";
//Faltan los ()
var datuakLortu = function () {
    let datuak = [];
    let dato;
    do {
        dato = prompt(DATUAKESKATU, 0);
        if (dato != '') {
            datuak.push(parseInt(dato))
        } else {
            dato = prompt(DATUAKESKATU, 0)
        }
    } while (confirm(GALDERA))
    return datuak;
//Faltan los ;
};

var datuakKalkulatu = function (array) {
    //Si no las defines como integer luego no puedes usarla como tal.
    let emaitza = 0;
    let kopurua = 0;
    //Al usar use strict hay que definir i. El i&lt sobra y lo cambiamos por un <. A lenght le sobran los ().
    for (let i = 0; i < array.length; i++){
        emaitza = emaitza + array[i];
        kopurua ++;
    };
    emaitza = emaitza / kopurua;
    return emaitza;
};

//Faltan los ()
let datuak = datuakLortu();

alert(datuakKalkulatu(datuak));
