import CityCard from "./CityCard";
import { useSelector } from "react-redux";

const CitiesList = () => {
  const searchedCities = useSelector((state) => state.searchedCities);

  console.log(searchedCities);

  return (
    <>
      {searchedCities.map((city, idx) => (
        <CityCard key={idx} city={city} index={idx} />
      ))}
    </>
  );
};

export default CitiesList;
