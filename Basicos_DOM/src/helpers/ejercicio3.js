//imports

import { peliculas } from "../db/db";
import fetching from "../utils/fetching.js"

//importar variables vite
const PORT =  import.meta.env.VITE_PORT;
const URL= import.meta.env.VITE_URL;
const URL_PORT = `${URL}:${PORT}`

export function CreateEjercicio3(){
    
    const noFetching = () => peliculas;
    const getStars = (rating) => {
        const numStars = Math.floor(rating/2);
        return "⭐".repeat(numStars)
    };

    const renderMoviesGrid= (moviesarray)=>{
        const container = document.createElement("div");
        container.classList.add("movies-container");
        moviesarray.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");
            //titulo
            const title = document.createElement("h3")
            title.classList.add("movie-title")
            title.textContent= movie.titulo
            card.appendChild(title)
            //año
            const year = document.createElement("p")
            year.classList.add("movie-year")
            year.textContent= movie.año
            card.appendChild(year)
            //rating
            const rating = document.createElement("p")
            rating.classList.add("movie-rating")
            rating.textContent= `${getStars(movie.rating)} ${movie.rating}/10`
            card.appendChild(rating)
            //foto
            const imagen = document.createElement("img")


            container.appendChild(card)

        });
        return container;
    }
    

    function Fetching(){
        return  fetching("peliculas")
       
    }
    

    function render(){
        //aqui decido donde pintar el objeto en el DOM
            const mainContainer= document.createElement("div")

            // versión sincrona

            const v1Wrapper= document.createElement("div")
            v1Wrapper.innerHTML="<h3> Versión Síncrona </h3>"
            v1Wrapper.appendChild(renderMoviesGrid(noFetching()));
            mainContainer.appendChild(v1Wrapper)
            // version asincrona
            const v2Wrapper= document.createElement("div")
            v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
            Fetching()
                .then((data) => {
                    v2Wrapper.appendChild(renderMoviesGrid(data))
                })
                .catch(err=> {
                    console.log("Error", err)
                    throw err;
                })
            mainContainer.appendChild(v2Wrapper)

            return mainContainer
        }
       

    

   


    //retorno el objeto
    return {
        render,
    };

}