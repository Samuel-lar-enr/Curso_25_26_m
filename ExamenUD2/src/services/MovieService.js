const moviesCache = []
const URL="http://192.168.50.120:1492/api/movies"
const fetchmovies = async() =>{
    try {
        const response = await fetch(URL)
        if(!response.ok){
            throw new Error("Error fetching")
        }
        const data = await response.json()
        moviesCache= data.results
    } catch (error) {
        
    }
}

const getMovies = ()=>{
    return [...moviesCache]
}

const getMoviesId=(id)=>{
    return moviesCache.find(movie => movie.id === id)
}

export const movieService= {
    fetchmovies,
    getMovies,
    getMoviesId,
}