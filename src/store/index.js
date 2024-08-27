import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedCities: [],
  selectedCity: [],
  cachedCities: [],
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
    setCachedCities(state, action) {
      state.cachedCities = action.payload;
    },
  },
});

const store = configureStore({
  reducer: weatherSlice.reducer,
});

export const weatherActions = weatherSlice.actions;
export default store;
