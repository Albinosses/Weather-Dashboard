import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import CityDetail from "./components/CityDetail";
import { loader as cityDetailLoader } from "./components/CityDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/:city",
    element: <CityDetail />,
    loader: cityDetailLoader,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favouriteCities");
    if (storedFavourites && storedFavourites.length > 0) {
      dispatch(weatherActions.setFavourites(JSON.parse(storedFavourites)));
    }
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
