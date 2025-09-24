// Usos de los arrays

// declaración

const edades=[];
const frutas= [manzana, personalbar, tomate];

// usando el constructor AeeY

const CP = new Array();
const cc= new Array("diwhuiqwfh","fgwifuwbd","bbfwgfuige")

//añadir:

edades.push(10);
edades.unshift(67);

//eliminar

edades.pop(); //elimina el ultimo y retorna lo que ha eliminado 
edades.shift();//elimina el primero y retorna lo que ha eliminado 

// ******** slice

edades.slice(1,5)   //desde la posicion uno hasta el 5, 
                    // si no se responde el final va desde el inicial hasta el final
                    // numeros negativos (-1,...) va aal contrario

// ******************* map

edades.map((edad)=>edad*2 )

// ********** filter

edades.filter((edad)=> edad>=18)