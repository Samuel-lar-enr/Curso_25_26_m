//imports
import { canciones } from '../db/data.js'
//funciones

const PLAYLIST= 'playlists';
const CATALOGO = 'catalogo';

const guardarMapEnLocalStorage =(clave, map) =>{
    const arrayDesdeMap= Array.from(map)
    localStorage.setItem(clave,JSON.stringify(arrayDesdeMap));
};

const cargarMapEnLocalStorage =(clave) =>{
   const myMap=  localStorage.getItem(clave);

    return myMap 
    ? new  Map(JSON.parse(myMap)) 
    :  new Map()

};

const guardarSetLocalStorage = (clave,mapConSet)=> {
     // Creamos una estructura serializable: [ [nombre, [1,2,3]], ... ]
    const data = Array.from(mapConSet.entries()).map(([nombre, setIds]) => [nombre, Array.from(setIds)]);
   
    localStorage.setItem(clave, JSON.stringify(data));
}

const cargarSetLocalStorage = (clave)=> {
    const data = JSON.parse(localStorage.getItem(clave));

    if (!data) return new Map();

    // Volvemos a crear un Map<string, Set<number>>
    const map = new Map();
    for (const [nombre, idsArray] of data) {
            map.set(nombre, new Set(idsArray));
    }
   

    return map;
}

export const crearCatalogo= () => {
    const map = new Map();

    for(const cancion  of canciones){
        cancion.historialReproduccion = []  
        map.set(cancion.id,cancion)
    }
    guardarMapEnLocalStorage('catalogo',map);
        console.log(`se ha guardado catalogo con ${map.size} canciones`)

    return map;

};

export const reporducirCancion =(idCancion)=> {
    const catalogo = cargarMapEnLocalStorage('catalogo');
    if (!catalogo.has(idCancion)){
        throw new Error('')
    }
    const cancionReproducida = catalogo.get(idCancion);
    cancionReproducida.reproducciones++
    cancionReproducida.historialReproduccion.push({
        fecha: new Date().toISOString(), 
        timestamp: Date.now()
    })
    catalogo.set(idCancion,cancionReproducida);


    return cancionReproducida;

};

export const gestionarPlaylists =() => {



   const guardarPlayList = (map) => {
    // Creamos una estructura serializable: [ [nombre, [1,2,3]], ... ]
    const data = Array.from(map.entries()).map(([nombre, setIds]) => [nombre, Array.from(setIds)]);

    localStorage.setItem(PLAYLIST, JSON.stringify(data));
    };
    
    const cargarPlayList = () => {
        const data = JSON.parse(localStorage.getItem(PLAYLIST));

        if (!data) return new Map();

        // Volvemos a crear un Map<string, Set<number>>
        const map = new Map();
        for (const [nombre, idsArray] of data) {
            map.set(nombre, new Set(idsArray));
        }

        return map;
    };



    const crear = (nombrePlaylist) => {
        const datos = cargarPlayList();

        if (datos.has(nombrePlaylist)) {
        console.log(`La playlist "${nombrePlaylist}" ya existe`);
        return false;
        }

        datos.set(nombrePlaylist, new Set());
        guardarPlayList(datos);
        return true;
    };
    
    const  agregar =(nombrePlaylist, idCancion) => {
       const datos = cargarMapEnLocalStorage(PLAYLIST)
       if(!datos.has(nombrePlaylist))
        throw new Error("Playlist no existe");
    
       if(!cargarMapEnLocalStorage(CATALOGO).has(idCancion))
        throw new Error("La canción no existe en catalogo");
    
    //    const playlist = datos.get(nombrePlaylist);
    //    console.log(playlist)
        const playlist= cargarPlayList() 
        const setIds = playlist.get(nombrePlaylist)

       if(setIds.has(idCancion)){
        console.log(`La cancion ${idCancion} ya está en la playlist ${nombrePlaylist}`)
        return false
        }
        
        setIds.add(idCancion)
        const catalogo = cargarMapEnLocalStorage(CATALOGO)
        const cancion = catalogo.get(idCancion)
        console.log(`✅ ${cancion.titulo} agregada a la playlist`)
        guardarPlayList(playlist)
        return true

    };
   
    const  eliminar =(nombrePlaylist, idCancion) => {
       const datos = cargarPlayList()
       if(!datos.has(nombrePlaylist))
        throw new Error("Playlist no existe");

       const playlistEscogida = datos.get(nombrePlaylist);

       if(!playlistEscogida.has(idCancion)){ 
        return false
        }
        
        playlistEscogida.delete(idCancion) 
        datos.set(nombrePlaylist, playlistEscogida)
        guardarPlayList(datos)
        return true

    }

    const  obtener =(nombrePlaylist) => {
       const datos = cargarPlayList()
       if(!datos.has(nombrePlaylist))
        throw new Error("Playlist no existe");

        const playlistEscogida = datos.get(nombrePlaylist);
        const arrayCanciones= []
        const catalogo = cargarMapEnLocalStorage(CATALOGO)

        playlistEscogida.forEach(id => {
            arrayCanciones.push(catalogo.get(id))
        });
        
        return arrayCanciones;
    }

    const listar =()=>{
        // const arrayNombres= []
        // const datos = cargarMapEnLocalStorage(PLAYLIST)
        // datos.forEach((clave,valor) => {
        //     arrayNombres.push(clave);
        // })
        const playlist = cargarPlayList()
        return Array.from(playlist.keys())
    }

    return {
        crear,
        agregar,
        eliminar,
        obtener,
        listar
    }
    const a = new Set()
    a.add
};
const INICEDEBUSQUEDA = 'indiceBusqueda'
export const construirIndiceBusqueda =() =>{
    const catalogo = cargarMapEnLocalStorage(CATALOGO)
    //clave en minuscula
    //set con ids q contengan dicho termido
    const indiceBusqueda= new Map();
    const años = [];
    for(const [id, cancion] of catalogo){
      const titulos=  cancion.titulo.toLocaleLowerCase().split(" ")
      const artista= cancion.artista.toLocaleLowerCase().split(" ")
      const album=  cancion.album.toLocaleLowerCase().split(" ")
      const genero= cancion.genero.toLocaleLowerCase().split(" ")
      const año= cancion.año.toString()
      años.push(año)      
      const palabras= [...titulos, ...artista, ...album, ...genero, ...años]

      palabras.forEach(palabra => {
        const palabraLimpia= palabra.replace(/[^a-zA-Z0-9\s]/g, " ");
        const masPalabras= palabraLimpia.split(" ")
        masPalabras.forEach(masPalabra => {
          const palabraLimpiaTrimeada = masPalabra.trim()
          indiceBusqueda.set(palabraLimpiaTrimeada,new Set())
        });
      });

    }

    for(const [palabra, set] of indiceBusqueda ){
        for(const [id, cancion] of catalogo){
            const cancionString = JSON.stringify(cancion).toLocaleLowerCase().replace(/[^a-zA-Z0-9\s]/g, "");
            
            if(cancionString.includes(palabra)){
                set.add(id)
            }
        }
    }
    guardarSetLocalStorage(INICEDEBUSQUEDA,indiceBusqueda)
    return(indiceBusqueda)
}


