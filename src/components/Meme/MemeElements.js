import styled from "styled-components";

export const MemeContainer = styled.div`
  max-width: 60%;
  margin-bottom: ${(props) => props.margin || "10rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.colors.darkerBackground};
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
`;
