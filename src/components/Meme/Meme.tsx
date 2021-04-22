import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { MemeContainer, Title, Image, TitleContainer } from "./MemeElements";

interface IMeme {
  key?: string;
  title?: string;
  url?: any;
  id?: string;
  buffer?: any;
  margin?: string;
  scraperName?: string;
  mimeType?: string;
  blocked?: boolean;
}

const Meme = ({
  margin,
  title,
  url,
  id,
  scraperName,
  mimeType,
  buffer,
  blocked,
}: IMeme) => {
  const [b64, setB64] = useState("");

  const pickSingleMeme = (history: any, id: string | undefined) => {
    if (!blocked) {
      <Link to={`/${id}`}></Link>;
      history.push(`/${id}`);
    }
  };

  useEffect(() => {
    if (buffer && mimeType) {
      const b64 = Buffer.from(buffer).toString("base64");
      setB64(b64);
    }
  }, []);

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
          {scraperName !== "usersMemes" ? (
            <Image src={url} alt={title} />
          ) : (
            <Image src={`data:${mimeType};base64,${b64}`} alt={title} />
          )}
        </MemeContainer>
      )}
    />
  );
};

export default Meme;
