import CitiesList from "../cities/CitiesList";
import SearchBar from "../search-bar/SearchBar";
import styles from "./Root.module.css";
import Sidebar from "../side-bar/Sidebar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import CustomLoader from "../common/CustomLoader";

const HomePage = () => {
  const navigation = useNavigation();
  const [hasSearched, setHasSearched] = useState(false);
  const searchedCities = useSelector((state) => state.searchedCities);

  return (
    <>
      <div className={styles["root-container"]}>
        <Sidebar />
        <div className={styles.container}>
          <SearchBar onSearchSubmit={setHasSearched} />
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

export default HomePage;
