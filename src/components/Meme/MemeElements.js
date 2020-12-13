import styled from "styled-components";

export const MemeContainer = styled.div`
  max-width: 60%;
  margin-bottom: ${(props) => props.margin || "10rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);
`;
