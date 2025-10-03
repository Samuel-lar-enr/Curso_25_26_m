// Ejercicio : destructuring profundo 

import { productos } from "./data/data"
import { extractData } from "./helpers/myfuctions";


///-------------------------INICIO APLICACION-----------------------------

const newDataArray = (arrayProducts)=>  arrayProducts
.map(extractData);

console.log(newDataArray(productos))