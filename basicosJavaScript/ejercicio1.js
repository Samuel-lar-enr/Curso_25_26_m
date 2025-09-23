
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
console.log(suma(3,8))
console.log(suma(10,15))
console.log(suma(7))
console.log(suma(0))

suma(5,7)