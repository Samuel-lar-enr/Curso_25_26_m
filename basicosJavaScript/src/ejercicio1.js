
//primer ejercicio js
console.log("Hola mundo!");

//--------------------declarar variables------------------------



//--------------------declarar funciones------------------------
/**
 * 
 * @param {number} [a=0] -primer numero a sumar con valor por defecto 0
 * @param {number} [b=0] -segundo numero a sumar con valor por defecto 0
 * @returns {number} -la suma de a y b
 */
function suma(a=0,b=0){

    return a + b;

}

//------------------Inicializar aplicación-----------------------

function saludar(nombreUsuario){
    //    let mensaje=  `Bienvenid@ ${(nombreUsuario)}`
   // let mensaje=   nombreUsuario ?? "Usuario"
    return  `Bienvenid@ ${(nombreUsuario ?? "Usuario")}`
}

console.log(`la suma de 5 + 0 es: ${suma(5,0)}`);
let edad= 18;
edad >=18? alert("eres mayor de 18"):alert("eres menor de edad");
// en caso de que esto sea null aré ?? esto: otro
let nombre = "Sam";
console.log(saludar(nombre))