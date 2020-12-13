import styled from "styled-components";

export const MemeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  background: ${({ theme }) => theme.colors.background};
`;
