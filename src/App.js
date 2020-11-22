import "./App.css";
import memeService from "./services/memes";
import React, { useState, useEffect } from "react";
import Meme from "./components/Meme";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";

function App() {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function fetchMemes() {
      const memes = await memeService.getAll();
      setAllMemes(memes);
    }
    fetchMemes();
  }, []);

  return <MainPage />;
}

export default App;
