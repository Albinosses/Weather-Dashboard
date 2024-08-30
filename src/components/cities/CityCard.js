import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 15rem;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  border: 1.5px solid black;
  text-align: center;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: #e0e3e4;
  }
`;

const CityCard = ({ city, index }) => {
  return (
    <>
      <StyledLink
        to={`/${city.name}?lon=${city.lon}&lat=${city.lat}`}
        state={city}
      >
        <h1>{city.name}</h1>
        <p>
          {city.state ? `${city.state}, ` : ""} {city.country}
        </p>
      </StyledLink>
    </>
  );
};

export default CityCard;
