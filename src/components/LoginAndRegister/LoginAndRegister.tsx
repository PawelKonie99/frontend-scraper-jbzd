import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "../ValidationModal";
import validationService from "../../services/userValidation";
import IUser from "../../interfaces/UserInterface";
import { Logger } from "../Logger";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.background};
`;

const ButtonsWrapper = styled.div`
  margin: 1rem;
  display: flex;
`;

const ButtonAndInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginAndRegister = () => {
  const [registeredUser, setRegisteredUser] = useState<boolean>(false);
  const [registeredUserFailed, setRegisteredUserFailed] = useState<boolean>(
    false
  );

  const handleLogin = async (credentials: IUser) => {
    try {
      const loggedUser = await validationService.login(credentials);
    } catch (e) {
      console.log("Error while login");
    }
  };

  const handleRegister = async (credentials: IUser) => {
    const registeredUser = await validationService.register(credentials);

    registeredUser?.username
      ? setRegisteredUser(true)
      : setRegisteredUserFailed(true);

    setTimeout(() => {
      setRegisteredUser(false);
      setRegisteredUserFailed(false);
    }, 5000);
  };

  console.log(registeredUser);
  console.log(registeredUserFailed);

  return (
    <Container>
      <ButtonAndInfo>
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
        {registeredUser ? (
          <Logger text="Użytkownik zarejestrowany pomyślnie" color="green" />
        ) : null}
        {registeredUserFailed ? (
          <Logger text="Błąd podczas rejestracji" color="red" />
        ) : null}
      </ButtonAndInfo>
    </Container>
  );
};

export default LoginAndRegister;
