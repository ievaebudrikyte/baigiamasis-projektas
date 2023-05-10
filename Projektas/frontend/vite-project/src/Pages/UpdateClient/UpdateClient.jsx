import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./../../components/atoms/Button";
import {
  StyledFormWrapper,
  StyledForm,
  StyledTitle,
  StyledInputWrapper,
  StyledInput,
  StyledButtonWrapper,
  StyledPageWrapper,
  StyledCloseButtonContainer,
} from "./styles";
import { TfiClose } from "react-icons/tfi";

const UpdateClient = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [client, setClient] = useState({
    name: "",
    surname: "",
    email: "",
    DOB: "",
  });

  const { name, surname, email, DOB } = client;

  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadClient();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/clients/${id}`, client);
    navigate("/");
  };

  const loadClient = async () => {
    const result = await axios.get(`http://localhost:5000/api/clients/${id}`);
    setClient(result.data);
  };

  const exitUpdate = (e) => {
    if (e.target === e.currentTarget) {
      navigate("/");
    }
  };

  return (
    <div>
      <StyledPageWrapper onClick={exitUpdate}>
        <StyledCloseButtonContainer>
          <span>
            <TfiClose />
          </span>
        </StyledCloseButtonContainer>
        <StyledFormWrapper>
          <StyledForm onSubmit={(e) => onSubmit(e)}>
            <StyledTitle>Update client information</StyledTitle>
            <StyledInputWrapper>
              <StyledInput
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledInput
                type={"text"}
                className="form-control"
                placeholder="Enter your surname"
                name="surname"
                value={surname}
                onChange={(e) => onInputChange(e)}
              />
            </StyledInputWrapper>
            <StyledInputWrapper className="mb-3">
              <StyledInput
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledInput
                type={"date"}
                className="form-control"
                placeholder="Enter your DOB"
                name="DOB"
                value={DOB}
                onChange={(e) => onInputChange(e)}
              />
            </StyledInputWrapper>
            <StyledButtonWrapper>
              <Button type="submit" text="SUBMIT" />
            </StyledButtonWrapper>
          </StyledForm>
        </StyledFormWrapper>
      </StyledPageWrapper>
    </div>
  );
};

export default UpdateClient;
