export const getWeatherIcon = (code, isDay) => {
    const dayNight = isDay ? "d" : "n";
    const weatherIconMap = {
        0: `01${dayNight}`, // ensoleillé
        1: `02${dayNight}`, // Essentiellement clair
        2: `04${dayNight}`, // peu nouageux
        3: `03${dayNight}`, // ciel couvert
        10: `50${dayNight}`, // brouillard
        21: `10${dayNight}`, // Pluie (non verglaçante)
        22: `13${dayNight}`, // neige
        25: `10${dayNight}`, // Douches de pluie
        29: `11${dayNight}`, // orage
        50: `09${dayNight}`, // bruine
        51: `09${dayNight}`,
        52: `09${dayNight}`,
        53: `09${dayNight}`,
        54: `09${dayNight}`,
        55: `09${dayNight}`,
    };
    return weatherIconMap[code] || "defaultIcon";
};
export const weatherDescriptions = {
    0: "Clear sky", // ensoleillé
    1: "Mainly clear", // Essentiellement clair
    2: "Partly cloudy", // peu nouageaux
    3: "Overcast", // ciel couvert
    10: "Mist", // brouillard
    21: "Rain (not freezing)", //Pluie (non verglaçante)
    22: "Snow", // neige
    25: "Shower(s) of rain", // Douches de pluie
    29: "Thunderstorm with rain", // orage
    50: "Drizzle", // bruine
    51: "Drizzle",
    52: "Drizzle",
    53: "Drizzle",
    54: "Drizzle",
    55: "Drizzle",
};
