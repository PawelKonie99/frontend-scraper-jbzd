import styled from "styled-components";
import { device } from "../../utils/sizeBreakpoints";

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
  color: ${({ theme }) => theme.colors.offWhite};
  background: ${({ theme }) => theme.colors.darkerBackground};

  @media ${device.tablet} { 
    padding: 1rem 2rem;
    margin: 0 1.5rem;
    font-size: 1.2rem;
}

@media ${device.mobileM} { 
    /* padding: 1rem 1.7rem; */
    margin: 0 0.8rem;
    font-size: 1.1rem;
}

@media ${device.mobileS} { 
    /* padding: 1rem 1.7rem; */
    margin: 0 0.6rem;
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
}
`;
