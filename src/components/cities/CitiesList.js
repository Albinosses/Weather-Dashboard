import CityCard from "./CityCard";
import styled from "styled-components";

const CitiesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CitiesList = ({ cities }) => {
  return (
    <CitiesListWrapper>
      {cities.map((city, idx) => (
        <CityCard key={idx} city={city} index={idx} />
      ))}
    </CitiesListWrapper>
  );
};

export default CitiesList;
