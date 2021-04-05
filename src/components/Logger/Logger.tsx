import React from "react";
import styled from "styled-components";

interface ILogger {
  text: string;
  color: string;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Text = styled.p`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 1rem;
`;

export const Logger = ({ text, color }: ILogger) => {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};
