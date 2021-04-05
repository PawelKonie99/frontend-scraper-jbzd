import React from "react";
import styled from "styled-components";
import UserAddMeme from "../UserInterface/UserInterface";
import { Itheme } from "../../utils/theme";
import { Container, UsernameForm } from "./LoggedUserElements";

interface ILoggedUser {
  username: string;
}

const LoggedUser = ({ username }: ILoggedUser) => {
  return (
    <Container>
      <UsernameForm>Nazwa użytkownika: {username}</UsernameForm>
      <UserAddMeme />
    </Container>
  );
};

export default LoggedUser;
