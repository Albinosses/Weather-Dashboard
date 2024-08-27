import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../store";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();

    dispatch(weatherActions.setSearchedCities(data));
  };

  return (
    <div style={{ padding: "1rem" }}>
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
  );
};

export default SearchBar;
