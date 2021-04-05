import React from "react";
import styled from "styled-components";
import { Container, Text } from "./LoggerElements";

interface ILogger {
  text: string;
  color: string;
}

export const Logger = ({ text, color }: ILogger) => {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};
