import CitiesList from "../cities/CitiesList";
import SearchBar from "../search-bar/SearchBar";
import Sidebar from "../side-bar/Sidebar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import CustomLoader from "../common/CustomLoader";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20rem;
  box-sizing: border-box;
`;

const SearchWrapper = styled.div`
  flex-grow: 1;
  margin: 10px;
  padding: 1rem;
  overflow-y: auto;
`;

const StyledParahraph = styled.p`
  text-align: center;
`;

const HomePage = () => {
  const navigation = useNavigation();
  const [hasSearched, setHasSearched] = useState(false);
  const searchedCities = useSelector((state) => state.searchedCities);

  return (
    <>
      <HomeWrapper>
        <Sidebar />
        <SearchWrapper>
          <SearchBar onSearchSubmit={setHasSearched} />
          {hasSearched && searchedCities.length === 0 ? (
            <StyledParahraph>
              No results. Please, check your spelling and try again.
            </StyledParahraph>
          ) : (
            <CitiesList cities={searchedCities} />
          )}
        </SearchWrapper>
      </HomeWrapper>
      {navigation.state === "loading" && <CustomLoader />}
    </>
  );
};

export default HomePage;
