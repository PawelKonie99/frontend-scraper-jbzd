import { Itheme } from "../../utils/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${({ theme }: { theme: Itheme }) => theme.colors.background};
`;

export const UsernameForm = styled.p`
  color: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2rem;
  color: ${({ theme }: { theme: Itheme }) => theme.colors.darkerBackground};
`;
