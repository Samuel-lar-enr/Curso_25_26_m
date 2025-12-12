const KEY = "vistas"
const save = (movies)=>{
    localStorage.setItem(KEY,JSON.stringify(movies))
}
const getWatchedMovies = ()=>{
   const response= localStorage.getItem(KEY);
   if(!response){
        return  []
   }
   try {
     return JSON.parse(response)
   } catch (error) {
    return []
   }

}
const addWatchedMovies = (movieId)=>{
    const movies = getWatchedMovies() 
    if(!movies.includes(movieId)){
        movies.push(movieId)
    }
    save(movies)
}
const removeWatchedMovies = (movieId)=>{
    const movies = getWatchedMovies()
    const index = movies.indexOf(movieId) 
    if(index !== -1){
        movies.splice(index,1)
    }
    save(movies)
}

const isWatched = (movieId) =>{
    const movies = getWatchedMovies()
    movies.includes(movieId)
}

export const Storage = {
    getWatchedMovies,
    addWatchedMovies,
    removeWatchedMovies,
    isWatched,
};