import React, { useState, useEffect } from "react";
import Meme from "../components/Meme/Meme";
import Layout from "../layout/Layout";
import memeService from "../services/memes";
import styled from "styled-components";

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
  const [singleMeme, setSingleMeme] = useState({});
  const id = match.params.id;

  useEffect(() => {
    async function getSingleMeme() {
      const result = await memeService.getSingle(id);
      setSingleMeme(result);
    }
    getSingleMeme();
  }, []);

  return (
    <Layout>
      <MemeContainer>
        <Meme margin={"0"} title={singleMeme.title} url={singleMeme.photoUrl} />
      </MemeContainer>
    </Layout>
  );
};

export default SingleMemePage;

// import memeService from "../services/memes";
// import React, { useState, useEffect } from "react";
// import Meme from "../components/Meme/Meme";
// import Layout from "../layout/Layout";

// // const SingleMemePage = ({ match, url }) => {
// //   console.log(match.params.id);
// //   console.log(url);
// //   return (
// //     <>
// //       <p>
// //         <strong>Match Props: </strong>
// //         {/* <code>{JSON.stringify(match, null, 2)}</code> */}
// //       </p>
// //       <p>
// //         <strong>Location Props: </strong>
// //         {/* <code>{JSON.stringify(location, null, 2)}</code> */}
// //       </p>
// //     </>
// //   );
// // };
