import { useSelector } from "react-redux";
import CitiesList from "./CitiesList";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div className={styles.container}>
      <h1>Favourites</h1>
      {favourites.length === 0 ? (
        <p>No Favourites...</p>
      ) : (
        <CitiesList cities={favourites} />
      )}
    </div>
  );
};

export default Sidebar;
