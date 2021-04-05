import React from "react";
import styled from "styled-components";
import UserAddMeme from "../UserAddMeme/UserInterface";
import { Itheme } from "../../utils/theme";
import { Container, UsernameForm } from "./LoggedUserElements";

interface ILoggedUser {
  username: string;
}

export const LoggedUser = ({ username }: ILoggedUser) => {
  return (
    <Container>
      <UsernameForm>Nazwa użytkownika: {username}</UsernameForm>
      <UserAddMeme />
    </Container>
  );
};
