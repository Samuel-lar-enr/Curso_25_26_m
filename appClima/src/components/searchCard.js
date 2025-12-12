

export default function CreateSearchCard(onSearch) {

    //Quiero una variable privada que me diga si estoy o no buscado

    let isSearching = false

    //DOM
    const container = document.createElement("div")
    
    //titulo
    const titulo = document.createElement("h1")
    titulo.textContent= "Buscar ciudad 🔎"

    //input
    const input = document.createElement("input")
    input.type= "text"
    input.placeholder= "Introduzaca aqui la ciudad a buscar"

    //boton
    const btn = document.createElement("button")
    btn.textContent= "Buscar"

    //Crear componente de tipo parrafo llamado "statusElement" que 
    // permita especificar los siguientes estados a traves de la función
    //setStatus(message,type="info")
    //-loading color azul-600
    //-error    color rojo-600
    //-success  color verde-600
    //-info     color grey-600
    //modificar el valo del componente statusElement

    const statusElement= document.createElement("p")
    statusElement.textContent= ""

    function setStatus(message,type="info") {
        const status={
            loading: `<q color=text-blue-600>${message}</q>`,
            error: `<q color=text-red-600>${message}</q>`,
            success: `<q color=text-green-600>${message}</q>`,
            loadinfoing: `<q color=grey-blue-600>${message}</q>`,
        }
        
        if(status[type.trim().toLocaleLowerCase()]){
            statusElement.innerHTML= status[type.trim().toLocaleLowerCase()]
            return
        }else{
            throw new Error("No existe type ");
            
        }
        
    }

    //Funcion buscar
    async function performSearch(){
        const cityName= input.value.trim()
        if(!cityName){setStatus("Escribe el nombre de la ciudad", "error")
            return
        }
        //comenzamos busqueda
        isSearching= true
        //hacer la busqueda
        
        try{
            await onSearch(cityName)
            setStatus("Busqueda realizada correctamente", "success")
        }catch(error){
            setStatus("Error al buscar", "error")
            throw new Error("Error:"+error.message);
            
        }finally{
            isSearching= false
        }
    }

    //Eventos

    btn.addEventListener("click", performSearch)

    input.addEventListener("keypress", e =>{
        if(e.key==="Enter"){
            performSearch()
        }
    })

    //Pintar
    container.appendChild(titulo)


  return {
    element: container,
    focus: ()=> input.focus(),
    clearFrom: ()=> {
        input.value="";
        setStatus("")
        isSearching = false
    },
    getValue: ()=> input.value.trim()
  }
}
