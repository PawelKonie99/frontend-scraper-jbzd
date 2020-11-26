import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import singleMemePage from "../../pages/SingleMemePage";

export const MemeContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.black};
  max-width: 60%;
  margin-bottom: ${(props) => props.margin || "10rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

const pickSingleMeme = (history, id) => {
  <Link to={`/${id}`}></Link>;
  history.push(`/${id}`);
};

const Meme = ({ margin, title, url, id }) => {
  return (
    <Route
      render={({ history }) => (
        <MemeContainer
          margin={margin}
          onClick={() => pickSingleMeme(history, id)}
        >
          <Title>{title}</Title>
          <Image src={url} alt={title} />
        </MemeContainer>
      )}
    />
  );
};

export default Meme;
