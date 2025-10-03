
//Crar una funcion que extraiga los datos del proyecta y devuelva la siguiente estructura

//nombre, fabricante[nombre, contacto], especificaciones [ram]
//imaginemos un array de productos
//Usando la nueva especificacion obtener el nombre producto con más ram
/**
 * 
 * @param {Object} Products  - Objeto Data
 * @returns Object -Objeto con información extraida
 */
export const extractData = (Products)=>{
    
    const {nombre,
        fabricante: {
            nombre:nombreFabricante,
            contacto},
        especificaciones:{ ram }
    } = Products
    return {
        nombre:nombre,
        nombreFabricante,
        ram,
    } 
};

//Crear una funcion llamada maxRam que me pase como parámetro un array de productos
//Y me devuelva el nombre del producto con la ram maxima

export const maxRam = (arrayProducts) =>{
    arrayProducts.map(extractData).reduce((max,product)=>{
        ram.splice
    },0)
}