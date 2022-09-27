let eliminarPalabra = function(txt) {
    
    return txt.replace(new RegExp('\\b(no)\\b', 'gi'), ' ')
                  .replace(/\s{2,}/g, ' ');
};

let str = 'La noche se avecina, ahora empieza mi guardia. No terminara hasta el dia de mi muerte. No tomare esposa, no poseere tierras, no engendrare hijos. No llevare corona, no alcanzare la gloria. Vivire y morire en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro. Soy el fuego que arde contra el frio, la luz que trae el amanecer, el cuerno que despierta a los durmientes, el escudo que defiende los reinos de los hombres. Entrego mi vida y mi honor a la Guardia de la Noche,durante esta noche y todas las que esten por venir.';

function contarPalabra(str, value) {
let regExp = new RegExp(value, "gi");
return (str.match(regExp) || []).length;
};

alert(eliminarPalabra(str));

let palabra = '';

do {

    palabra = prompt("Que palabra quieres contar?");

    if (palabra != "") {

        alert(contarPalabra(str, '\\b(' + palabra + ')\\b'));
    
    } else {
        palabra = prompt("Que palabra quieres contar?");
    };

}while(palabra == '');
