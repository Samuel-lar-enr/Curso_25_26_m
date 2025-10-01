const numeros = [1, 2, 3, 4 ,5 ,6]
//Generar un obejeto resumen de mi array  que tenga los siguientes campos:
/*
{
valor: numero_correspondiente
posicion: posición dentro del array
esUltimo: array_que_me_diga_si_es_el_último (true,false)
}
*/

const resumenNumeros= numeros.map((numero,indice,miArray)=>     {
    return {
        valor: numero,
        posición: indice,
        esUltimo: indice === miArray.length-1  
    }
}) 

console.log(resumenNumeros); //array de objetos mapeados


const products = [
    {name: "laptop", price: 1000,stock: true,active: true},
    {name: "Mause Logitech", price: 28.56,stock: false, active: false}

]
/*mapeado:
nombre
precioOriginal
precioConiva
HayStock
*/

const resumenProductos = products.map((product)=> {

    return{
        name: product.name,
        originalPrice: product.price,
        priceWithVat: product.price*1.21,
        aviable: product.stock > 0,
    }
})
// Filtrame los productos que tiene el stock y están activos

products.filter((product)=> {
   return product.stock>0 && product.active
})
//Buscar de todos los laptop  de tipo case insensitive

products.filter((product)=> {
    return product.name.toUpperCase().includes("LAPTOP")
})
//Crera una funcion que pase como parametro un array de objetos, 
//el nombre de un objeto , que devuelva todos los objetos de esa característca

const findProducts= (products,wordToFind) =>  products
    .filter((product)=> product.toLowercase()
        .includes(wordToFind.toLowercase())
    )
//Quiero crear una funcion que le pase como parametro un aarray de productos, precio_inicial, precio_final.
//y me devuelva los productos cuyo precio está en el rango de valores (sin incluirlos)

const priceFilter = (products,minPrice,maxPrice) => products
    .filter ((product)=> product.price > Number(minPrice) && product.price < Number(maxPrice)
    )


// modificar Findproductos para que me muestre solo los que están activos

const findProductsV2= (products,wordToFind) =>  products
    .filter((product)=> product.toLowercase()
        .includes(wordToFind.toLowercase()) && product.active
    )

// Version dos con comprovaciones 
const priceFilterV2 = (products=[],minPrice=0,maxPrice=0) =>{ 
    return products.filter ((product)=> product.price > Number(minPrice) && product.price < Number(maxPrice)
    )
}

const carrito = [
    {name: "laptop", price: 1000,amount: 5,category: "Electronica"},
    {name: "Mause Logitech", price: 28.56,amount: 2,category: "Electronica"},
    {name: "Monitor MSI 24", price: 210.6, amount: 20,category: "Electronica"},
    {name: "Teclado Mecánico", price: 150, amount: 3,category: "Electronica"},
    {name: "Polo Scalper", price: 30, amount: 2,category: "Ropa"},
        {name: "Pantalon Stradivarius", price: 25, amount: 1,category: "Ropa"},


]
// retortorne el precio total del carrito

const  totalCartPrice = (cart=[]) => cart
    .reduce((total,product) => product.amount >5 
    ? total + ((product.price*1.21) * product.amount)*0.95
    : total + ((product.price*1.21) * product.amount)
    ,0 );

//agrupar el carrito por categorías

/*
{
    Electronica: [ 
        {
        },
        {
        },
    ],
    Ropa: [ 
        {
        },
        {
        },
    ]  
}
*/

const groupByCategory = (cart=[]) =>cart
    .reduce((groups,product)=>{
        const categoryFilte = product.category
        if( !groups[categoryFilter]){ 
            groups[categoryFilter]= []
        }
        groups[categoryFilter].push(product)
        return acc;
    },{});

const votos = ["Ana", "Carlos", "Ana","Beatriz","Carlos","Ana"]

// Funcion que cuente cuantos votos tiene cada usuario

const countVotes = (votes=[]) => {

    return votes.reduce((acc,vote) => {
        acc[vote]= (acc[vote] || vote) +1 
    },{})

}

const users = [
    {id:1, nombre:"Ana",rol:"admin"},
    {id:2, nombre:"Carlos",rol:"usuarios"},
    {id:3, nombre:"Beatriz",rol:"admin"},

]
//dados a objetos y usuarios buscar el objeto cuyo id es  2 y obtener el rol que tiene

const findUsers = (users = [], id = 1) => {
   return users
   .find((user)=> {
   if (Number(user.id)=== Number(id)){
        return user.rol
   }else{
    return "error No se ha encontrao el usuario"
   }
})
}
//buscar con el indice del array donde se ha encontrado el usuario buscado 
//findIndex <------------- Devuelve el indice del array donde se ha encontrado al usuario
//devuelve -1 si no se ha encontrado
const findUsersIndex = (users = [], id = 1) => {
   return users
   .findIndex((user)=> {
   return Number(user.id) === Number(id);
})
}

//some() ************************* <--------- Devuelve true si un elemento cumple alguna condición

const numerosPares = [2,5,6,7,8]
// ¿ hay numeros pares en ese array??
const hayPares=  numerosPares.some((numero)=> numero%3 === 0) //devuelve true o false si hay algún numero par