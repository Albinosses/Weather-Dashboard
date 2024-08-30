import { useState } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../store";
import { fetchCities } from "../../api/funcs/fetchCities";
import styled from "styled-components";

const StyledSearchBlock = styled.div`
  margin: auto;
  width: 20rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  width: 15rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  width: 5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #f0f3f4;
  color: #111618;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #e0e3e4;
  }
`;

const StatusContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLoadingIndicator = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const StyledErrorIndicator = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #d9534f;
  border: 1px solid #d9534f;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #f8d7da;
`;

const SearchBar = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    if (!query) {
      setLoading(false);
      setError({ message: "Please enter a city name" });
      return;
    }

    const { data, error } = await fetchCities(query);

    if (error) {
      setError(error);
      onSearchSubmit(false);
    } else {
      dispatch(weatherActions.setSearchedCities(data));
      onSearchSubmit(true);
    }

    setLoading(false);
  };

  return (
    <StyledSearchBlock>
      <SearchBarWrapper>
        <StyledInput
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChangeInput}
        />
        <StyledButton onClick={handleSubmit}>Search</StyledButton>
      </SearchBarWrapper>
      <StatusContainerWrapper>
        {isLoading && (
          <StyledLoadingIndicator>Loading...</StyledLoadingIndicator>
        )}
        {error && <StyledErrorIndicator>{error.message}</StyledErrorIndicator>}
      </StatusContainerWrapper>
    </StyledSearchBlock>
  );
};

export default SearchBar;
