import CityCard from "./CityCard";
import style from "./CitiesList.module.css";

const CitiesList = ({ cities }) => {
  return (
    <div className={style.container}>
      {cities.map((city, idx) => (
        <CityCard key={idx} city={city} index={idx} />
      ))}
    </div>
  );
};

export default CitiesList;
