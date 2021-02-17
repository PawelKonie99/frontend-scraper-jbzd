import React from "react";
import styled from "styled-components";
import LoginModal from "../ValidationModal";
import RegisterModal from "../RegisterModal";

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
  const handleLogin = () => {
    console.log("elo");
  };

  const handleRegister = () => {
    console.log("elo");
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
