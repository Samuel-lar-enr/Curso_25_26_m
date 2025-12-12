import {  proyectos } from '../db/db';
import fetching from '../utils/fetching';
import fetchingClima from '../utils/fetchingClima';





export default function CreateEjercicio12() {


    //const noFetching =()=> proyectos
    
    let historial= new Map()
    let favorites= new Map()

    const mainClimasComunes = [
    "Clear",
    "Clouds",
    "Rain",
    "Drizzle",
    "Thunderstorm",
    "Snow",
    "Mist",
    "Fog",
    "Haze"
    ];

    const projectCreator = (projects) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("portfolio-container");

        contenedor.appendChild(headerCreator())
        contenedor.appendChild(BodyCreator())
        contenedor.appendChild(footerCreator())

        
        return contenedor;
    }

    const headerCreator =() =>{
        const header = document.createElement("header");
        header.classList.add("portfolio-container");
        header.innerHTML = `<h1>Consultoría de clima</h1>`
        
        return header;
    }


    const BodyCreator =() =>{
        const body = document.createElement("div");
        body.classList.add("portfolio-container");

        

        const searchContainer = document.createElement("div")
                searchContainer.innerHTML = `
                <input
                    id="searchbar"
                    type="search"
                    placeholder="Inserta nombre ciudad"
                    aria-label="Inserta nombre ciudad"
                >
                `;
        body.appendChild(searchContainer)


        const cardContainer = document.createElement("div");
        cardContainer.classList.add("projects-grid");

        body.appendChild(cardContainer)

        const inputSearch = searchContainer.querySelector("#searchbar");
        
       inputSearch.addEventListener("keyup", e =>{
            
            if (e.key === "Enter") {
                if( localStorage.getItem(e.target.value) !== null){
                   const data= JSON.parse(localStorage.getItem(e.target.value))
                   console.log("DATA RECIBIDA localstorage:", data);

                    cardContainer.appendChild(cardsCreator([data]))




                }else{
                    fetchingClima(e.target.value)
                    .then(data => {
                        console.log("DATA RECIBIDA:", data);
                        historial.set(e.target.value,data)
                        localStorage.setItem(e.target.value,JSON.stringify(data))

                        cardContainer.appendChild(cardsCreator([data]))





                    })
                    .catch(error => {
                        throw new Error("Error", error);
                    });

                    
                }
            }
       })
        const h1 = document.createElement("h1")
        h1.textContent= "Favoritos:"
        body.appendChild(h1)

        const favoritoContainer = document.createElement("div");
        favoritoContainer.classList.add("projects-grid");
        favoritoContainer.appendChild(cardsCreator(JSON.parse(localStorage.getItem("favorites")) ?? []))
        body.appendChild(favoritoContainer)
        return body
        
    }

    const footerCreator =() =>{
        const footer = document.createElement("footer");
        footer.classList.add("portfolio-container");
        footer.innerHTML = `<h3>hecho con amor</h3>
                            <h5 href="#">©️Samuel Lara Enríquez</h5>`
        
        return footer;
    }
    

    function cardsCreator(array){
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("projects-grid");
        
        array.forEach(tiempo=>{
            const card = document.createElement("div");
            card.classList.add("project-card");

            const titulo = document.createElement("h4")
            titulo.classList.add("project-title");
            titulo.textContent= tiempo.name;
            card.appendChild(titulo)

            const clima = document.createElement("p")
            clima.classList.add("project-description");
            clima.textContent= tiempo.weather[0].main;
            card.appendChild(clima)
            const a = "a"
            a.toLowerCase
            const imagen = document.createElement("div")
            imagen.innerHTML= `<img src=/${tiempo.weather[0].main.toLowerCase() }.png alt=Imagen de${tiempo.weather[0].main} width=50 height=50></img>`
            card.appendChild(imagen)

            const temperatura = document.createElement("p")
            temperatura.classList.add("project-description");
            temperatura.textContent= `Temperatura:${tiempo.main.temp}F | Viento:${tiempo.wind.speed}`   ;
            card.appendChild(temperatura)

            cardContainer.appendChild(card)

                card.addEventListener("dblclick", () => {

                // crea el array si no existe
                const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];

                // 1. comprobar si ya existe en favoritos
                const yaExiste = favoritos.some(f => f.name === tiempo.name);

                if (yaExiste) {
                    console.log(`⚠️ '${tiempo.name}' ya está en favoritos.`);
                    return;
                }

                // 2. añadir el objeto entero
                favoritos.push(tiempo);

                // 3. guardar
                localStorage.setItem("favorites", JSON.stringify(favoritos));

                console.log(`✔️ Añadido a favoritos: ${tiempo.name}`);
            });

            card.addEventListener("contextmenu", (e) => {
                e.preventDefault()
                // crea el array si no existe
                const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];

                // 1. comprobar si ya existe en favoritos
                const yaExiste = favoritos.some(f => f.name === tiempo.name);
                //borrar el favorito
                if (yaExiste) {
                    const nuevaLista = favoritos.filter(f => f.name !== tiempo.name);

                    localStorage.setItem("favorites", JSON.stringify(nuevaLista));

                    console.log(`🗿 '${tiempo.name}' Elemento borrado.`);
                    return;
                }

                console.log(`El elemento no existe en favoritos`);
            });
            
        })
        return cardContainer;
    }


    function render  (){
        // //aqui decido donde pintar el objeto en el DOM
        const mainContainer= document.createElement("div")
        
        const v1Wrapper= document.createElement("div")
        v1Wrapper.appendChild(projectCreator(projectCreator()))
        mainContainer.appendChild(v1Wrapper)

        

        return mainContainer

    }

    return {
        render
    }

}