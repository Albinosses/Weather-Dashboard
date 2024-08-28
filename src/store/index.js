import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedCities: [],
  selectedCity: undefined,
  favourites: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSearchedCities(state, action) {
      state.searchedCities = action.payload;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
    setFavourites(state, action) {
      state.favourites = action.payload;
    },
    addFavourite(state, action) {
      if (!state.favourites.includes(action.payload)) {
        state.favourites.push(action.payload);
      }
      localStorage.setItem("favouriteCities", JSON.stringify(state.favourites));
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(
        (city) => JSON.stringify(city) !== JSON.stringify(action.payload)
      );
      localStorage.setItem("favouriteCities", JSON.stringify(state.favourites));
    },
  },
});

const store = configureStore({
  reducer: weatherSlice.reducer,
});

export const weatherActions = weatherSlice.actions;
export default store;