export const  buscarCanciones =(termino, filtros = {}) => {
    // 1. Recuperar el índice de búsqueda desde LocalStorage
    const indiceDeBusqueda= cargarSetLocalStorage(INICEDEBUSQUEDA)
    // 2. Buscar el término (convertido a minúsculas) en el índice
    if(!indiceDeBusqueda.has(termino.toLocaleLowerCase())){
        console.log("No se encontró el término")
        return false
    }
    // 3. Obtener el Set de IDs de canciones
    const idsCanciones= indiceDeBusqueda.get(termino.toLocaleLowerCase())
    // 4. Convertir los IDs en objetos completos usando el catálogo
    const catalogo= cargarMapEnLocalStorage(CATALOGO);
    let canciones = [];
    idsCanciones.forEach(id => {
    canciones.push(catalogo.get(id));
    });

    // 5. Aplicar filtros opcionales (si se proporcionan)
    if (filtros.genero) {
    canciones = canciones.filter(cancion => cancion.genero === filtros.genero);
    }

    if (filtros.añoMin) {
    canciones = canciones.filter(cancion => cancion.año >= filtros.añoMin);
    console.log("entro en min");
    }

    if (filtros.añoMax) {
    canciones = canciones.filter(cancion => cancion.año <= filtros.añoMax); // <= en lugar de <
    console.log("entro en max");
    }

    if (filtros.duracionMax) {
    canciones = canciones.filter(cancion => cancion.duracion <= filtros.duracionMax);
    console.log("entro en dura");
    }

    // ordenar por reproducciones
    canciones.sort((a, b) => b.reproducciones - a.reproducciones);

    return canciones;
}

