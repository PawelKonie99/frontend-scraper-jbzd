import React, { useState, useEffect } from "react";
import Meme from "../../components/Meme/Meme";
import Layout from "../../layout/Layout";
import memeService from "../../services/memes";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MemeContainer } from "./ChoosenMemeElements";

interface IChoosenMeme {
  title?: string;
  photoUrl?: string;
  id: string;
}

const ChoosenMeme = ({ id }: IChoosenMeme) => {
  const [singleMeme, setSingleMeme] = useState<IChoosenMeme>(
    {} as IChoosenMeme
  );
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
