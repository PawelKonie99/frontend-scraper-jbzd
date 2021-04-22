import React, { useState, useEffect } from "react";
import Meme from "../../components/Meme/Meme";
import Layout from "../../layout/Layout";
import memeService from "../../services/memes";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MemeContainer } from "./ChoosenMemeElements";
import { BackToMain } from "../AddMeme/AddMemeElements";
import { Link, Route } from "react-router-dom";

interface IChoosenMeme {
  title?: string;
  photoUrl?: string;
  id: string;
  mimeType?: string;
  buffer?: {
    type: string;
    data: [];
  };
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

  useEffect(() => {}, []);

  console.log(singleMeme);

  return (
    <>
      {loading ? (
        <MemeContainer>
          <CircularProgress color="secondary" />
        </MemeContainer>
      ) : (
        <Layout>
          <MemeContainer>
            <Link
              style={{ textDecoration: "none", marginBottom: "3rem" }}
              to={"/page/1"}
            >
              <BackToMain>Powrót do strony głównej</BackToMain>
            </Link>
            <Meme
              blocked={true}
              margin={"0"}
              title={singleMeme.title}
              url={singleMeme?.buffer?.data ? undefined : singleMeme.photoUrl}
              buffer={singleMeme?.buffer?.data}
              mimeType={singleMeme?.mimeType}
              scraperName={singleMeme?.buffer?.data ? "usersMemes" : undefined}
            />
          </MemeContainer>
        </Layout>
      )}
    </>
  );
};

export default ChoosenMeme;
