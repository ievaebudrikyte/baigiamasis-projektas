import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  margin: 1rem 1rem 1rem 0;
`;
export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledErrorMessage = styled.p`
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 0.7rem;
  font-weight: 400;
`;
export const StyledTitle = styled.h1`
  font-family: var(--header-font-family);
  font-weight: 200;
  margin-top: 2rem;
  font-size: 1.5rem;
  @media (min-width: 500px) {
    font-size: 2.5rem;
    max-width: 22rem;
  }
`;
export const StyledButtonWrapper = styled.div`
  width: 100%;

  color: var(--form-font-color);
  height: 2rem;
  display: flex;
  justify-content: center;
`;
