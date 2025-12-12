

export const app = () => {
  //primera función closure
  const crearClosure = () => {
    let mensajeSecreto = "Yo soy tu closure";
    
    return()=> {
        console.log("Mensaje: ", mensajeSecreto)
    }
  }

  const miClosure = crearClosure();
  miClosure();
// ----------------------socpe lexico-----------

let nivelGlobal = "hola soy global 🌍"
    const funcionExterna = ()=> {
        let nivelExterno = "Hola soy externo"

        const funcionInterna = ()=> {
            let nivelInterna = "Hola soy Interno"

            //demostramos...
            console.log("accediento a ",nivelGlobal);
            console.log("accediento a ",nivelExterno);
            console.log("accediento a ",nivelInterna);

            
        }
        funcionInterna();
    }
    funcionExterna();

    // 3º ejemplo-------------------------------------
    //Ejercicio encapsulación

    //**
    // objetoPublico saldo, retirar(cantidad)<= retirar ese dinero del saldo 
    //*/

    const objetoPublico= {
        saldo: 1000,
        retirarDinero: function(cantidad) {
            this.saldo -= cantidad;
        },
    }
    objetoPublico.retirarDinero(100);
    console.log("Saldo:",objetoPublico.saldo);

    const cuentaBancaria =(saldoInicial = 0)=> {
        //saldo ha de ser private
        let saldo = saldoInicial ?? 0;
        return {
            obtenerSaldo:  ()=> saldo,
            depositar: (cantidad=0)=> {
                if(cantidad> 0){
                    saldo += cantidad;
                    console.log(`✅ Cantidad ${cantidad} depositada. Nuevo saldo: ${saldo}`)
                    return true
                }
                return false
            },
            retirar: (cantidad=0)=> {
                if(cantidad> 0 && cantidad <= saldo){
                    saldo -= cantidad;
                    console.log(`✅ Cantidad ${cantidad} retirada. Nuevo saldo: ${saldo}`)
                    return true               
                }
                return false
            }
        

        }
    }
    const miCuenta1= cuentaBancaria(1000)
    miCuenta1.depositar(100)
    console.log(miCuenta1.obtenerSaldo())
    miCuenta1.retirar(50)
    console.log(miCuenta1.obtenerSaldo())
    
    const miCuenta2= cuentaBancaria(100)   
    console.log(miCuenta2.obtenerSaldo())
    miCuenta2.saldo=99999;
    console.log(miCuenta2.obtenerSaldo())
    // console.table(miCuenta1);

    //Crear 2 contadores uno que empiece en 10 y vaya hacia el 0 y otro al contrario
    //mostrar utilizando un temporizador de 1 segundo como los contadores uno sube y otro baja, 
    //utilizando los metodos del contador
    //incrementar , decrentar, resetear , obtener

    const cronometro = (contadorInicial1= 10, contadorInicial2=0) =>{
        let contador1 = contadorInicial1 ?? 0
        let contador2 = contadorInicial2 ?? 0

        return {
            incrementar: (cantidad=1)=>{
            
                contador1-=cantidad
                contador2+=cantidad
            },

            decrentar: (cantidad=1)=>{

                contador1+=cantidad
                contador2-=cantidad
                console.log(`Contador 1: ${contador1} |||||||| Contador 2: ${contador2}`)
            },
            
            reset: ()=>{
                contador1 =contadorInicial1
                contador2= contadorInicial2
            },

            obtenerContadores: ()=>{
                return {contador1,
                        contador2
                    }
            }
            
        }

    }
    const crono = cronometro();
    console.log(crono.obtenerContadores())
    clearInterval(10000)
    console.log(crono.obtenerContadores())
    crono.decrentar;
    console.log(crono.obtenerContadores())
    clearInterval();

    //ejemplificar un carrito de la compra persistente utilizando closure y estableciendo la persistencia de datos
    //utilizando una bd sqlite33

    //Ejemplificar un carrito de la compra que permita isertarproductos, quitar, obtenertotal, utilizando sqlite3
   
   
    
}