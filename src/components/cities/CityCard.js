import styles from "./CityCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../store";

const CityCard = ({ city, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(weatherActions.setSelectedCity(city));
    navigate(`/${city.name}?lon=${city.lon}&lat=${city.lat}`);
  };

  return (
    <>
      <div className={styles.card} onClick={handleClick}>
        <h1>{city.name}</h1>
        <p>
          {city.state ? `${city.state}, ` : ""} {city.country}
        </p>
      </div>
    </>
  );
};

export default CityCard;
