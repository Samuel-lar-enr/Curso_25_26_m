/*Crear una funcion llamada getWeatheByCity(cityName){
}
2) Crear una función llamada parseWeatherData(data){
que devuelva=
ciudad
pais
temperatura
humedad
viento 
descripcion
}
*/

export const  getWeatheByCity=async (cityName)=>{
    const VITE_WHEATHER_API_KEY= 
    import.meta.env.VITE_WHEATHER_API_KEY 
    || "ea8aa6b37b708173c33be7f7295b9706";

    const VITE_WHEATHER_API_URL= 
    import.meta.env.VITE_WHEATHER_API_URL 
    || "https://api.openweathermap.org/data/2.5/weather";

    const query= `${VITE_WHEATHER_API_URL}?q=${cityName}&units=metric&appid=${VITE_WHEATHER_API_KEY}&lang=es`;

    return fetch(query)
        .then(res => res.json())
        .then(data =>{
            return parseWeatherData(data)
        })
        .catch(err=>{
            throw new Error("Error al hacer fetching:"+ err)}
        ) 
}

export const parseWeatherData=(data)=>{

    return {
        pais:       data.sys.country,
        ciudad:     data.name,
        clima:      data.weather[0].main,
        temperatura: data.main.temp,
        humedad:    data.main.humidity,
        viento:     data.wind.speed,
        descripcion: data.weather[0].description

    }

}