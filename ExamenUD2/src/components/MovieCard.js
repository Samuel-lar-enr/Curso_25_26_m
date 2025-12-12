import { Storage } from "../utils/storage"

export const createMovieCard = (movie)=>{
    const card = document.createElement("div")
    card.className="movie-card"
    // identificar cada card con un nombre unico
    card.dataset.movieId = movie.id
    // Esta en el local storage
    if(Storage.isWatched(movie.id)){
        card.classList.add("movie-watched")
    }
    const poster = document.createElement("img")
    poster.className="movie-poster"
    poster.src = movie.poster_path
    poster.alt = `http://192.168.50.120${movie.poster_path}`

    const info = document.createElement("div")
    info.className="movie-info"
    
    const title = document.createElement("h3")
    title.className="movie-title"
    title.textContent = movie.title

    const rating = document.createElement("p")
    rating.className="movie-rating"
    rating.textContent = movie.vote_average

    const releaseDate = document.createElement("p")
    releaseDate.className="movie-release-date"
    releaseDate.textContent = movie.release_date

    //ensamblamos todo
    info.appendChild(title)
    info.appendChild(rating)
    info.appendChild(releaseDate)
    card.appendChild(poster)
    card.appendChild(info)

    //eventos
    card.addEventListener("click",()=>{
        if(card.classList.contains("movie-watched")){
            card.classList.remove("movie-watched")
            Storage.removeWatchedMovies(movie.id)
        }else{
            card.classList.add("movie-watched")
            Storage.addWatchedMovies(movie.id)
        }
    })

    card.addEventListener("dblclick",()=>{
       card.remove()
    })

    card.addEventListener("contextmenu",(e)=>{
        e.preventDefault()
         if(card.classList.contains("movie-watched")){
            card.classList.remove("movie-watched")
            Storage.removeWatchedMovies(movie.id)
        }
        
    })

    return card
}