import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import singleMemePage from "../../pages/SingleMemePage";

export const MemeContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.black};
  width: 60%;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Photo = styled.img`
  width: 80%;
  margin-bottom: 2rem;
`;

const pickSingleMeme = (history, title, url, id) => {
  console.log(title, url, id);
  <Link to={`/${id}`}></Link>;
  history.push(`/${id}`);
};

const Meme = ({ title, url, id }) => {
  return (
    <Route
      render={({ history }) => (
        <MemeContainer onClick={() => pickSingleMeme(history, title, url, id)}>
          <Title>{title}</Title>
          <Photo src={url} alt={title} />
        </MemeContainer>
      )}
    />
  );
};

export default Meme;
