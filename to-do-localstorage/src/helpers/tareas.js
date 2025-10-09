import { uid } from "uid";


//importacions
const TEXT_KEY =import.meta.env.VITE_TEXT_KEY;


// Aquí van las funciones de las tareas

export const rellenarLocalStorage = (arrayTareas,tareas="Tareas") => {
    //Guardar en el localstorage en la clave
    localStorage.setItem(tareas,JSON.stringify(arrayTareas))
}

function saveJsonParse(text) {
    try {
        if (typeof text !== "string") {throw new Error(`Error , la data ${text} no es String`)
        };
        return JSON.parse(text);
    } catch (error) {
        throw new Error("Error parseando la dara")
    }
}

/**
 * 
 * @param {String} clave  - Key del localStorage del que returnamos las tareas
 * @returns {Array} -returna un Array de Objetos Tarea
 */
export const getTareas = (clave="Tareas")=>{
   /* localStorage.hasOwnProperty(clave) ? console.table(JSON.parse(localStorage.getItem(clave))) : []*/

    if(localStorage.hasOwnProperty(clave)){
        console.table(JSON.parse(localStorage.getItem(clave)))
        return JSON.parse(localStorage.getItem(clave));
    }else{
            return [];
    }
}


export const saveTarea = (arrayTareas,tareas="Tareas") => {
    localStorage.setItem(tareas,JSON.stringify(arrayTareas))
}

export const addTarea = (nombreTarea="sin nombre") => {
    const arrayTareas = getTareas("Tareas");
    arrayTareas.push(
        {
        id: uid(5),
        nombre: nombreTarea,
        fechaCreacion: new Date().toISOString(),
        completada: false
        }
);
    saveTarea(arrayTareas,"Tareas");   
}

export const saveTareaV2 = (arrayTareas= []) => {
    try {
        if(!Array.isArray(arrayTareas)){
            throw new Error("Error, el array de tareas no es valido")
        }
        // serializar -> lo convierto a string
        const json= json.stringify(arrayTareas);
        //guardo en local storage
        localStorage.setItem(TEXT_KEY,json)
        console.info("array guardado correctamente")
    } catch (error) {
        
    }
}

export const addTareaV2 = (nombreTarea) => {
    const nombre = String(nombreTarea ?? "").trim();
    try {
        const nuevoTarea = {
            id: uid(),
            nombre,
            fechaCreacion: new Date().toISOString(),
            completada: false

        }
    } catch (error) {
        
    }

}

export const getTareasV2 = () => {
    const dataSinParsear = localStorage.getItem(TEXT_KEY);
    const dataParseada = saveJsonParse(dataSinParsear);
    if (!Array.isArray(dataParseada)){
       console.Error("Error en la data")
       return [];
    }
    return dataParseada;
}