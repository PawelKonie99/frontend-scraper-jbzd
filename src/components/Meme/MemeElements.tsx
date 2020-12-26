import styled from "styled-components";
import { device } from "../../utils/sizeBreakpoints";

export const MemeContainer = styled.div<{margin: string | undefined }>`
  max-width: 60%;
  margin-bottom: ${(props) => props.margin || "10rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${device.tablet} { 
    max-width: 80%;
}

@media ${device.mobileL} { 
    max-width: 95%;
}

`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.colors.darkerBackground};
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} { 
    font-size: 1.7rem;
}

@media ${device.mobileL} { 
  font-size: 1.5rem;
}

@media ${device.mobileS} { 
  font-size: 1.3rem;
}
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);
`;
