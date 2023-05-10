import styled from "styled-components";
export const StyledTable = styled.table`
  display: block;
  @media (min-width: 1024px) {
    border: 1px solid;
    border-collapse: collapse;
    background-color: var(--main-bg-color);
    border-radius: 5px;
    display: table;
    border: none;
    background-color: transparent;
  }

  tr,
  th,
  td,
  thead,
  tbody {
    display: block;
    border: 1px solid var(--mobile-table-border-color);
    color: var(--table-font-color);
    border-collapse: collapse;
    padding: 0.2rem;
    font-size: 0.5rem;
    min-width: 15rem;
    @media (min-width: 375px) {
      min-width: 20rem;
    }
    @media (min-width: 460px) {
      min-width: 28rem;
    }
    @media (min-width: 660px) {
      min-width: 36rem;
    }
    @media (min-width: 1024px) {
      min-width: 1rem;
      padding: 1rem;
      display: revert;
      border: none;
    }
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;

    border: 1px solid var(--mobile-table-border-color);
    color: var(--table-font-color);
    border-collapse: collapse;
    padding: 0;
    font-size: 0.5rem;
    @media (min-width: 1024px) {
      padding: 1rem;
      position: static;
      border: none;
    }
  }
  tr {
    border: 1px solid var(--mobile-table-border-color);
    @media (min-width: 1024px) {
      border: none;
    }
  }
  tbody {
    @media (min-width: 1024px) {
      background-color: var(--main-color-light);
    }
  }

  td {
    border: none;
    border-bottom: 1px solid var(--mobile-table-border-color-light);
    position: relative;
    padding-left: 50%;
    font-size: 0.5rem;
    @media (min-width: 375px) {
      font-size: 0.8rem;
    }
    @media (min-width: 1024px) {
      position: static;
      padding: 1rem 2rem;
      border: none;
    }
  }
  td:before {
    position: absolute;
    top: 1px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  td:nth-of-type(1):before {
    content: "Name";
    @media (min-width: 1024px) {
      display: none;
    }
  }
  td:nth-of-type(2):before {
    content: "Surname";
    @media (min-width: 1024px) {
      display: none;
    }
  }
  td:nth-of-type(3):before {
    content: "Email";
    @media (min-width: 1024px) {
      display: none;
    }
  }
  td:nth-of-type(4):before {
    content: "Date of birth";
    @media (min-width: 1024px) {
      display: none;
    }
  }
  td:nth-of-type(5):before {
    content: "";
    @media (min-width: 1024px) {
      display: none;
    }
  }
  td:nth-of-type(6):before {
    content: "";
  }
`;

export const StyledPaginationButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.1em 1.5em;
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 0.5rem;
  justify-content: center;
`;

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledTableWrapper = styled.div`
  /* max-width: 80%; */
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    gap: 1rem;
    button {
      width: 4rem;
    }
  }
`;
export const StyledButtonWrapper = styled.div`
  width: 100%;
  background-color: var(--main-color-light);
  height: 2rem;
  display: flex;
  justify-content: center;
`;
