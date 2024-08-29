import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import CityWeatherDetail, {
  loader as cityDetailLoader,
} from "../components/cities/CityWeatherDetail";
import ErrorPage from "../components/common/ErrorPage";
import { CITY_PATH, HOME_PATH } from "./path";

export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <HomePage />,
  },
  {
    path: CITY_PATH,
    element: <CityWeatherDetail />,
    loader: cityDetailLoader,
    errorElement: <ErrorPage />,
  },
]);
