import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "./store";
import { router } from "./route";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favouriteCities");
    if (storedFavourites && storedFavourites.length > 0) {
      dispatch(weatherActions.setFavourites(JSON.parse(storedFavourites)));
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
