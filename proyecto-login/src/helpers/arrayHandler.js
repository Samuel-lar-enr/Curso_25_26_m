// importaciones
import { v4 as uuidv4 } from 'uuid';
import { serializar } from "../app";
import { deserializar } from "../app";
import bcryptjs from "bcryptjs";

/*
Cada usuario debe contener la siguiente información:

"id": "uuid-generado",
"username": "nombre_de_usuario",
"passwordHash": "contrasena_en_hash"

*/

export const registrarUsuarioArray = (username, password, tipo) => {
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
    id: uuidv4(),
    username,
    passwordHash: bcryptjs.hashSync(password, 10),
  };

  usuariosGuardados.push(usuario);
  localStorage.setItem("usuariosArray", serializar(usuariosGuardados));

  console.log(`✅ Usuario ${username} registrado en usuariosArray.`);
};


export const loginUsuarioArray = (username, password, tipo) => {
  // 🔹 Validaciones básicas
  if (!username || !password || !tipo)
    throw new Error("Faltan datos obligatorios.");
  if (typeof username !== "string")
    throw new Error(`El nombre de usuario "${username}" no es un string.`);
  if (!Array.isArray(tipo))
    throw new Error("Error: el parámetro 'tipo' debe ser un Array.");

  // 🔹 Recuperar usuarios del localStorage
  const usuariosArray = deserializar(localStorage.getItem("usuariosArray")) || [];

  // 🔹 Buscar el usuario dentro del array
  const usuario = usuariosArray.find(usuarioArray => usuarioArray.username === username);

  if (!usuario) {
    console.error("❌ Usuario no encontrado en usuariosArray.");
    return;
  }

  // 🔹 Comparar contraseñas
  if (bcryptjs.compareSync(password, usuario.passwordHash)) {
    console.log(`✅ Contraseña correcta. Bienvenido, ${usuario.username}`);
  } else {
    console.error("❌ Contraseña incorrecta");
  }
};

