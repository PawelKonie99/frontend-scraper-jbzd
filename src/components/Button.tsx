import React, { FC } from "react";
import styled from "styled-components";

interface IButton {
  text: string;
  onClick?: () => void;
}

const ButtonStyle = styled.button`
  padding: 0.4rem 1rem;
  background: ${({ theme }) => theme.colors.darkBlue};
  margin: 0.3rem;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.offWhite};
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
    background: ${({ theme }) => theme.colors.offWhite};
    transition: 0.3s;
  }
`;

const Button: FC<IButton> = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export default Button;
