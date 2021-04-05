import { Itheme } from "../../utils/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 1rem;
`;
