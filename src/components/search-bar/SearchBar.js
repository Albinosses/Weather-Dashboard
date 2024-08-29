import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../store";
import { fetchCities } from "../../api/funcs/fetchCities";

const SearchBar = ({ onSearchSubmit }) => {
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

    const { data, error } = await fetchCities(query);

    if (error) {
      setError(error);
      onSearchSubmit(false);
    } else {
      dispatch(weatherActions.setSearchedCities(data));
      onSearchSubmit(true);
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
