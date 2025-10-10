import { getUsers } from "../helpers/storage";
import  bcryptjs  from "bcryptjs";

export default function validarCredenciales(username, password) {
    //existen user y password?
    //password con longitud > 8 caracteres
    //Existen user y password en localstorage?
    //siempre trimear la data de los formularios
    if( !username.trim() || !password.trim() || password.legnth > 8){
        return false;
    }
    const usuarios= getUsers();
    const user= usuarios.find((user)=> user.username === username )
    
    const salt = bcryptjs.genSaltSync(10);
    const passwordHash = bcryptjs.hashSync(password, salt);
    const ok= bcryptjs.compareSync(user.passwordhash,passwordHash)

    return ok
}

