/*
    Crear una funcion llamada aprobados que me pase como parametro un número 
    y me diga si estoy o no aprobado

    Crear una funcion 2.0 que si le paso como parametro un numero me diga
    9-10 sobresaliente
    5-9 aprobado
    0-4 suspenso
*/

// ### Manera noob  de function

//function aprobados(nota){
    

//}

// ### ARROW FUNCTION modo pro

// const aprobados = (nota) => {
//     return nota>=5 ? "Aprobado" : "suspenso";
// }


// ### Manera profesional gigachad,hacker,GOD cuando solo hay una linea
const aprobados = (nota=0) => nota>=5 ? "Aprobado" : "suspenso";
const aprobadosV2 = (nota=0) =>( nota>=9 ? "Sobresaliente" : nota>=5 
    ? "Aprobado" : "suspenso");
const aprobadosV3 = (nota=0) =>( nota>=9 ? "Sobresaliente" : aprobados(nota));



console.log(aprobadosV2(9));