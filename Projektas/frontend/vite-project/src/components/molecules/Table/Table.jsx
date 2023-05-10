import React from "react";
import Button from "../../atoms/Button";
import { StyledButtonContainer } from "./styles";

const Table = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.DOB}</td>
      <StyledButtonContainer>
        <Button style={buttonStyles} text={"Update"} />
        <Button id={data.id} style={buttonStyles} text={"Delete"} />
      </StyledButtonContainer>
    </tr>
  );
};

export default Table;
