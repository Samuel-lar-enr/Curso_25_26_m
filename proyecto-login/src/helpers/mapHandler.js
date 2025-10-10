import { v4 as uuidv4 } from 'uuid';
import { serializar } from "../app";
import { deserializar } from "../app";
import bcryptjs from "bcryptjs";

export const registrarUsuarioMapa = (username, password, tipo) => {
  if (!username || !password || !tipo)
    throw new Error("Faltan datos obligatorios.");
  if (typeof username !== "string")
    throw new Error(`El nombre de usuario "${username}" no es un string.`);
  if (!(tipo instanceof Map))
    throw new Error("Error: el parámetro 'tipo' debe ser un Map.");

  // Deserializar correctamente un Map guardado
  const dataLocal = localStorage.getItem("usuariosMapa");
  const usuariosGuardados = dataLocal ? new Map(JSON.parse(dataLocal)) : new Map();

  if (usuariosGuardados.has(username))
    throw new Error("El usuario ya existe en usuariosMapa.");

  const usuario = {
    id: uuidv4(),
    username,
    passwordHash: bcryptjs.hashSync(password, 10),
  };

  usuariosGuardados.set(username, usuario);

  // Serializar correctamente el Map
  localStorage.setItem("usuariosMapa", JSON.stringify(Array.from(usuariosGuardados)));

  console.log(`✅ Usuario ${username} registrado en usuariosMapa.`);
};



