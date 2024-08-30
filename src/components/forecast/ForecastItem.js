import styled from "styled-components";

const StyledForecastItem = styled.div`
  margin: 5px;
  width: 12rem;
  border-radius: 1rem;
  border: 2px solid black;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
`;

const ForecastItem = ({ day }) => {
  const date = new Date(day.dt * 1000);

  return (
    <StyledForecastItem>
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
    </StyledForecastItem>
  );
};

export default ForecastItem;
