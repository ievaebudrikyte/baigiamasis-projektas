import { useState } from "react";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {
  StyledInputWrapper,
  StyledErrorMessage,
  StyledTitle,
  StyledButtonWrapper,
} from "./styles";

const Form = ({ inputs, handleSubmit }) => {
  const [notValid, setNotValid] = useState([]);

  const validateSubmit = (e) => {
    e.preventDefault();

    const NotValid = inputs.filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    if (!NotValid.length) {
      setNotValid([]);
      handleSubmit();
      refreshPage();
    } else {
      setNotValid(NotValid);
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <form onSubmit={validateSubmit}>
      <StyledTitle>Client registration</StyledTitle>
      {inputs.map((input) => (
        <StyledInputWrapper key={input.label}>
          <Input
            type={input.type}
            icon={input.icon}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
          />
          {notValid.find((x) => x.label === input.label) && (
            <StyledErrorMessage>{input.errorMessage}</StyledErrorMessage>
          )}
        </StyledInputWrapper>
      ))}
      <StyledInputWrapper>
        <StyledButtonWrapper>
          <Button
            color="black"
            action={() => {}}
            text="ADD NEW CLIENT"
            type="submit"
          />
        </StyledButtonWrapper>
      </StyledInputWrapper>
    </form>
  );
};

export default Form;
