import styled from "styled-components";

export const MemesContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 10rem;
`;

export const DirectionButton = styled.button`
  padding: 1rem 4rem;
  margin: 0 2rem;
  border: none;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkerBackground};
  background: ${({ theme }) => theme.colors.elements};
`;
