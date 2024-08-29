import { useLoaderData, useParams } from "react-router-dom";
import filled_star from "../../assets/filled_star.png";
import empty_star from "../../assets/empty_star.png";
import styles from "./CityDetail.module.css";
import ForecastItem from "../forecast/ForecastItem";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../store";
import { useState } from "react";
import { json } from "react-router-dom";
import { fetchWeather } from "../../api/funcs/fetchWeather";

const CityDetail = () => {
  const selectedCity = useSelector((state) => state.selectedCity);
  const favourites = useSelector((state) => state.favourites);

  const [isFavourite, setIsFavourite] = useState(
    favourites.find(
      (city) => JSON.stringify(city) === JSON.stringify(selectedCity)
    )
  );

  const { city } = useParams();
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  const handleToggleFavourite = () => {
    setIsFavourite((prevIsFavourite) => {
      if (prevIsFavourite) {
        dispatch(weatherActions.removeFavourite(selectedCity));
      } else {
        dispatch(weatherActions.addFavourite(selectedCity));
      }
      return !prevIsFavourite;
    });
  };

  return (
    <div className={styles.weatherContainer}>
      <h1>
        Current Weather in {city}{" "}
        <img
          className={styles.image_button}
          src={isFavourite ? filled_star : empty_star}
          alt="favourite"
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

  const { data, error } = await fetchWeather(lat, lon);

  if (error) {
    throw json({ message: "Could not fetch weather data" }, { status: 500 });
  } else {
    return data;
  }
};
