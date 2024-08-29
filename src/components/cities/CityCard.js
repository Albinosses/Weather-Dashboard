import styles from "./CityCard.module.css";
import { Link } from "react-router-dom";

const CityCard = ({ city, index }) => {
  return (
    <>
      <Link
        className={styles.card}
        to={`/${city.name}?lon=${city.lon}&lat=${city.lat}`}
        state={city}
      >
        <h1>{city.name}</h1>
        <p>
          {city.state ? `${city.state}, ` : ""} {city.country}
        </p>
      </Link>
    </>
  );
};

export default CityCard;
