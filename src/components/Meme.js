import React from "react";
import styled from "styled-components";

export const MemeContainer = styled.div`
  border: 2px solid black;
  width: 60%;
  margin-bottom: 10rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: black;
`;

export const Photo = styled.img``;

{
  /* <h1>{title}</h1> */
}
{
  /* <img src={jpg} alt={title} /> */
}

const Meme = ({ title, jpg }) => {
  return (
    <MemeContainer>
      <Title>{title}</Title>
      <Photo src={jpg} alt={title} />
    </MemeContainer>
  );
};

export default Meme;
