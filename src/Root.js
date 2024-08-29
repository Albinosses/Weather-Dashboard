import CitiesList from "./components/CitiesList";
import SearchBar from "./components/SearchBar";
import styles from "./Root.module.css";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import CustomLoader from "./components/CustomLoader";

const Root = () => {
  const navigation = useNavigation();
  const [hasSearched, setHasSearched] = useState(false);
  const searchedCities = useSelector((state) => state.searchedCities);

  const handleSearchSubmit = () => {
    setHasSearched(true);
  };

  return (
    <>
      <div className={styles["root-container"]}>
        <Sidebar />
        <div className={styles.container}>
          <SearchBar onSearchSubmit={handleSearchSubmit} />
          {hasSearched && searchedCities.length === 0 ? (
            <p className={styles["no-results"]}>
              No results. Please, check your spelling and try again.
            </p>
          ) : (
            <CitiesList cities={searchedCities} />
          )}
        </div>
      </div>
      {navigation.state === "loading" && <CustomLoader />}
    </>
  );
};

export default Root;
