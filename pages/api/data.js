import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    // Chemin vers le fichier de configuration
    const filePath = path.join(process.cwd(), "public", "cityConfig.json");
    const jsonConfig = fs.readFileSync(filePath);
    const cityConfig = JSON.parse(jsonConfig);

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m`;

    try {
        const getWeatherData = await fetch(url);
        const data = await getWeatherData.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
}
