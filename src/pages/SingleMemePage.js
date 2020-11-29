import React, { useState, useEffect } from "react";
import Meme from "../components/Meme/Meme";
import Layout from "../layout/Layout";
import memeService from "../services/memes";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import ChoosenMeme from "../components/ChoosenMeme/ChoosenMeme";

const MemeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  background: ${({ theme }) => theme.colors.background};
`;

const SingleMemePage = ({ match }) => {
  return (
    <Layout>
      <ChoosenMeme id={match?.params.id} />
    </Layout>
  );
};

export default SingleMemePage;
