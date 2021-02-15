import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button";
import Modal from "../LoginModal";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.background};
`;

const ButtonsWrapper = styled.div`
  margin: 1rem;
`;

const LoginAndRegister = () => {
  return (
    <Container>
      <ButtonsWrapper>
        <Modal />
        <Button text={"Login"} />
        <Button text={"Register"} />
      </ButtonsWrapper>
    </Container>
  );
};

export default LoginAndRegister;
