
// at <---- aceso con indices negativos

const frutas = ["tomate","manzana","pera","naranja"]
console.log(frutas.at(-2))
console.log(frutas.slice(-2))

//splice <---- frustas.splice(1,2) <--- elimina dos elementos desde la posición 1
const  frutasV2 = ["tomate","manzana","pera","naranja"]
console.log(frutasV2.splice(1,2,"perra","manzana"))

//concat <--- Se utiliza para concatenar 2 arrays

console.log(frutas.concat(frutasV2))
console.log(frutas.concat([1,2,3,4,5]))
console.log(frutas)
console.log(frutasV2)
const edades = [67,67,3,5,6,8,6,7]
const ArrayConcat = [...frutas,"kawai",...frutasV2,"desune",...edades]
console.log(ArrayConcat)

// SET <---- Otro tipo de datos (datos únicos)

const pesos = [1,2,3,5,7,5,3,5,7,3,6,6,6,6,6,7,9]
const sinDuplicados = [...new Set(pesos)]  //[] para meterlo en un array //... para quetar los {} del set, así creamos un array   //********************** muita importancia */
console.log(sinDuplicados)

//.reduce reduce el array a un unico valor)

//pesos.reduce((acomulardor,elemento,indice,array)=> aui va la logica, valorinicial)
// el acomulador y el elemento no son opcionales, el resto si.
//NO MUTA EL ARRAY

pesos.reduce( (suma,peso)=> suma+peso   , 0 )

//realizar el producto total de todos los elementos de un array

pesos.reduce( (multiplicacion,peso)=> multiplicacion*peso   , 1 )

//encontrar el maximo y el minimo

pesos.reduce((maximo,peso)=>
 peso > maximo ?  peso : maximo
    , pesos[0])

pesos.reduce((minimo,peso)=>
    peso < minimo ?  peso : minimo
    , pesos[0] )
//dado un array que sea manzana, platano , naranja , manzana , platano , pera . Devolverme un objeto clave valor que me diga
// nombre de la fruta: cuantas veces aparece esa fruta
const frutasV3 = ["manzana","platano","naranja","manzana","manzana","platano","pera"]
/* {
    manzana: 3
    platano: 2
    naranja: 1
    pera: 2
    }
*/

frutasV3.reduce((acc,fruta)=> {
    acc[fruta] = (acc[fruta] || 0) +1
    return acc

}     , {}  )

/* Dado el siguiente array vidimensional [[1,2],[3,4],[5,6 ] se pide aplanar dicho array en un array unidimensional [1,2,3,4,5,6] */


//array de onjetos.

const usuarios = [
    {id:1, nombre: "Ana", edad: "25", data: {books:100}},
    {id:2, nombre: "Armando", edad: "35", data: {books:50}},
    {id:3, nombre: "Pedro", edad: "45", data: {books:20}},
    {id:4, nombre: "Daniel", edad: "10", data: {books:15}},
    {id:5, nombre: "Samuel", edad: "18", data: {books:0}},
    {id:6, nombre: "Isaiass", edad: "30", data: {books:67}}

]

// dame información de cada nombre de usuario
usuarios.find(usuario => usuario.nombre.toLowerCase === "ana")

//dame todos los usuarios cuya edad es superior o = a 28

usuarios.find(usuario => Number(usuario.edad) >= 28) ?? {}

console.log("EJERCICIOS DESDE ACÁ")

//Devolver un array con solo los nombres de los usuarios que tienen en su biblioteca + de 20 libros 


console.log(usuarios.filter(usuario => usuario.data.books >= 20))

//Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28$  

console.log(`${usuarios.reduce((precio,libro)=> precio+libro.data.books*28   , 0 )}$ en libros`)



//devolver que usuarios no tienen libros

console.log(usuarios.filter(usuarios => usuarios.data.books === 0 )) 

const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 5, categoria: 'Tecnología' },
  { id: 2, nombre: 'Camiseta', precio: 35, stock: 15, categoria: 'Ropa' },
  { id: 3, nombre: 'Monitor', precio: 300, stock: 0, categoria: 'Tecnología' },
  { id: 4, nombre: 'Libro', precio: 20, stock: 50, categoria: 'Literatura' },
  { id: 5, nombre: 'Móvil', precio: 800, stock: 10, categoria: 'Tecnología' },
  { id: 6, nombre: 'Pantalón', precio: 60, stock: 5, categoria: 'Ropa' },
];

// Se pide:
// 1.- Obtener un array con los nombres de todos los productos que están agotados.
// 2.- Calcular el valor total del inventario (precio * stock) de todos los productos.
// 3.- Filtrar los productos que pertenecen a la categoría 'Tecnología' y tienen un precio mayor a 500.
// 4.- Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoría 'Ropa'.


console.log(productos.filter(producto => Number(producto.stock) === 0))
console.log(`${productos.reduce((valorInventario,producto)=> valorInventario + Number(producto.precio)*Number(producto.stock)   , 0)} DE DOLALES`)
console.log(productos.filter(producto=> producto.categoria === "Tecnología" && Number(producto.precio) > 500))
console.log(productos
  .filter(producto => producto.categoria === 'Ropa')
  .map(producto => ({
    ...producto,
    precio: producto.precio * 0.9
  }))
)