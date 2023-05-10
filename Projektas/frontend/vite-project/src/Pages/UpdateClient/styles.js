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
  background-color: var(--main-bg-color);
  padding-top: 1rem;
  padding: 3rem;
  border-radius: 1.375em;
`;
export const StyledFormWrapper = styled.div`
  min-height: 14rem;
  margin: 1rem;
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
  width: 15rem;
`;
export const StyledButtonWrapper = styled.div`
  width: 100%;
  color: var(--form-font-color);
  height: 2rem;
  display: flex;
  justify-content: center;
`;
export const StyledPageWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const StyledCloseButtonContainer = styled.div`
  position: fixed;
  top: 2em;
  right: 2em;
`;
