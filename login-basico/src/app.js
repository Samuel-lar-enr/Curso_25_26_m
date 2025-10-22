import { initialStorage } from "./helpers/storage.js";
import { DB } from "./db/db.js";
import { renderLoginForm } from "./views/loginViews.js";
import validarCredenciales from "./services/outhservices.js";
import { renderRegisterForm } from "./views/registerView.js";
import createUser from "./services/createuser.js";


export function initialApp(){
    //iniciamos los guardando los usuarios del localstorage
    initialStorage(DB);

    //pintamos renderimos mi formulario en app
    const app = document.getElementById("app");
    app.innerHTML = renderLoginForm();
    const form = document.querySelector("#loginForm");
    const message = document.querySelector("#message");
    const btnRegister = document.querySelector("#btnRegister");
    
    
    const app2 = document.getElementById("app");
    app2.innerHTML = renderRegisterForm();
    const form2 = document.querySelector("#loginForm");
    const message2 = document.querySelector("#message");

    //poner un escuchador de eventos al formulario
    form.addEventListener("submit",(event) => {
        event.preventDefault();
        //comprobar si username y passsword son correctos
            const formData = new FormData(form);
            const username = formData.get("username");
            const password = formData.get("password");

        //Crar funcion que valide q username y password son correctas 
        //SUando las sguientes restricciones
        // X - vacias
        // X -password < 8 caracteres
        // X- username están en local storage
        console.log(username) 
        console.log(password)

        const ok= validarCredenciales(username,password);

       message.innerHTML = ok
        ? `<span style="color:green">Bienvenido ${username}</span>`
            : `<span style="color:red">Credenciales incorrectas</span>`;

    })

    form2.addEventListener("submit",(event) => {
        event.preventDefault();
        //comprobar si username y passsword son correctos
        const formData2 = new FormData(form2);
        const username = formData2.get("username");
        const password = formData2.get("password");
        const password2 = formData2.get("password2");

        console.log(username) 
        console.log(password)
        console.log(password2)

        const ok1 = password === password2;
        console.log(ok1)
        if (!ok1) {
         message.innerHTML = `<span style="color:red">Credenciales incorrectas</span>`;
        }

        const  ok = createUser(username,password);
        
        message.innerHTML = ok
        ? `<span style="color:green">Creado ${username}</span>`
            : `<span style="color:red">Credenciales incorrectas</span>`;



        
    })
}