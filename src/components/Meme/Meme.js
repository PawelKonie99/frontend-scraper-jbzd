import React from "react";
import { Link, Route } from "react-router-dom";
import { MemeContainer, Title, Image, TitleContainer } from "./MemeElements";

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
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <Image src={url} alt={title} />
        </MemeContainer>
      )}
    />
  );
};

export default Meme;
