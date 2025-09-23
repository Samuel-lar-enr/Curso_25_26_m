// ###GESTION BANCARIA REVOLOUT

/*  Consiste en llevar un pequeño banco con java script
    hecho   que permita crear titular con cuenta y saldo                                                                                            
    hecho   depositar dinero de una cuenta                                                                                                              
    hecho   retirar dinero de una cuenta ( siempre que no tenga saldo )                                                                             
    hecho   consultar el saldo de una cuenta

    hecho   transferir dinero entre dos cuentas siempre q haya saldo para transferir

    mantener un listado de cuentas y buscar cuentas por titular 

    hecho   Cuando creemos una cuenta se debe de generar un número de cuenta con una longitud de un numero de cuenta

    Aparte de documentar todas las funcionas hay que hacer un test, crear la funcion test  y luego inicializarla para que compruebe todo
*/

const cuentas = [];

function digitoaleatorio(length) {
let s = '';
for (let i = 0; i < length; i++) s += Math.floor(Math.random() * 10).toString();
return s;
}

function  CrearCuenta(titular,saldoInicial = 0) {
    const Cuenta ={
    titular: titular,
    saldo: saldoInicial,
    numeroCuenta: digitoaleatorio(10)
   }
   cuentas.push(Cuenta);
   return Cuenta
}

function buscarCuenta(numeroCuenta){
    const Cuenta = cuentas.find(Cuenta => Cuenta.numeroCuenta === numeroCuenta);
    if (!Cuenta) throw new Error("Cuenta no encontrada");
    return Cuenta;
}

function retirarDinero(numeroCuenta,cantidad){
    if (cantidad <= 0) throw new Error("La cantidad debe ser positiva");
    const Cuenta = buscarCuenta(numeroCuenta);
    if(Cuenta.saldo>=cantidad){
        Cuenta.saldo = Cuenta.saldo-cantidad;
    }else{
        throw new Error("Saldo insuficiente");
    }
    return Cuenta.saldo;
}

function depositarDinero(numeroCuenta,cantidad){
    if (cantidad <= 0) throw new Error("La cantidad debe ser positiva");
    const Cuenta = buscarCuenta(numeroCuenta);
    Cuenta.saldo = Cuenta.saldo+cantidad;
    
    return Cuenta.saldo;
}

function consultarSaldo(numeroCuenta){
    const Cuenta = buscarCuenta(numeroCuenta);
    return Cuenta.saldo;
}

function transferirDinero(numeroCuentaOrigen,numeroCuentaDestino,cantidad){
    const CuentaOrigen = buscarCuenta(numeroCuentaOrigen);
    const CuentaDestino = buscarCuenta(numeroCuentaDestino);
    if(CuentaOrigen.saldo>=cantidad){
        retirarDinero(numeroCuentaOrigen,cantidad);
        depositarDinero(numeroCuentaDestino,cantidad);
    }
    return CuentaOrigen.saldo;
}

function listadoCuentas(titular){
    const listaCuentas= cuentas.filter(Cuenta => Cuenta.titular === titular);
    return listaCuentas;
}

function test(){


  console.log("=== INICIO TEST BANCO ===");

  // 1. Crear cuentas
  const a1 = CrearCuenta("Alice", 100);
  const a2 = CrearCuenta("Bob", 50);
  console.log("Cuentas creadas:", cuentas);

  // 2. Consultar saldo inicial
  console.log("Saldo inicial Alice:", consultarSaldo(a1.numeroCuenta)); // 100
  console.log("Saldo inicial Bob:", consultarSaldo(a2.numeroCuenta));   // 50

  // 3. Depositar dinero
  depositarDinero(a1.numeroCuenta, 50);
  console.log("Saldo Alice tras depósito 50:", consultarSaldo(a1.numeroCuenta)); // 150

  // 4. Retirar dinero con saldo suficiente
  retirarDinero(a2.numeroCuenta, 20);
  console.log("Saldo Bob tras retirar 20:", consultarSaldo(a2.numeroCuenta)); // 30

  // 5. Retirar dinero con saldo insuficiente (debe dar error)
  try {
    retirarDinero(a2.numeroCuenta, 1000);
  } catch (e) {
    console.log("Retirada fallida (saldo insuficiente) OK:", e.message);
  }

  // 6. Transferir dinero entre cuentas
  transferirDinero(a1.numeroCuenta, a2.numeroCuenta, 30);
  console.log("Saldo Alice tras transferir 30 a Bob:", consultarSaldo(a1.numeroCuenta)); // 120
  console.log("Saldo Bob tras recibir 30:", consultarSaldo(a2.numeroCuenta)); // 60

  // 7. Transferir con saldo insuficiente (debe dar error)
  try {
    transferirDinero(a2.numeroCuenta, a1.numeroCuenta, 1000);
  } catch (e) {
    console.log("Transferencia fallida (saldo insuficiente) OK:", e.message);
  }

  // 8. Listado de cuentas
  console.log("Listado de todas las cuentas:", listadoCuentas(""));

  // 9. Buscar cuentas por titular (parcial y case-insensitive)
  console.log("Buscar 'ali':", listadoCuentas("ali")); // debe devolver Alice
  console.log("Buscar 'BOB':", listadoCuentas("BOB")); // debe devolver Bob

  console.log("=== FIN TEST BANCO === ✅");
}
console.log(test());

