import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: white;
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SyledCloseButtonContainer = styled.div`
  position: fixed;
  top: 2em;
  right: 2em;
`;

export const StyledModal = styled.div`
  padding: 3rem;
  border-radius: 1.375em;
  background-color: rgb(176 191 255 / 46%);
`;
export const StyledTitle = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  margin-top: 2rem;
  font-size: 1.5rem;
  @media (min-width: 500px) {
    font-size: 2.5rem;
    max-width: 22rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
