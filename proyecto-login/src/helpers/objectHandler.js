import { v4 as uuidv4 } from 'uuid';
import { serializar } from "../app";
import { deserializar } from "../app";
import bcryptjs from "bcryptjs";


export const registrarUsuarioObjeto = (username, password, tipo) => {
  // Validaciones básicas
  if (!username || !password || !tipo)
    throw new Error("Faltan datos obligatorios.");
  if (typeof username !== "string")
    throw new Error(`El nombre de usuario "${username}" no es un string.`);
  if (typeof tipo !== "object" || tipo === null || Array.isArray(tipo))
    throw new Error("Error: el parámetro 'tipo' debe ser un Objeto.");

  // Cargar usuarios existentes
  const usuariosGuardados = deserializar(localStorage.getItem("usuariosObjeto")) || {};

  // Comprobar duplicado
  if (usuariosGuardados[username])
    throw new Error("El usuario ya existe en usuariosObjeto.");

  // Crear usuario y guardar
  usuariosGuardados[username] = {
    id: uuidv4(),
    username,
    passwordHash: bcryptjs.hashSync(password, 10),
  };

  localStorage.setItem("usuariosObjeto", serializar(usuariosGuardados));

  console.log(`✅ Usuario ${username} registrado en usuariosObjeto.`);
};

export const loginUsuarioObjeto = (username, password, tipo) => {
  // 🔹 Validaciones básicas
  if (!username || !password || !tipo)
    throw new Error("Faltan datos obligatorios.");
  if (typeof username !== "string")
    throw new Error(`El nombre de usuario "${username}" no es un string.`);
  if (typeof tipo !== "object" || tipo === null || Array.isArray(tipo))
    throw new Error("Error: el parámetro 'tipo' debe ser un Objeto.");

  // 🔹 Recuperar usuarios desde localStorage
  const usuariosObjeto = deserializar(localStorage.getItem("usuariosObjeto")) || {};

  // 🔹 Buscar el usuario directamente por clave
  const usuario = usuariosObjeto[username];

  if (!usuario) {
    console.error("❌ Usuario no encontrado en usuariosObjeto.");
    return;
  }

  // 🔹 Comparar contraseñas
  if (bcryptjs.compareSync(password, usuario.passwordHash)) {
    console.log(`✅ Contraseña correcta. Bienvenido, ${usuario.username}`);
  } else {
    console.error("❌ Contraseña incorrecta");
  }
};