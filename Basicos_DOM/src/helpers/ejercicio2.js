//imports

import { tareas } from "../db/db";
import fetching from "../utils/fetching";

//importar variables vite
const PORT =  import.meta.env.VITE_PORT;
const URL= import.meta.env.VITE_URL;
const URL_PORT = `${URL}:${PORT}`

export function CreateEjercicio2(){
    function nofetch(){
        const data = tareas;
        return data;    
    }

    function fetchingV2(){
        return fetch(`${URL_PORT}/tareas`)
        .then(response=> response.json())
        .then(data =>{return data})
        .catch(error=>{ throw new Error("No se ha podido cargar el json")});

    }

    function render() {
        const container = document.createElement("div");
        const lista = document.createElement("ul");

        // ---------------------------
        // Versión sin fetch
        // ---------------------------
        const sinfetch = nofetch();

        for (const tarea of sinfetch) {
            const li = document.createElement("li");
            li.classList.add("task-item");
            if (tarea.completada) li.classList.add("completed");

            li.textContent = tarea.texto;
            lista.appendChild(li);
        }

        container.appendChild(lista);

        // --------------------------------------
        // Versión Asíncrona (tareas desde backend)
        // --------------------------------------
        const listaAsincrona = document.createElement("ul");
        const v2Wrapper = document.createElement("div");
        v2Wrapper.innerHTML = "<h3> Versión Asíncrona </h3>";
        container.appendChild(v2Wrapper);

        fetchingV2()
            .then(data => {
                for (const tarea of data) {
                    const li = document.createElement("li");
                    li.classList.add("task-item");
                    if (tarea.completada) li.classList.add("completed");

                    li.textContent = tarea.texto;
                    listaAsincrona.appendChild(li);
                }

                container.appendChild(listaAsincrona);
            })
            .catch(err => {
                console.error("Error cargando tareas async", err);
            });

        return container;
    }


   


    //retorno el objeto
    return {
        render
    };

}