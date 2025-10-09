// importaciones
import  uuid  from uuid
import { serializar } from "../app";
import { deserializar } from "../app";
import bcryptjs from "bcryptjs";

/*
Cada usuario debe contener la siguiente información:

"id": "uuid-generado",
"username": "nombre_de_usuario",
"passwordHash": "contrasena_en_hash"

*/

const registrarUsuarioArray = (username, password, tipo) => {
  // Validaciones básicas
  if (!username || !password || !tipo)
    throw new Error("Faltan datos obligatorios.");
  if (typeof username !== "string")
    throw new Error(`El nombre de usuario "${username}" no es un string.`);
  if (!Array.isArray(tipo))
    throw new Error("Error: el parámetro 'tipo' debe ser un Array.");

  // Cargar usuarios existentes
  const usuariosGuardados = deserializar(localStorage.getItem("usuariosArray")) || [];

  // Comprobar duplicado
  if (usuariosGuardados.some(usuarioGuardado => usuarioGuardado.username === username))
    throw new Error("El usuario ya existe en usuariosArray.");

  // Crear usuario y guardar
  const usuario = {
    id: uuid(),
    username,
    passwordHash: bcryptjs.hashSync(password, 10),
  };

  usuariosGuardados.push(usuario);
  localStorage.setItem("usuariosArray", serializar(usuariosGuardados));

  console.log(`✅ Usuario ${username} registrado en usuariosArray.`);
};