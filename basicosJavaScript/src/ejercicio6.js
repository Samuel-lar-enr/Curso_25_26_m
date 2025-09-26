/*
Dado un array de nombres, crear una función llamada mayusculas
que ponga en mayusculas todos los elementos de ese array que pase como parámetro
*/

const nombres= ["Samuel", "Daniel", "Ana", "Armando", "Pedro"];
console.log( ` ${nombres} nombres antes de estar en mayusculas `);
/**
 * 
 * @param {number} nombres  -array de nombres-
 * @returns {number} -array de nombres convertidos a mayuscula-
 */
const  mayusculas = (nombres = n[""]) =>   nombres.map(nombre => nombre.toUpperCase());
console.log(`nombres despues de usar la funcion ${mayusculas(nombres)}`);




/*
Crear una función llamada precios con iva, que al pasale un array de precios, me los devuelva con el iva incluido
*/

const precios= [10, 30, 911, 25, 67];
console.log(precios);
/**
 * 
 * @param {number} precios -array de precios
 * @returns {number} -Retorna un array de precios + la suma del iva (0.21)
 */
const calculadoraPrecios = (precios= n[0]) =>  precios.map(dinero => dinero*1.21) 
console.log(calculadoraPrecios(precios));



/*

Crear una funcción llamada "imparescuadrados" que me pase un array de numeros y me devuelva
solo los impares elevados al cuadrado
*/
const numeros= [10, 30, 911, 25, 67];
console.log(numeros);
/**
 * 
 * @param {number} numeros -Array de numeros
 * @returns {number} -Retorna un array de numeros cuyos impares se han multplicado al cuardrado
 */
const imparescuadrados = (numeros) =>   numeros
    .filter(numero => numero % 2 !== 0) 
    .map(numeroinpar =>  numeroinpar *  numeroinpar) 

console.log(imparescuadrados(numeros));


/*
Crear una función llamada , normalizar email, que me pase un array de emails que pueden llevar espacios al principio o al final
Y quero que me los devuelva sin espacios ni al principio ni al final
*/
const emails= ["  samuel@gmail.com          ","         Daniel@gmail.com        ","        Ana@gmail.com    ","       Armando@gmail.com   ","Pedro@gmail.com"];
console.log(emails);
/**
 * 
 * @param {string} emails -Array de strings de imails con espacios por el principio y final
 * @returns {String} -Retorna un Array de Strings con los emails sin espacios por el principio y final
 */
const normalizarEmail = (emails) => emails
    .map(email => email.trim())
console.log(normalizarEmail(emails));

/*
Crear una función llamada "filtrarLongitud" que le pase cmo parametro un array de nombre y un tamaño 
y me devuelva solo los nombres cuyo tamaño es >= que el parametro colocado
*/

const filtrarLongitud = (nombres,tamaño) => nombres.filter(nombre => nombre.length >= tamaño)
console.log(filtrarLongitud(nombres,5));


/*
Crera una funcion llamada (normalizarnombrespropios) que le pase como parametro un array de nombres 
y me devuelva la letra capital (la primera) en mayuscula, si el nombre tiene dos palabras ( Maria josé) tambien debe colocar la letra capital de josé en mayus

*/

const normalizarnombrespropios = (nombres) =>  {nombres
    .map(nombre => nombre
        .toLowerCase()
        .split(" ")
        .filter(palabra => palabra !== "")
        .map(palabraSinEspacios => palabraSinEspacios[0].toUpperCase() + palabraSinEspacios.slice(1))
    )
}