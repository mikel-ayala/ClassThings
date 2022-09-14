const categorias = document.querySelectorAll('.category');
const form = document.getElementById('form')
const preguntaForm = document.getElementById('preguntaForm');
const respuestaForm = document.getElementById('respuestaForm');
const botonForm = document.getElementById('confirmarForm');
var seleccionada = '';
var aciertos = 0;
var fallos = 0;
var correcta;

const preguntas = ['¿Cuándo se celebró la primera Copa Mundial de Fútbol?', 
    '¿En qué año el hombre pisó la Luna por primera vez?', 
    '¿Cuál es el río más caudaloso del mundo?', 
    '¿Quién pintó el “Guernica”?', 
    '¿A quién interpretaba John Travolta en “Grease”?', 
    '¿Cuál es el nombre técnico del miedo o fobia a las alturas?'];

const respuestasCorrectas = ['1930','1969','amazonas','pablo picasso','danny zuko','acrofobia'];


categorias.forEach(categoria => {
    categoria.addEventListener('click', function() {

        seleccionada = this.id
        form.style.display = 'block';

        console.log(seleccionada + ',,,,' + respuestaForm)

        switch (this.id) {
            case 'dep': {
                preguntaForm.innerHTML = preguntas[0];
            } break;
            case 'his': {
                preguntaForm.innerHTML = preguntas[1];
            } break;
            case 'geo': {
                preguntaForm.innerHTML = preguntas[2];
            } break;
            case 'art': {
                preguntaForm.innerHTML = preguntas[3];
            } break;
            case 'ent': {
                preguntaForm.innerHTML = preguntas[4];
            } break;
            case 'nat': {
                preguntaForm.innerHTML = preguntas[5];
            } break;
        };
        
    });
});

botonForm.addEventListener('click', function(){
    correcta = false;

    console.log(seleccionada)

    switch (seleccionada) {
        case 'dep': {
            if (respuestaForm.value==respuestasCorrectas[0]) {
                correcta = true;
            }
        } break;
        case 'his': {
            if (respuestaForm.value==respuestasCorrectas[1]) {
                correcta = true;
            };
        } break;
        case 'geo': {
            if (respuestaForm.value==respuestasCorrectas[2]) {
                correcta = true;
            };              
        } break;
        case 'art': {
            if (respuestaForm.value==respuestasCorrectas[3]) {
                correcta = true;
            };
        } break;
        case 'ent': {
            if (respuestaForm.value==respuestasCorrectas[4]) {
                correcta = true;
            };
        } break;
        case 'nat': {
            if (respuestaForm.value==respuestasCorrectas[5]) {
                correcta = true;
            };
        } break;
    };

    if (correcta == true) {
        document.getElementById(seleccionada).style.color = 'green';
        aciertos++;
    } else {
        document.getElementById(seleccionada).style.color = 'red';
        fallos++;
    } 

    document.getElementById(seleccionada).disabled = true
    respuestaForm.value = '';

    if (aciertos >= 4) {
        alert("Has ganado")
        location.reload()
    };

    if (fallos > 2) {
        alert("Has perdido")
        location.reload()
    };

    form.style.display = 'none';

});