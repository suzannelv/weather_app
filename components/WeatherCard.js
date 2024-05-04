import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./WeatherCard.module.css";
import {
    weatherDescriptions,
    getWeatherIcon,
} from "../services/weatherIconMap";
import {
    faArrowLeft,
    faDroplet,
    faLocationDot,
    faTemperature1,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ weatherData }) => {
    const {
        city,
        current_weather: { temperature, weathercode, is_day },
        hourly,
    } = weatherData;

    const recentHumidity =
        hourly &&
        hourly.relative_humidity_2m &&
        hourly.relative_humidity_2m.length > 0
            ? hourly.relative_humidity_2m[
                  hourly.relative_humidity_2m.length - 1
              ]
            : "Data not available";
    // Afficher les icônes et les descriptions correspondantes en fonction du code météo en temps réel.
    const iconCode = getWeatherIcon(weathercode, is_day);
    const weatherIcon = `/icons/${iconCode}.svg`;
    const weatherDescription =
        weatherDescriptions[weathercode] || "Weather not available";

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={styles.arrowIcon}
                />
                Weather App
            </div>
            <Image
                src={weatherIcon}
                alt="weather icon"
                width={150}
                height={150}
            />
            <div className={styles.temperature}>{temperature}°C</div>
            <div className={styles.description}>{weatherDescription}</div>
            <div className={styles.city}>
                <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.locationIcon}
                />
                Arrondissement de {city}, FR
            </div>
            <div className={styles.footer}>
                <div className={styles.detailItem}>
                    <FontAwesomeIcon
                        icon={faTemperature1}
                        className={styles.detailIcon}
                    />
                    {temperature}°C
                    <br />
                    Feels like
                </div>
                <div className={styles.detailItem}>
                    <FontAwesomeIcon
                        icon={faDroplet}
                        className={styles.detailIcon}
                    />
                    {recentHumidity}%
                    <br />
                    Humidity
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
