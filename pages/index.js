import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";

export const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const configResponse = await fetch("/cityConfig.json");
                const cityConfig = await configResponse.json();
                const weatherResponse = await fetch("/api/data");
                const weatherData = await weatherResponse.json();
                const combinedData = {
                    ...cityConfig,
                    ...weatherData,
                    city: cityConfig.city,
                };
                setWeatherData(combinedData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        // Actualiser les information du météo chaque heure
        fetchData();
        const intervalId = setInterval(fetchData, 3600000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {weatherData ? (
                <WeatherCard weatherData={weatherData} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default App;
