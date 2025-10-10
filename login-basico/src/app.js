import { initialStorage } from "./helpers/storage.js";
import { DB } from "./db/db.js";
import { renderLoginForm } from "./views/loginViews.js";
import validarCredenciales from "./services/outhservices.js";


export function initialApp(){
    //iniciamos los guardando los usuarios del localstorage
    initialStorage(DB);

    //pintamos renderimos mi formulario en app
    const app = document.getElementById("app");
    app.innerHTML = renderLoginForm();
    const form = document.querySelector("#loginForm");
    const message = document.querySelector("#message");

    //poner un escuchador de eventos al formulario
    form.addEventListener("submit",(event) => {
        event.preventDefault();
        //comprobar si username y passsword son correctos
        const { }= Object.entries( new FormData(form))
        //Crar funcion que valide q username y password son correctas 
        //SUando las sguientes restricciones
        // X - vacias
        // X -password < 8 caracteres
        // X- username están en local storage
        console.log(username) 
        console.log(password)
        const ok= validarCredenciales(username,password);

        message.innerHTML = ok 
        ? `<span style="green" Bienvenido ${username}</span}>`
        :`<span style="red">Credenciales incorrectas</span` 
        form.reset();
    })

}