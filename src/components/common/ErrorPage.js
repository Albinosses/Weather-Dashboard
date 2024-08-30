import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const StyledLink = styled(Link)`
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: #f0f3f4;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
    color: black;
    background-color: lightgrey;
  }
`;

const ErrorModal = () => {
  const error = useRouteError();

  return (
    <ErrorWrapper>
      <h1>An error occured</h1>
      {error.data && <p>{error.data.message}</p>}
      <StyledLink to="/">Go back</StyledLink>
    </ErrorWrapper>
  );
};

export default ErrorModal;
