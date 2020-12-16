import React, { FC } from "react";
import { Link, Route } from "react-router-dom";
import { MemeContainer, Title, Image, TitleContainer } from "./MemeElements";

interface IMeme {
  key?: string;
  title?: string;
  url?: string;
  id?: string;
  margin?: string;
}



const Meme:FC<IMeme> = ({ margin, title, url, id }) => {

  const pickSingleMeme = (history: any, id: string | undefined) => {
    <Link to={`/${id}`}></Link>;
    history.push(`/${id}`);
  };
  
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
