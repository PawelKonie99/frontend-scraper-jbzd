import { Itheme } from "../../utils/theme";
import styled from "styled-components";

export const ButtonStyle = styled.button.attrs((props) => ({
  color: props.color,
}))`
  padding: 0.4rem 1rem;
  margin: 0.3rem;
  border-radius: 3px;
  color: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};
  background: ${(props) =>
    props.color
      ? props.color
      : ({ theme }: { theme: Itheme }) => theme.colors.darkBlue};
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.color
        ? props.color
        : ({ theme }: { theme: Itheme }) => theme.colors.darkBlue};
    background: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};
    transition: 0.3s;
  }
`;
