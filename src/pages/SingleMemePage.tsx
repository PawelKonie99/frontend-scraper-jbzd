import React from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";
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

const SingleMemePage = ({ match }: any) => {
  // console.log(typeof match)
  return (
    <Layout>
      <ChoosenMeme id={match?.params.id} />
    </Layout>
  );
};

export default SingleMemePage;
