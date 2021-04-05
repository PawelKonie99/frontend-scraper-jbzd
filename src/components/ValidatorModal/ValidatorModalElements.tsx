import { Itheme } from "../../utils/theme";
import styled from "styled-components";

export const ModalForm = styled.form`
  padding: 2rem 5rem;
  background: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }: { theme: Itheme }) => theme.colors.darkerBackground};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.4rem 2rem;
  border: none;
  border-radius: 3px;
`;
