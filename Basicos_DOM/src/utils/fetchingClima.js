const fetchingClima = async (ciudad) => {
    const VITE_WHEATHER_API_KEY =
        import.meta.env.VITE_WHEATHER_API_KEY || "ea8aa6b37b708173c33be7f7295b9706";

    const VITE_WHEATHER_API_URL =
        import.meta.env.VITE_WHEATHER_API_URL || "https://api.openweathermap.org/data/2.5/weather";
    

    // URL correcta según la documentación
    const query = `${VITE_WHEATHER_API_URL}?q=${ciudad}&appid=${VITE_WHEATHER_API_KEY}`;

    try {
        const response = await fetch(query);

        if (!response.ok) {
            throw new Error("Error al hacer el fetching del tiempo");
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
};

export default fetchingClima;
