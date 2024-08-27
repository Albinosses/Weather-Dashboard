import { useLoaderData, useParams } from "react-router-dom";
import filled_star from "../assets/filled_star.png";
import empty_star from "../assets/empty_star.png";
import styles from "./CityDetail.module.css";
import ForecastItem from "./ForecastItem";

const CityDetail = () => {
  const { city } = useParams();
  const loaderData = useLoaderData();

  let currentfavourite = false;

  const handleToggleFavourite = () => {};

  console.log(loaderData);

  return (
    <div className={styles.weatherContainer}>
      <h1>
        Current Weather in {city}{" "}
        <img
          className={styles.image_button}
          src={currentfavourite ? filled_star : empty_star}
          alt="filled star"
          onClick={handleToggleFavourite}
        />
      </h1>

      <div className={styles.weatherInfo}>
        <h3>
          <i>{loaderData.current.weather[0].description}</i>
        </h3>
        <p>Temperature: {Math.round(loaderData.current.temp)}°C</p>
        <p>Humidity: {loaderData.current.humidity}%</p>
        <p>Wind Speed: {loaderData.current.wind_speed} m/s</p>
      </div>
      <br />
      <h1>5-Day Forecast</h1>
      <div className={styles.forecastContainer}>
        {loaderData.daily.slice(0, 5).map((day, idx) => (
          <ForecastItem key={idx} day={day} />
        ))}
      </div>
    </div>
  );
};

export default CityDetail;

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");

  return await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
};
