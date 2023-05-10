import styled from "styled-components";
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
export const StyledForm = styled.form`
  background-color: var(--main-color-light);
  padding-top: 1rem;
`;
export const StyledFormWrapper = styled.div`
  min-height: 14rem;
`;
export const StyledInputWrapper = styled.div`
  margin: 1rem 1rem 1rem 0;
`;
export const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 0;
  font-size: 1rem;
  background-color: transparent;
  color: var(--form-font-color);
`;
export const StyledButtonWrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
`;
