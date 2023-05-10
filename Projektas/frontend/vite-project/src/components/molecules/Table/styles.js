import styled from "styled-components";
export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  @media (min-width: 1024px) {
    display: block;
    gap: 0;
    button {
      padding: 0.2rem;
      margin: 0.1rem;
      width: 3rem;
    }
  }
`;
