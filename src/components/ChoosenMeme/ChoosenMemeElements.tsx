import styled from "styled-components";

export const MemeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  padding: 4rem 0;
`;
