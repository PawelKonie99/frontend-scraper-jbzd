import memeService from "../../services/memes";
import React, { useState, useEffect } from "react";
import Meme from "../Meme/Meme";
import styled from "styled-components";

const MemesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.offWhite};
`;

const AllMemes = () => {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function fetchMemes() {
      const memes = await memeService.getAll();
      setAllMemes(memes);
    }
    fetchMemes();
  }, []);
  return (
    <MemesContainer>
      {allMemes.slice(0, 3).map((meme) => (
        <Meme
          key={meme.id}
          title={meme.title}
          url={meme.photoUrl}
          id={meme.id}
        />
      ))}
    </MemesContainer>
  );
};

export default AllMemes;
