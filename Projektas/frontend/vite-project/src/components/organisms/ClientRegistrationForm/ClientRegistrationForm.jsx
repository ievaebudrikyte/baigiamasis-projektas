import React from "react";
import axios from "axios";
import { useState } from "react";
import { StyledFormWrapper } from "./styles";
import Form from "../../molecules/Form";

const ClientRegistrationForm = ({ closeModal }) => {
  // const [successMessage, setSuccessMessage] = useState("");
  const [client, setClient] = useState({
    name: "",
    surname: "",
    email: "",
    DOB: "",
  });

  const inputs = [
    {
      type: "text",
      label: "Name",
      placeholder: "NAME",
      value: client.name,
      setValue: (value) => setClient((prev) => ({ ...prev, name: value })),
      required: true,
      errorMessage: "Required",
    },
    {
      type: "text",
      label: "Surname",
      placeholder: "SURNAME",
      value: client.surname,
      setValue: (value) => setClient((prev) => ({ ...prev, surname: value })),
      required: true,
      errorMessage: "Required",
    },
    {
      type: "email",
      label: "Email",
      placeholder: "EMAIL",
      value: client.email,
      setValue: (value) => setClient((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: "Required",
    },
    {
      type: "date",
      label: "DOB",
      placeholder: "DOB",
      value: client.DOB,
      setValue: (value) => setClient((prev) => ({ ...prev, DOB: value })),
      required: true,
      errorMessage: "Required",
    },
  ];

  const handleSubmit = async (e) => {
    await axios.post("http://localhost:5000/api/clients", client);
    closeModal();
    setSuccessMessage("Form submited successfully!");
  };
  // if (successMessage) {
  //   return <p>{successMessage}</p>;
  // }

  return (
    <div>
      <div>
        <StyledFormWrapper>
          <Form inputs={inputs} handleSubmit={handleSubmit} />
        </StyledFormWrapper>
      </div>
    </div>
  );
};

export default ClientRegistrationForm;
