import apiRequestHook from "../apiRequestHook";

export const fetchWeather = async (lat, lon) => {
  const { data, error } = await apiRequestHook(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    "GET",
    {}
  );

  return {
    data,
    error,
  };
};
