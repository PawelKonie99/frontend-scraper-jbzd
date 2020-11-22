import memeService from "../services/memes";
import React, { useState, useEffect } from "react";
import Meme from "../components/Meme";
import Layout from "../layout/Layout";

function MainPage() {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function fetchMemes() {
      const memes = await memeService.getAll();
      setAllMemes(memes);
    }
    fetchMemes();
  }, []);

  return (
    <Layout>
      <div className="App">
        {allMemes.slice(0, 3).map((meme) => (
          <Meme key={meme.id} title={meme.title} jpg={meme.photoUrl} />
        ))}
      </div>
    </Layout>
  );
}

export default MainPage;
