import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--form-font-color);

  outline: none;
  padding: calc(0.5em - 1px) 1em;
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  cursor: pointer;

  &:hover {
  }
`;
