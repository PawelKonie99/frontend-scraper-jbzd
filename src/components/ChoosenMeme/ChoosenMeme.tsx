import React, { useState, useEffect, FC } from "react";
import Meme from "../../components/Meme/Meme";
import Layout from "../../layout/Layout";
import memeService from "../../services/memes";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MemeContainer } from "./ChoosenMemeElements";
import { stringify } from "querystring";

interface IChoosenMeme {
  title?: string;
  photoUrl?: string;
  id: string;
}

const ChoosenMeme:FC<IChoosenMeme> = ({ id }) => {
  const [singleMeme, setSingleMeme] = useState<any | {}>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getSingleMeme() {
      const result = await memeService.getSingle(id);
      setSingleMeme(result);
      setLoading(false);
    }
    getSingleMeme();
  }, []);

  return (
    <>
      {loading ? (
        <MemeContainer>
          <CircularProgress color="secondary" />
        </MemeContainer>
      ) : (
        <Layout>
          <MemeContainer>
            <Meme
              margin={"0"}
              title={singleMeme.title}
              url={singleMeme.photoUrl}
            />
          </MemeContainer>
        </Layout>
      )}
    </>
  );
};

export default ChoosenMeme;
