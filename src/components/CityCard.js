import styles from "./CityCard.module.css";
import { useNavigate } from "react-router-dom";

const CityCard = ({ city, index }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${city.name}?lon=${city.lon}&lat=${city.lat}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h1>{city.name}</h1>
      <p>
        {city.state ? `${city.state}, ` : ""} {city.country}
      </p>
    </div>
  );
};

export default CityCard;
