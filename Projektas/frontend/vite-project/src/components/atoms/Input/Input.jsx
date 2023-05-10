import { StyledInputWrapper, StyledInput } from "./styles";

const Input = (props) => {
  const { type, value, setValue, placeholder } = props;
  return (
    <StyledInputWrapper {...props}>
      <StyledInput
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        color="text"
        placeholder={placeholder}
      />
    </StyledInputWrapper>
  );
};
export default Input;
