import { buscarCanciones, construirIndiceBusqueda, crearCatalogo, generarEstadisticasMusicales, generarRecomendaciones, gestionarPlaylists, reporducirCancion } from "./helpers/bibliotecaMusical";

function app (){
  localStorage.clear()
  const map = crearCatalogo()
  console.table(map)
   
  const si= gestionarPlaylists().crear('tristeza')
  gestionarPlaylists().crear('alergía')
  console.log(si)
  gestionarPlaylists().agregar('tristeza',1)
  gestionarPlaylists().agregar('tristeza',2)
  gestionarPlaylists().eliminar('tristeza',1)
  gestionarPlaylists().agregar('tristeza',1)

  console.table(gestionarPlaylists().obtener('tristeza'))

  console.table(gestionarPlaylists().listar());

  const indice = construirIndiceBusqueda(); 
  console.table(indice);
  console.log(`Índice construido con ${indice.size} términos únicos`); 
  console.log(`El término "rock" aparece en ${indice.get("rock").size} 
  canciones`); 
  console.log(`El término "queen" aparece en ${indice.get("queen").size} 
  canciones`); 

  // Búsqueda simple
  const resultados1 = buscarCanciones("rock"); 
  console.log(`Búsqueda "rock": ${resultados1.length} resultados`); 
  resultados1.forEach(c => console.log(`  - ${c.titulo} (${c.genero})`)); 
  console.log("=============================")
  // Búsqueda con filtros
  const resultados2 = buscarCanciones("rock", {   
    añoMin: 1970, 
    añoMax: 1980, 
  }); 
  console.log(`\nBúsqueda "rock" años 70: ${resultados2.length} resultados`); 
  resultados2.forEach(c => console.log(`  - ${c.titulo} - ${c.año}`)); 
  console.log("=============================")

  // Búsqueda con múltiples filtros
  const resultados3 = buscarCanciones("rock", { 
  genero: "Rock", 
  duracionMax: 400 
  }); 
  console.log(`\nBúsqueda "rock" género Rock, max 400s: ${resultados3.length} 
  resultados`);
  console.log("=============================")

  const stats = generarEstadisticasMusicales();
  console.table(stats); 
  console.log("=== ESTADÍSTICAS MUSICALES ==="); 
  console.log(`Total de canciones: ${stats.totalCanciones}`); 
  console.log(`Duración total: ${stats.duracionTotal} minutos`); 
  console.log(`Canción más reproducida: 
  ${stats.cancionMasReproducida.titulo}`); 
  console.log(`Artistas únicos: ${stats.artistasUnicos}`); 
  console.log(`Año promedio: ${stats.añoPromedio}`); 
  console.log("\nGéneros:"); 
  console.table(stats.generosPorCantidad); 
  console.log("\nDistribución por década:"); 
  console.table(stats.distribucionDecadas);
  console.log("=============================")

  // Primero reproducimos algunas canciones para simular historial 
  reporducirCancion(1); // Bohemian Rhapsody 
  reporducirCancion(3); // Stairway to Heaven 
  // Generamos recomendaciones basadas en Bohemian Rhapsody (ID 1)
  const recomendaciones = generarRecomendaciones(1, 5); 
  console.table(recomendaciones);
  console.log("Si te gustó 'Bohemian Rhapsody', te recomendamos:\n"); 
  recomendaciones.forEach((rec, index) => { 
  console.log(`${index + 1}. ${rec.cancion.titulo} - 
  ${rec.cancion.artista}`); 
  console.log(`   Puntuación: ${rec.puntuacion} puntos`); 
  console.log(`   Razones: ${rec.razones.join(", ")}`); 
  console.log(); 
  });
}



export default app;