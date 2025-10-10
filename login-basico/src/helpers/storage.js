import { ENV } from "../config/env.js";


//Crea una funcion initialStorage que reciba un array de usuarios y los guarde en el local storage
/**
 * 
 * @param {*} arrayUsers 
 */
export const initialStorage = (arrayUsers)=> { 
    localStorage.setItem(ENV.VITE_STORAGE_KEY,JSON.stringify(arrayUsers))
    console.info(`${ENV.VITE_APP_TITLE}: Usuarios guardados correctamente ✅`)
}

//Una funcion llamada getUsuarios() que traiga todos los usuarios 
/**
 * 
 * @returns {Array}
 */
export const getUsers = () =>{
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY) ) || []
}

//Crear una funcion setUsuario(usuario)y lo guarde en el  localStorage en la key del .env
/**
 * 
 * @param {Object} user 
 */
export const setUsuario = (user) => {
   initialStorage( [... getUsers(),user]);

}