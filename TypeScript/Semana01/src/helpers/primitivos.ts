//primitivos en typescript

//1.- String 
let nombre: String = "Isaias FL";
let cp: String= "18003";

let mensaje : string = `Bienvenido D/dña ${nombre} -> cp: ${cp}`;

function procesarTexto (texto:string):string {
    return texto.trim().toUpperCase();

}

console.log(procesarTexto(mensaje));
let saludo = "Qué tal todo"; //declaracion con inferencia de tipos 
procesarTexto(saludo);

// 2.- number

//calcularPrecioFinal(prico, impuesto, descuento)

function calcularPrecioFinal(precio:number, impuesto:number, descuento:number):number {
    return  (precio *((1+(impuesto/100))+(1-(descuento/100))));
}

console.log(calcularPrecioFinal(80,21,3))

//Cualquier tipo any(no usar salvo )
//funcion que verifique que lo que pase como param es un numero
//No es infinito, !isNaN

function esNumero(numero:any):boolean {
    return typeof numero === "number" && !isFinite(numero) && !isNaN(numero);
}
esNumero([]);

//calcular la suma total de los elementos de una array de némeros

function calcularPromedio(numeros:number[]):number {
    if (numeros.length === 0) throw new Error("No se puede calcular el promedio de un array vacío");

    const suma:number =   numeros.reduce((acc, numero)=> acc+numero,0);
    return suma/numeros.length;

}
function calcularExtremos (numeros:number[]): { min:number, max:number }{
    if (numeros.length === 0) throw new Error("No se puede calcular el promedio de un array vacío");
    const min:number =  Math.min(...numeros);
    const max:number =  Math.max(...numeros);

    return { min, max };

}

//3.-Boolean

// comprovar si un email es correcto o no 
//. y espacio son caracteres especiales hay que escaparlos con /. /s

function esEmailValido(email:string):boolean{
    const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
esEmailValido("aaa@aaa@aaa.com");


//interface, ipo de dato generado por el ussuario para una determinada situación 
interface permisosUsuario {
    puedeLeer: boolean,
    puedeEscribir: boolean,
    puedeBorrar: boolean

}


//crear una funcion llamada obtener principios que dependioendo de que sea invitado, usuario ,administrador 
//cambie los permisos de la interfaz


type tipoUsuario = "invitado" | "usuario" | "administrador";

//type permite crear un tipo de dato entre unos valores dados

function obtenerPermisos(usuario: tipoUsuario):permisosUsuario {
    switch (usuario) {
        case "invitado":
            return {
                puedeLeer: true,
                puedeEscribir: false,
                puedeBorrar: false,
            }
        case "usuario":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: false,
            }
        case "administrador":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: true,
            }    
        default:
            return {
                puedeLeer: false,
                puedeEscribir: false,
                puedeBorrar: false,
            }
    }
}

obtenerPermisos("usuario");

// Null - undefinded 

let posibleNombre : string | null = "Invitado";

//crear una funcion que le pase como param un array de objetos y le devuelva los users mayores de edad

const usuarios = [
    {nombre: "Ana", edad: 34},
    {nombre: "Sara", edad: 14},
    {nombre: "Sam", edad: 20},
    {nombre: "Arm", edad: 16},
]

const mayorEdad = (usuarios: {nombre: string, edad: number}[]) =>{
    const usuariosMayores=   usuarios.filter((usuario)=>{usuario.edad >= 18})
    return usuariosMayores;

}
console.log(mayorEdad(usuarios));

const misNumeros: number[] = [1,-3,4,54,2,4,9,-23,64,12,-76,32]

//devuelve un array de numeros , solo positivos, multiplicados por 2 y ordenadas de menor a mayor 

const procesarNumeros = (numeros: number[]):number[] =>{
    return numeros
        .filter((numero)=> numero > 0)
        .map(numero => numero*2)
        .sort((a,b)=> b-a)

}

//
interface Cliente {
    id: number
    nombre: string
    email: string
    telefono:string
}

// crar una funcion que genere un map con la siguiente estructura 

//{
    // idUsuario : {
    //     id: number
    //     nombre: string
    //     email: string
    //     telefono:string
    // }
//}

const generarMapCliente = (clientes: Cliente[]): Map<number, Cliente>  =>{
    const mapaClientes = new Map<number, Cliente>();
    clientes.map((cliente)=> mapaClientes.set(cliente.id,cliente))
    return mapaClientes;
} 

const clientes: Cliente[] = [
    { id: 1, nombre: "Ana", email: "ana@mail.com", telefono: "111111111" },
    { id: 2, nombre: "Luis", email: "luis@mail.com", telefono: "222222222" }
]

const mapaClientes = generarMapCliente(clientes);
console.log(mapaClientes)

//claculadorasimple: crar una calculadora tipada que realiza operaciones básicas crear una interfaz
//llmada operacion con tipo 4 posibles valores sumar,restar,multi,dividir
//operando 1 operando 2

//funcion llamada calculadora , que le pasaremos como param una operacion de tipo operacion que me devolvera según el tipo
//el calculo de los dos operandos.
//probarlo con 10 5 y 10 0

//¿se podrá ampliar a otras operaciones?





const edades = new Map<string, number>()

edades.set("Antonio",67)
edades.has("Antonio")
edades.get("Antonio")
edades.delete("Antonio")
edades.clear()

interface Datos {
    nombre: string;
    email:string;
    cp: number;
}

const usuarios2 = new Map<string, Datos[]>()


usuarios2.set("Antonio",[{
    nombre: "Antonio",
    email: "hdwgdw@uhwhdw.com",
    cp: 38600,
}])

const mySet = new Set<number>();
mySet.add(19);


