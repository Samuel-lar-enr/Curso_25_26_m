import { getUsers, setUsuario } from "../helpers/storage";
import  bcryptjs  from "bcryptjs";


export default function createUser(username, password) {
    if (!username || !password) { return false;} // vacíos
    // Siempre limpiar los datos
    const userTrim = username.trim();
    const passTrim = password.trim();
    
    // Validaciones básicas
     
    if (passTrim.length < 3) {return false;} // contraseña demasiado corta
    
    // Buscar el usuario en localStorage
    const usuarios = getUsers();
    const user = usuarios.find((u) => u.username === userTrim);
    if (user) return false;
    console.log("Pasó la existencia de user")

    const newUser = {
        id: usuarios.length + 1,
        username: userTrim,
        passwordhash: bcryptjs.hashSync(passTrim, 10),
        rol: "user"
    }

    setUsuario(newUser)
    
    return true;

}