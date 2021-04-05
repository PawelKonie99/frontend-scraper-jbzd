import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${({ theme }: { theme: Itheme }) => theme.colors.background};
`;

export const ButtonsWrapper = styled.div`
  margin: 1rem;
  display: flex;
`;

export const ButtonAndInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
