import { weatherActions } from "./index";

export const initializeStore = (store) => {
  const storedFavourites = localStorage.getItem("favouriteCities");
  if (storedFavourites && storedFavourites.length > 0) {
    store.dispatch(weatherActions.setFavourites(JSON.parse(storedFavourites)));
  }
};
