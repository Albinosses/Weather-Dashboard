import CityCard from "./CityCard";
import { useSelector } from "react-redux";
import style from "./CitiesList.module.css";

const CitiesList = ({ cities }) => {
  const searchedCities = useSelector((state) => state.searchedCities);

  console.log(searchedCities);

  return (
    <div className={style.container}>
      {cities.map((city, idx) => (
        <CityCard key={idx} city={city} index={idx} />
      ))}
    </div>
  );
};

export default CitiesList;
