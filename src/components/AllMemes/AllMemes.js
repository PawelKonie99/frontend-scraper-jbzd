import memeService from "../../services/memes";
import React, { useState, useEffect } from "react";
import Meme from "../Meme/Meme";
import { Link, Route } from "react-router-dom";
import {
  MemesContainer,
  ButtonsContainer,
  DirectionButton,
} from "./AllMemesElements";
import CircularProgress from "@material-ui/core/CircularProgress";
import WebsiteChoose from "../WebsiteChoose/WebsiteChoose";

const AllMemes = ({ pageRefresh }) => {
  const [allMemes, setAllMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [scraperName, setScraperName] = useState("jebzdzidy");
  const [loading, setLoading] = useState(true);

  const fetchUrlAfterRefresh = () => {
    if (pageRefresh) {
      setPage(parseInt(pageRefresh));
    }
    return;
  };

  const fetchMemes = async () => {
    const memes = await memeService.getAll(page, scraperName);
    setAllMemes(memes.results);
    setLoading(false);
  };

  const changeScraperDisplay = (scaperName, history) => {
    setPage(1);
    <Link to={"/page/1"}></Link>;
    history.push(`/page/1`);
    setScraperName(scaperName);
  };

  useEffect(() => {
    fetchUrlAfterRefresh();
    fetchMemes();
    window.scrollTo(0, 0);
  }, [page, scraperName]);

  const nextPage = (history) => {
    setPage(page + 1);
    <Link to={`/page/${page + 1}`}></Link>;
    history.push(`/page/${page + 1}`);
  };

  const previousPage = (history) => {
    if (page > 1) {
      setPage(page - 1);
      <Link to={`/page/${page - 1}`}></Link>;
      history.push(`/page/${page - 1}`);
    } else {
      return;
    }
  };

  return (
    <>
      {loading ? (
        <MemesContainer>
          <CircularProgress color="black" />
        </MemesContainer>
      ) : (
        <MemesContainer>
          <WebsiteChoose changeScraperDisplay={changeScraperDisplay} />
          {allMemes.map((meme) => (
            <Meme
              key={meme.id}
              title={meme.title}
              url={meme.photoUrl}
              id={meme.id}
            />
          ))}
          <Route
            render={({ history }) => (
              <ButtonsContainer>
                <DirectionButton onClick={() => previousPage(history)}>
                  Poprzednia strona
                </DirectionButton>
                <DirectionButton onClick={() => nextPage(history)}>
                  Następna strona
                </DirectionButton>
              </ButtonsContainer>
            )}
          />
        </MemesContainer>
      )}
    </>
  );
};

export default AllMemes;
