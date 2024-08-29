import apiRequest from "../apiRequest";

export const fetchWeather = async (lat, lon) => {
  const { data, error } = await apiRequest(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    "GET",
    {}
  );

  return {
    data,
    error,
  };
};
