import { StyledButton } from "./styles";

const Button = ({ action, text, color, id }) => {
  return (
    <StyledButton color={color} onClick={action} id={id}>
      {text}
    </StyledButton>
  );
};

export default Button;
