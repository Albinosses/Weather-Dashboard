import apiRequest from "../hooks/apiRequest";

export const fetchCities = async (query) => {
  const { data, error } = await apiRequest(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_API_KEY}`,
    "GET",
    {}
  );

  return {
    data,
    error,
  };
};
