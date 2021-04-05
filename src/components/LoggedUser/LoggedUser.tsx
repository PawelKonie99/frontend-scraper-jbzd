import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.background};
`;

const UsernameForm = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2rem;
  color: ${({ theme }) => theme.colors.darkerBackground};
`;

interface ILoggedUser {
  username: string;
}

export const LoggedUser = ({ username }: ILoggedUser) => {
  return (
    <Container>
      <UsernameForm>Nazwa użytkownika: {username}</UsernameForm>
    </Container>
  );
};
