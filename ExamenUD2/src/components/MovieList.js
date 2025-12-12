export const MovieList = () => {
    const container = document.querySelector(".movie-list")
    container.innerHTML = ""

    const clear = () => {
        container.innerHTML = ""
    }
    
    const render = (movies) => {
        clear()
        if(movies.length === 0){
            const noResults = document.createElement("p")
            noResults.className = "no-results"
            noResults.textContent = "No hay películas"
            container.appendChild(noResults)
            return
        }
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie)
            container.appendChild(movieCard)
        })
    }
    return {
        render,
        clear
    }
    
}   