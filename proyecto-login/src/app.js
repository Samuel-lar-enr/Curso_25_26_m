//Voy a usar este archivo para añadir todos los usuarios y hacer pruebas 
// en un function y luego simplemente inicializarlo en main
export const serializar = (data) => {
  return JSON.stringify(data)
}

export const deserializar = (data) => {
  return JSON.parse(data)
}

