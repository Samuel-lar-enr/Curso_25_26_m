import { eventos } from '../db/db';
import fetching from '../utils/fetching';

// Utiliza el array eventos para crear un timeline vertical con:
// Clases CSS OBLIGATORIAS:
// Contenedor principal: "timeline-container"
// Línea temporal: "timeline-line"
// Cada evento: "timeline-item"
// Eventos pares: clase adicional "left"
// Eventos impares: clase adicional "right"
// Contenido del evento: "event-content"
// Título del evento: "event-title"
// Fecha y hora: "event-datetime"
// Lugar: "event-location"
// Lista de ponentes: "speakers-list"
// Información adicional: "event-meta"


export default function CreateEjercicio9() {


    const noFetching =()=> eventos
    //    {
    //     id: 1,
    //     nombre: "Frontend Conference 2024",
    //     fecha: "2024-03-15",
    //     hora: "09:00",
    //     lugar: "Centro de Convenciones, Madrid",
    //     ponentes: ["Ana García", "Carlos Rodríguez"],
    //     asistentes: 250,
    //     precio: 75.00
    //   }
        const eventCreator = (eventos) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("timeline-container");

        const title = document.createElement("h2");
        title.classList.add("restaurant-title");
        title.textContent = "📅 Timeline de Eventos";

        const timeline = document.createElement("div");
        timeline.classList.add("timeline-line");

        // 🔥 Nuevo wrapper para los items
        const itemsWrapper = document.createElement("div");
        itemsWrapper.classList.add("timeline-items");

        eventos.forEach(evento => {
            const eventContainer = document.createElement("div");
            eventContainer.classList.add("timeline-item");

            if (evento.id % 2 === 0) {
                eventContainer.classList.add("left");
            } else {
                eventContainer.classList.add("right");
            }

            const eventName = document.createElement("h3");
            eventName.classList.add("event-title");
            eventName.textContent = evento.nombre;
            eventContainer.appendChild(eventName);

            const eventDateTime = document.createElement("p");
            eventDateTime.classList.add("event-datetime");
            eventDateTime.textContent = `${evento.fecha}   ${evento.hora}`;
            eventContainer.appendChild(eventDateTime);

            const eventLocation = document.createElement("p");
            eventLocation.classList.add("event-location");
            eventLocation.textContent = evento.lugar;
            eventContainer.appendChild(eventLocation);

            const eventPonents = document.createElement("p");
            eventPonents.classList.add("speakers-list");
            eventPonents.textContent = `🗿 ${[...evento.ponentes]}`;
            eventContainer.appendChild(eventPonents);

            const eventAsistPrice = document.createElement("p");
            eventAsistPrice.classList.add("event-meta");
            eventAsistPrice.textContent =
                `👥 Asistentes: ${evento.asistentes} | 💵 Precio: ${evento.precio} €`;
            eventContainer.appendChild(eventAsistPrice);

            // antes timeline.appendChild(eventContainer)
            itemsWrapper.appendChild(eventContainer); // ← CORRECTO
        });

        contenedor.appendChild(title);
        contenedor.appendChild(timeline)
        contenedor.appendChild(itemsWrapper);   // items adelante
        
        
        return contenedor;
    };


    function render  (){
        // //aqui decido donde pintar el objeto en el DOM
         const mainContainer= document.createElement("div")
        // //verison sincrona 
        const v1Wrapper= document.createElement("div")
        v1Wrapper.innerHTML="<h3> Versión Síncrona </h3>"
        v1Wrapper.appendChild(eventCreator(noFetching()))
        mainContainer.appendChild(v1Wrapper)
        //verison sincrona 
        const v2Wrapper= document.createElement("div")
        v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
        fetching("eventos")
            .then(data => {
                console.log("DATA RECIBIDA:", data);
                v2Wrapper.appendChild(eventCreator(data))
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