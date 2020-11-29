import memeService from "../../services/memes";
import React, { useState, useEffect } from "react";
import Meme from "../Meme/Meme";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

const MemesContainer = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

const AllMemes = ({ pageRefresh }) => {
  const [allMemes, setAllMemes] = useState([]);
  const [page, setPage] = useState(1);

  const fetchUrlAfterRefresh = () => {
    if (pageRefresh) {
      setPage(parseInt(pageRefresh));
    }
    return;
  };

  useEffect(() => {
    async function fetchMemes() {
      const memes = await memeService.getAll(page);
      setAllMemes(memes.results.reverse());
    }
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
            <div>
              <div onClick={() => previousPage(history)}> Previous Page </div>
              <div onClick={() => nextPage(history)}> Next Page </div>
            </div>
          )}
        />
      </MemesContainer>
    </>
  );
};

export default AllMemes;
