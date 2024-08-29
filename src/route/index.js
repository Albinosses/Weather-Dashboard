import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import CityDetail, {
  loader as cityDetailLoader,
} from "../components/cities/CityDetail";
import ErrorPage from "../components/common/ErrorPage";
import { CITY_PATH, HOME_PATH } from "./path";

export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <HomePage />,
  },
  {
    path: CITY_PATH,
    element: <CityDetail />,
    loader: cityDetailLoader,
    errorElement: <ErrorPage />,
  },
]);
