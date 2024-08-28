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
        <CitiesList cities={searchedCities} />
      </div>
    </div>
  );
};

export default Root;
