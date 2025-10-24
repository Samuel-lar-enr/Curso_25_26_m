//Crar un sistema de reservas de un restaurante que tenga:
//Un map , con clave la hora de la reserva formato YYYY-MM-DD y
//valor set con nombres de los clientes(DNI) de los clientes que han reservado ese día

//funciones

//agregarReservas
//CancelarReserva
//mostrarReservas
//estadisticas Reservas por dia, reservas totales, media reservas

const reservas = new Map<string, Set<string>>();
const comprovarFecha = (fecha:string):boolean =>{
    fecha= fecha.trim();
    const infoFecha= fecha.split('-');
    if(infoFecha.length !== 3 && infoFecha[0].length !== 4 && infoFecha[1].length !== 2 && infoFecha[2].length !== 2)
        return false;
    return true;
}

const agregarReservas = (fecha:string, cliente:string):boolean =>{
    fecha= fecha.trim();
    cliente= cliente.trim();
    if (!comprovarFecha(fecha)){
        return false;
    }
    if (!reservas.has(fecha)){
        reservas.set(fecha, new Set<string>());
    }
    reservas.get(fecha)?.add(cliente);
    return true;

}

const cancelarReserva = (fecha:string, cliente:string):boolean =>{
    fecha= fecha.trim();
    cliente= cliente.trim();
    if (!comprovarFecha(fecha)){
        return false;
    }
    if (!reservas.has(fecha)){
        return false;
    }
    reservas.get(fecha)?.delete(cliente);
    return true;
}

const mostrarReservas = () =>{
    let clientesTotales:number= 0;
    let reservasTotales:number= 0;
    for (const [fecha,clientes] of reservas){
        console.log(`fecha ${fecha} numero de clientes ${clientes.size}`)
        clientesTotales += clientes.size;
        reservasTotales += 1;
        for (const cliente of clientes){
            console.log(`-${cliente}`)
            
        }
    }
    console.log('--------------------------------------------------')
    console.log(`CLientes que han reservado en total ${clientesTotales}`)
    console.log(`Reservas totales ${reservasTotales}`)
    console.log(`Media de clientes por reserva ${clientesTotales/reservasTotales}`)
    
}


