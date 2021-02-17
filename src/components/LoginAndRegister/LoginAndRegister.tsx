import React from "react";
import styled from "styled-components";
import LoginModal from "../ValidationModal";
import validationService from "../../services/userValidation";
import IUser from "../../interfaces/UserInterface";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.background};
`;

const ButtonsWrapper = styled.div`
  margin: 1rem;
  display: flex;
`;

const LoginAndRegister = () => {
  const handleLogin = async (credentials: IUser) => {
    try {
      const loggedUser = await validationService.login(credentials);
    } catch (e) {
      console.log("Error while login");
    }
  };

  const handleRegister = async (credentials: IUser) => {
    console.log("elko");
    await validationService.register(credentials);
  };

  return (
    <Container>
      <ButtonsWrapper>
        <LoginModal
          title={"Zaloguj się"}
          operationType={"Logowanie"}
          handleValidation={handleLogin}
        />
        <LoginModal
          title={"Zarejestruj się"}
          operationType={"Rejestracja"}
          handleValidation={handleRegister}
        />
      </ButtonsWrapper>
    </Container>
  );
};

export default LoginAndRegister;
