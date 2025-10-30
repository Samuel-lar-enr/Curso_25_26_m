//Crar un función , una usando promise y otra usando async await
//https://jsonplaceholder.typicode.com/photos
//title , imagen 

const VITE_API_URL = import.meta.env.VITE_API_URL;


//funcion asincrona usando promise
export function dataJSONPromise(){
    console.log("--------------dataJSONPromise----------------")
    fetch(VITE_API_URL)
    .then(response => response.json())
    .then(data =>{ 
        console.log(`data obtenida de ${VITE_API_URL}:`);
        console.log(data);
    })
    .catch((error) => console.log("Error ...",error))
    .finally(message => console.log("FIN de la función de dataJSONPromise"))

} 



//funcion asincrona usando async await

export async function dataJSONAwait(){
    console.log("---------------dataJSONAsync------------------")
    try {
        const response = await fetch(VITE_API_URL);
        if(!response.ok)
            throw new Error("No se pudo obtener los datos");
        const data = await response.json();
        const dataParseada = data.map((infoFoto)=> {
            return{
                title: infoFoto.title,
                thumbnailUrl: infoFoto.thumbnailUrl
            };
        })
        console.table(dataParseada)
        return dataParseada;
    } catch (error) {
        console.log("Error ...",error);
    }



}

