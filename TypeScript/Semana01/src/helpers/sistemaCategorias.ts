//crear un sistema de categorias , crear una variable llamada catalogo que tenga un set de productos
// crear funciones agregar producto : return true&&false
//función mostrar catálogo , muestre el catálogo
//Crear un función llamada buscar producto, que le pase un string y busque por nombre del producto
//Nota , cuidado con el get que aveces devuelve undefined

const catalogo = new Map<string,Set<string>>();

const agregarProducto = (categoria:string, producto:string):boolean => {
   if (!catalogo.has(categoria)){
      catalogo.set(categoria, new Set<string>());    
   }

    catalogo.get(categoria)?.add(producto);
    return true;
   
}

agregarProducto("Electrónica", "Portatil HP")
agregarProducto("Electrónica", "Portatil HP")
agregarProducto("Electrónica", "Mause")
agregarProducto("Electrónica", "Teclado")
agregarProducto("Deportes", "Pelota")
agregarProducto("Deportes", "Zapatillas")
agregarProducto("Música", "Teclado")



const mostrarCatalogo = () => {
    // catalogo.forEach(categoria => {
    //     console.log(categoria);
    //     categoria.forEach(producto => {
    //         console.log(producto);
    //     }); 
    // });

    for (const [categoria,productos] of catalogo){
        console.log(`Categoria ${categoria} --Número de productos: ${productos.size}`)
        for (const producto of productos){
        console.log(`-${producto}`)
        }
    }
}

mostrarCatalogo();

const serachProduct = (producto:string):string[] =>{
    const categoriasEncontradas: string[] = []
    for (const [categoria,productos] of catalogo){
        if (productos.has(producto)){
            categoriasEncontradas.push(categoria);
        }
    }
    return categoriasEncontradas;
}

console.log(`Las categorias del producto Teclado encontrado son ${serachProduct("Teclado")}`)