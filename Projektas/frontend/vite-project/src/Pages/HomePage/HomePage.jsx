import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/atoms/Button";
import Modal from "../../components/molecules/Modal/Modal";
import ClientRegistrationForm from "./../../components/organisms/ClientRegistrationForm";
import {
  StyledHomePage,
  StyledTableWrapper,
  StyledPaginationWrapper,
  StyledPaginationButton,
  StyledTable,
  StyledButtonContainer,
  StyledButtonWrapper,
} from "./styles";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function HomePage() {
  const [clients, setClients] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { id } = useParams();

  useEffect(() => {
    loadClients();
  }, []);

  const submit = (id) => {
    confirmAlert({
      title: "Delete",
      message: "Are you sure want to delete this data?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteClient(id),
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
  };

  const loadClients = async () => {
    const result = await axios.get("http://localhost:5000/api/clients");
    setClients(result.data);
  };

  const deleteClient = async (id) => {
    await axios.delete(`http://localhost:5000/api/clients/${id}`);
    loadClients();
  };
  const generatePagination = () => {
    return Array(Math.ceil(clients.length / itemsPerPage))
      .fill()
      .map((_, i) => i + 1)
      .filter((x, i, arr) => {
        if (x === 1) {
          return x;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 2 === currentPage ||
          x + 1 === currentPage
        ) {
          return x;
        } else if (x === currentPage) {
          return x;
        } else if (x === arr.length) {
          return x;
        }
      })
      .map((x) => (
        <StyledPaginationButton key={x} onClick={() => setCurrentPage(x)}>
          {x}
        </StyledPaginationButton>
      ));
  };
  // const mapped = displayData.map((client) => Object.keys(client).slice(1, 5));
  return (
    <StyledHomePage>
      <StyledButtonWrapper>
        <Button text="Register new client" action={openModal} />
        {isOpen && (
          <Modal onClose={closeModal}>
            <ClientRegistrationForm closeModal={closeModal} />
          </Modal>
        )}
      </StyledButtonWrapper>
      <StyledTableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {clients
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((client) => (
                <tr>
                  <td>{client.name}</td>
                  <td>{client.surname}</td>
                  <td>{client.email}</td>
                  <td>{client.DOB}</td>
                  <StyledButtonContainer>
                    <Link to={`/updateclient/${client._id}`}>
                      <Button text="Update"></Button>
                    </Link>

                    <Button
                      action={() => submit(client._id)}
                      text="Delete"
                    ></Button>
                  </StyledButtonContainer>
                </tr>
              ))}
          </tbody>
        </StyledTable>
        <StyledPaginationWrapper>
          {generatePagination()}
        </StyledPaginationWrapper>
      </StyledTableWrapper>
    </StyledHomePage>
  );
}
