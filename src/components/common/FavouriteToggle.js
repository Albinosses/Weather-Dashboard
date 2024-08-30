import filled_star from "../../assets/filled_star.png";
import empty_star from "../../assets/empty_star.png";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  margin: auto;
  width: 10rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  &:hover {
    background-color: #f0f3f4;
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  margin-top: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledLabel = styled.p`
  width: 10rem;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

const FavouriteToggle = ({ isFavourite, onToggle }) => {
  return (
    <StyledButton onClick={onToggle}>
      <StyledImage
        src={isFavourite ? filled_star : empty_star}
        alt={isFavourite ? "Remove from favourites" : "Add to favourites"}
      />
      <StyledLabel>
        {isFavourite ? "Remove from favourites" : "Add to favourites"}
      </StyledLabel>
    </StyledButton>
  );
};

export default FavouriteToggle;
