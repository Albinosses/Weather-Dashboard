import styles from "./ForecastItem.module.css";

const ForecastItem = ({ day }) => {
  const date = new Date(day.dt * 1000);

  return (
    <div className={styles.container}>
      <h1>{date.toLocaleDateString("en-US", { weekday: "long" })}</h1>
      <h2>{date.toLocaleDateString()}</h2>
      <h3>
        <i>{day.weather[0].description}</i>
      </h3>
      <p>
        Temp: {Math.round(day.temp.min)}/{Math.round(day.temp.max)}°C
      </p>
      <p>Humidity: {day.humidity}%</p>
      <p>Wind Speed: {day.wind_speed} m/s</p>
    </div>
  );
};

export default ForecastItem;
