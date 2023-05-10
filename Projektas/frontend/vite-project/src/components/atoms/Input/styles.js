import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  margin: 0.5rem 0;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 0;
  font-size: 1rem;
  background-color: transparent;
  color: var(--form-font-color);

  &::placeholder {
    color: var(--form-font-color);
  }
`;
