import {  ubicaciones } from '../db/db'
import fetching from '../utils/fetching';



export default function CreateEjercicio5() {

    const noFetching =()=> ubicaciones

    const formularioCreator = (arrayUbicaciones) => {

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error");

    const successMsg = document.createElement("p");
    successMsg.classList.add("success");

    const contenedor = document.createElement("div");
    const formulario = document.createElement("form");

    const inputCheckIn = document.createElement("input");
    inputCheckIn.classList.add("input");
    inputCheckIn.type = "date";

    const inputCheckOut = document.createElement("input");
    inputCheckOut.classList.add("input");
    inputCheckOut.type = "date";

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Buscar";

    const groupUbicacion = document.createElement("div");
    groupUbicacion.classList.add("form-group");

    const groupCheckIn = document.createElement("div");
    groupCheckIn.classList.add("form-group");

    const groupCheckOut = document.createElement("div");
    groupCheckOut.classList.add("form-group");

    const formRow = document.createElement("div");
    formRow.classList.add("form-row");

    // ------------------------------
    // CORRECCIÓN: opciones del select
    // ------------------------------
    const select = document.createElement("select");
    select.classList.add("select");

    arrayUbicaciones.forEach((ubicacion) => {
        const option = document.createElement("option");
        option.value = ubicacion.nombre;
        option.textContent = `${ubicacion.nombre} (${ubicacion.pais})`;
        select.appendChild(option);
    });

    // ------------------------------
    // ENSAMBLAR FORMULARIO
    // ------------------------------
    groupUbicacion.appendChild(select);
    groupCheckIn.appendChild(inputCheckIn);
    groupCheckOut.appendChild(inputCheckOut);

    formRow.appendChild(groupUbicacion);
    formRow.appendChild(groupCheckIn);
    formRow.appendChild(groupCheckOut);

    formulario.appendChild(formRow);
    formulario.appendChild(submitBtn);

    contenedor.appendChild(messageContainer);
    contenedor.appendChild(formulario);

    //Interactividad
    // EVENTO SUBMIT CON VALIDACIONES
    formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar página

    // limpiar mensajes previos
    messageContainer.innerHTML = "";

    const ubicacionSeleccionada = select.value;
    const checkInValue = inputCheckIn.value;
    const checkOutValue = inputCheckOut.value;

    // ------------------------------
    // VALIDACIÓN 1: Campos vacíos
    //-------------------------------
    if (!ubicacionSeleccionada || !checkInValue || !checkOutValue) {
        errorMsg.textContent = "Todos los campos son obligatorios.";
        messageContainer.appendChild(errorMsg);
        return;
    }

    // ------------------------------
    // VALIDACIÓN 2: check-out > check-in
    //-------------------------------
    const fechaIn = new Date(checkInValue);
    const fechaOut = new Date(checkOutValue);

    if (fechaOut <= fechaIn) {
        errorMsg.textContent = "La fecha de salida debe ser posterior a la de entrada.";
        messageContainer.appendChild(errorMsg);
        return;
    }

    // ------------------------------
    // ÉXITO
    //-------------------------------
    successMsg.textContent = `Búsqueda correcta para ${ubicacionSeleccionada} desde ${checkInValue} hasta ${checkOutValue}.`;
    messageContainer.appendChild(successMsg);
    });


    // DEVOLVER EL FORMULARIO LISTO PARA PINTAR
    return contenedor;
    };

    function render  (){
        //aqui decido donde pintar el objeto en el DOM
        const mainContainer= document.createElement("div")
        //verison sincrona 
        const v1Wrapper= document.createElement("div")
        v1Wrapper.innerHTML="<h3> Versión Síncrona </h3>"
        v1Wrapper.appendChild(formularioCreator(noFetching()))
        mainContainer.appendChild(v1Wrapper)
        //verison sincrona 
        const v2Wrapper= document.createElement("div")
        v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
        fetching("ubicaciones")
            .then(data => {
                console.log("DATA RECIBIDA:", data);
                v2Wrapper.appendChild(formularioCreator(data))
            })
            .catch((err)=>{
                console.log("Error",err);
                throw err
            })

        mainContainer.appendChild(v2Wrapper)

        return mainContainer

    }

    return {
        render
    }
}
