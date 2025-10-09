import  uuid  from uuid
import { serializar } from "../app";
import { deserializar } from "../app";
import bcryptjs from "bcryptjs";


const registrarUsuarioObjeto = (username, password, tipo) => {
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
    id: uuid(),
    username,
    passwordHash: bcryptjs.hashSync(password, 10),
  };

  localStorage.setItem("usuariosObjeto", serializar(usuariosGuardados));

  console.log(`✅ Usuario ${username} registrado en usuariosObjeto.`);
};
