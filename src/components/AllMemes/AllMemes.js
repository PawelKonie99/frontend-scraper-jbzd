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

const AllMemes = ({ pageRefresh }) => {
  const [allMemes, setAllMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchUrlAfterRefresh = () => {
    if (pageRefresh) {
      setPage(parseInt(pageRefresh));
    }
    return;
  };

  async function fetchMemes() {
    const memes = await memeService.getAll(page);
    setAllMemes(memes.results.reverse());
    setLoading(false);
  }

  useEffect(() => {
    fetchUrlAfterRefresh();
    fetchMemes();
    window.scrollTo(0, 0);
  }, [page, pageRefresh]);

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
          {allMemes.slice(0, 3).map((meme) => (
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
