import { weatherActions } from "../../store";
import { json } from "react-router-dom";
import { fetchWeather } from "../../api/funcs/fetchWeather";
import { useLoaderData, useParams, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import FavoriteToggle from "../common/FavouriteToggle";
import CurrentWeather from "../weather/CurrentWeather";
import WeatherForecast from "../weather/WeatherForecast";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: #f0f3f4;
  text-decoration: none;
  color: black;
  $:hover {
    background-color: lightgrey;
  }
`;

const WeatherWrapper = styled.div`
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const CityWeatherDetail = () => {
  const location = useLocation();
  const { city } = useParams();
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  const selectedCity = location.state;
  const favourites = useSelector((state) => state.favourites);

  const [isFavourite, setIsFavourite] = useState(
    favourites.find(
      (city) => JSON.stringify(city) === JSON.stringify(selectedCity)
    )
  );

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
    <>
      <StyledLink to="/">&larr; Go back</StyledLink>
      <WeatherWrapper>
        <h1>Current Weather in {city}</h1>
        <FavoriteToggle
          isFavourite={isFavourite}
          onToggle={handleToggleFavourite}
        />
        <CurrentWeather weather={loaderData.current} />
        <WeatherForecast forecast={loaderData.daily} />
      </WeatherWrapper>
    </>
  );
};

export default CityWeatherDetail;

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
