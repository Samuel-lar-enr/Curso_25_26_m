/*
Dado un array de nombres, crear una función llamada mayusculas
que ponga en mayusculas todos los elementos de ese array que pase como parámetro
*/

const nombres= ["Samuel", "Daniel", "Ana", "Armando", "Pedro"];
console.log( ` ${nombres} nombres antes de estar en mayusculas `);
const  mayusculas = (nombres) =>   nombres.map(nombre => nombre.toUpperCase());
console.log(`nombres despues de usar la funcion ${mayusculas(nombres)}`);




/*
Crear una función llamada precios con iva, que al pasale un array de precios, me los devuelva con el iva incluido
*/

const precios= [10, 30, 911, 25, 67];
console.log(precios);
const calculadoraPrecios = (precios) =>  precios.map(dinero => dinero*1.21) 
console.log(calculadoraPrecios(precios));



/*

Crear una funcción llamada "imparescuadrados" que me pase un array de numeros y me devuelva
solo los impares elevados al cuadrado
*/
const numeros= [10, 30, 911, 25, 67];
console.log(numeros);
const imparescuadrados = (numeros) =>   numeros.map(numero => numero % 2 === 1 ? numero * numero : numero) 

console.log(imparescuadrados(numeros));


/*
Crear una función llamada , normalizar email, que me pase un array de emails que pueden llevar espacios al principio o al final
Y quero que me los devuelva sin espacios ni al principio ni al final
*/
const emails= ["  samuel@gmail.com          ","         Daniel@gmail.com        ","        Ana@gmail.com    ","       Armando@gmail.com   ","Pedro@gmail.com"];
console.log(emails);
const normalizarEmail = (emails) => emails.map(email => email.trim())
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

const normalizarnombrespropios = (nombres) =>  {
    nombre
}