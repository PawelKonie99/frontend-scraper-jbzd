import React from "react";
import styled from "styled-components";
import { Itheme } from "../../utils/theme";
import { ButtonStyle } from "./ButtonElements";

interface IButton {
  text: string;
  onClick?: () => void;
  onSubmit?: any;
  type?: string;
  color?: any; //todo put here string
}

const Button = ({ text, onClick, color }: IButton) => {
  return (
    <ButtonStyle color={color} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
