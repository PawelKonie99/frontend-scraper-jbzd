import React, { useState, useEffect } from "react";
import Meme from "../../components/Meme/Meme";
import Layout from "../../layout/Layout";
import memeService from "../../services/memes";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MemeContainer } from "./ChoosenMemeElements";

const ChoosenMeme = ({ id }) => {
  const [singleMeme, setSingleMeme] = useState({});
  const [loading, setLoading] = useState(true);
  //   const id = match.params.id;

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
          <CircularProgress color="black" />
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
