import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../store";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!query) {
        throw new Error("Please enter a city name.");
      }

      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data. Please try again.");
      }

      const data = await response.json();

      dispatch(weatherActions.setSearchedCities(data));
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChangeInput}
          className={styles.searchInput}
        />
        <button className={styles.searchButton} onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className={styles.statusContainer}>
        {isLoading && <div className={styles.loadingIndicator}>Loading...</div>}
        {error && <div className={styles.errorMessage}>{error.message}</div>}
      </div>
    </div>
  );
};

export default SearchBar;
