//crear una funcion que se le pase como parametro una cidad y automaticamente 
// devuelva temperatura , la humedad y viento  de ese instante

const VITE_API_OPENWEATHER= import.meta.env.VITE_API_OPENWEATHER;
const VITE_API_KEY= import.meta.env.VITE_API_KEY;

// https://api.openweathermap.org/data/2.5/weather?q=Granada&appid=feaecc4aeb098e1c7259459953b4e893


export  function temperaturaAtmosférica(ciudad='Granada'){
    const URL =`${VITE_API_OPENWEATHER}?q=${ciudad}&units=metric&lang?es%appid=${VITE_API_KEY}`;
    //petición de la api de openweather
   return fetch(URL)
        .then(response =>{ 
            if(!response.ok)
                throw new Error("No se pudo obtener los datos");
            return response.json();
        })
        .then(data => {
            console.log(`--------------------Clima de la Cieudad ${ciudad}----------------------`)
            console.log(`--Temperatura: ${ data.main.temp } ºC`)
            const arrayImg = ["☁️","🌦️","⛅","☀️"]
            const image= 0
            if(data.weather[0].main === "Clouds" || "Haze" || "Fog" )
                image = arrayImg[0]
            else if(data.weather[0].main === "Rain")
                image = arrayImg[1]
            else if(data.weather[0].main === "Drizzle")
                image = arrayImg[2]
            else if(data.weather[0].main === "Clear")
                image = arrayImg[3]
                
            const weather = data.weather[0].main
            const humedad=  Number(data.main.humidity)
            const viento= Number(data.wind.speed)
            console.log(`--Tiempo atmosferico= ${weather} - ${image}`)
            console.log(`--Humedad= ${humedad}%`)
            console.log(`--Viento= ${viento} km/h`)
            return data
        })
        .catch((error) => console.log("Error ...",error))
        .finally( () => console.log("FIN de la función de temperaturaAtmosférica"))

}