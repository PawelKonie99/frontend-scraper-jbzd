import React, { FC } from "react";
import styled from "styled-components";
import LoginModal from "../LoginModal";
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
  return (
    <Container>
      <ButtonsWrapper>
        <LoginModal />
        <RegisterModal />
      </ButtonsWrapper>
    </Container>
  );
};

export default LoginAndRegister;
