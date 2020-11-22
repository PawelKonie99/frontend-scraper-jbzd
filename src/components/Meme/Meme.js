import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import singleMemePage from "../../pages/SingleMemePage";

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
