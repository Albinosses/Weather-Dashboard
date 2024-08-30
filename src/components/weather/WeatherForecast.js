import ForecastItem from "../forecast/ForecastItem";
import styled from "styled-components";

const WeatherForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const WeatherForecast = ({ forecast }) => {
  return (
    <>
      <h1>5-Day Forecast</h1>
      <WeatherForecastContainer>
        {forecast.slice(0, 5).map((day, idx) => (
          <ForecastItem key={idx} day={day} />
        ))}
      </WeatherForecastContainer>
    </>
  );
};

export default WeatherForecast;
