/* 
Crear un juego de un dado , que utilizando una funcion llamada tirar dado, permita tirar un dado de 6 caras 1 al 6
Crear una funcion llamada simular que me pase como parametro el numero de tiradas  que quiero simular 
y me devuelva el numero más repetido
*/

function  tirarDado() {
   const total=  Math.floor(Math.random()*6/1)
   return  total
}
function simular (number){
    const mayorNumero= 0;
    const numeros= [];
    for (simular.number;simular.number>=0;simular.number--){
         const numerin= tirarDado();
        if (mayorNumero< numerin){
            mayorNumero= numerin
        }
    }

}
console.log(tirarDado())