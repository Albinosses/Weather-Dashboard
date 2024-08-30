import styled from "styled-components";

const WeatherInfoWrapper = styled.div`
  font-size: 1.2rem;
  color: #333;
  p {
    margin: 10px 0;
  }
`;

const CurrentWeather = ({ weather }) => (
  <WeatherInfoWrapper>
    <h3>
      <i>{weather.weather[0].description}</i>
    </h3>
    <p>Temperature: {Math.round(weather.temp)}°C</p>
    <p>Humidity: {weather.humidity}%</p>
    <p>Wind Speed: {weather.wind_speed} m/s</p>
  </WeatherInfoWrapper>
);

export default CurrentWeather;
