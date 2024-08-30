import { useSelector } from "react-redux";
import CitiesList from "../cities/CitiesList";
import styled from "styled-components";

const FavouritesWrapper = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100vh;
  border-right: 1.5px solid black;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
`;

const Sidebar = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <FavouritesWrapper>
      <h1>Favourites</h1>
      {favourites.length === 0 ? (
        <p>No Favourites...</p>
      ) : (
        <CitiesList cities={favourites} />
      )}
    </FavouritesWrapper>
  );
};

export default Sidebar;
