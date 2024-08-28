import CitiesList from "./components/CitiesList";
import SearchBar from "./components/SearchBar";
import styles from "./Root.module.css";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";

const Root = () => {
  const searchedCities = useSelector((state) => state.searchedCities);

  return (
    <div className={styles["root-container"]}>
      <Sidebar />
      <div className={styles.container}>
        <SearchBar />
        {searchedCities.length === 0 ? (
          <p className={styles["no-results"]}>
            No results. Please, check your spelling and try again.
          </p>
        ) : (
          <CitiesList cities={searchedCities} />
        )}
      </div>
    </div>
  );
};

export default Root;