export const generarEstadisticasMusicales =() => {
    // 1. Recuperar el catálogo completo desde LocalStorage
    const catalogo = cargarMapEnLocalStorage(CATALOGO)

    //  2. Analizar todos los datos y calcular:
    const canciones= []
    for(const [id,cancion] of catalogo){
        canciones.push(cancion)
    }

    const nombreArtistas = new Set()
    let stadisticasMusicales= canciones.reduce((acc,cancion,index)=>{

        acc.totalCanciones++;

        acc.duracionTotal+= (cancion.duracion/60.00) ;

        if(!acc.cancionMasReproducida.reproducciones)
            acc.cancionMasReproducida = cancion


        if(acc.cancionMasReproducida.reproducciones < cancion.reproducciones )
            acc.cancionMasReproducida = cancion

        const generoCancion = cancion.genero
        if(!acc.generosPorCantidad[generoCancion])
            acc.generosPorCantidad[generoCancion]= 0
        acc.generosPorCantidad[generoCancion]++

        nombreArtistas.add(cancion.artista);
        acc.artistasUnicos = nombreArtistas.size;

        acc.añoPromedio+= cancion.año

        const año =  Math.floor(cancion.año / 10) * 10 + "s"
        if(!acc.distribucionDecadas[año])
            acc.distribucionDecadas[año]= 0
        acc.distribucionDecadas[año]++

        return acc

    },{
        totalCanciones: 0,
        duracionTotal: 0,
        cancionMasReproducida: {},
        generosPorCantidad: {},
        artistasUnicos: 0,
        añoPromedio: 0,
        distribucionDecadas: {},

    })
    

    stadisticasMusicales.añoPromedio= stadisticasMusicales.añoPromedio/canciones.length
    stadisticasMusicales.duracionTotal = stadisticasMusicales.duracionTotal.toFixed(2) 
    return stadisticasMusicales
}

export const  generarRecomendaciones = (idCancionBase, cantidad = 3) => {
    // 1. Recuperar el catálogo desde LocalStorage
    const catalogo = cargarMapEnLocalStorage(CATALOGO)
    //  2. Validar que la canción base exista
    if(!catalogo.has(idCancionBase)){
        console.log("cncion  no existe")
        return false
    }
    //  3. Buscar canciones similares usando un sistema de puntuación
    const canciones= []
    const cancionBuscada= catalogo.get(idCancionBase);
    for(const [id,cancion] of catalogo){
        canciones.push(cancion)
         
    }

    const cancionesPuntuacion= canciones.reduce((acc,cancion,index)=>{
        const esquema = {
            cancion: {},
            puntuacion: 0,
            razones: [],
        }
        if(cancion.id==idCancionBase)
            return acc

        esquema.cancion = cancion
        if(cancion.artista === cancionBuscada.artista ){
            esquema.puntuacion+=5
            const razon = "Mismo artista"
            esquema.razones.push(razon)
        }

        if(cancion.genero === cancionBuscada.genero ){
            esquema.puntuacion+=3
            const razon = "Mismo genero"
            esquema.razones.push(razon)

        }
        const diferenciaFecha = cancion.año >= cancionBuscada.año? cancion.año-cancionBuscada.año : cancionBuscada.año-cancion.año
        
          if(diferenciaFecha <=5 ){
            esquema.puntuacion+=2
            const razon ="Edad Proxima"
            esquema.razones.push(razon)

        }
   
        const diferenciaDuracion = cancion.duracion >= cancionBuscada.duracion? cancion.duracion-cancionBuscada.duracion : cancionBuscada.duracion-cancion.duracion
        

          if(diferenciaDuracion <= 60 ){
            esquema.puntuacion+=1
            const razon ="Duración cercana"
            esquema.razones.push(razon)
        }
        acc.push(esquema)
        return acc
    },[])
    

    cancionesPuntuacion.sort((a,b)=> b.puntuacion -a.puntuacion)
    return cancionesPuntuacion.slice(0, cantidad)

}



//Catalogo
//Crar un funcion que pasemos como parametro artista y el nombre de todas las canciones con ese artista
const cancionesArtista = (nombreArtista) => {
    return canciones.filter((cancion)=> cancion.artista===nombreArtista)
}
//Crear una función que le pase como parámetro max o min y obtenga ordenadas 
// por el nombre de la canción las 5 canciones más o menos reproducidas
const cacionesMasMenosReporducidas = (max=false)=>{
    const catalogo = cargarMapEnLocalStorage(CATALOGO)
    const canciones = [...catalogo.values()]

   canciones.sort((a, b) => max 
    ? b.reproducciones - a.reproducciones  // Más reproducidas
    : a.reproducciones - b.reproducciones  // Menos reproducidas
  );

  return canciones.slice(0, 5);
}
//crear un función reset que ponga todos los contadores de las canciones a 0
const resetCatalogo = ()=>{
    const catalogo = cargarMapEnLocalStorage(CATALOGO)
    const map = new Map()
    for(const [id, cancion] of catalogo){
        cancion.reproducciones= 0;
        map.set(id, cancion);
    }
    guardarMapEnLocalStorage(CATALOGO, map)

    return map;
}
//crar Una función total reproducciones que obtenga el total de reproductiones en el catalogo musical
const totalReproducciones = () => {
    const catalogo = cargarMapEnLocalStorage(CATALOGO)
    const totalReproducciones= 0
    for(const [id, cancion] of  catalogo){

    }
}