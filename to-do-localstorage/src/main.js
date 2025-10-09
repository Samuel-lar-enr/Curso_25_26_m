//-------------------importaciones---------------------------------

import { dbTareas } from "./db/db";
import { addTarea, getTareas, rellenarLocalStorage } from "./helpers/tareas";

const TEXT_KEY =import.meta.env.VITE_TEXT_KEY;




//--------------INICIO DE LA APLICACION-----------------
rellenarLocalStorage(dbTareas,"Tareas");
getTareas()
addTarea("penne")
getTareas()
addTarea("pepe")
getTareas()