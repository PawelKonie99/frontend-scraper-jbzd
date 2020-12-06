import styled from "styled-components";

export const WebsiteChooseContainer = styled.div`
  display: flex;
`;

export const ChooseTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  margin: 3rem 0 2rem 0;
`;

export const WebsiteToChoose = styled.img`
  src: ${(props) => props.src};
  cursor: pointer;
  width: 150px;
  height: 65px;
  margin: 1rem 1rem 3rem 1rem;
  border-radius: 3px;
`;
