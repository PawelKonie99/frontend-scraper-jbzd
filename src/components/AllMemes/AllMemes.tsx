import memeService from "../../services/memes";
import React, { useState, useEffect } from "react";
import Meme from "../../components/Meme/Meme";
import { Link, Route } from "react-router-dom";
import {
  MemesContainer,
  ButtonsContainer,
  DirectionButton,
} from "./AllMemesElements";
import CircularProgress from "@material-ui/core/CircularProgress";
import WebsiteChoose from "../WebsiteChoose/WebsiteChoose";
import store from "../../store";

interface IAllMemes {
  pageRefresh: any;
  changeScraperDisplay?: {
    (scraperName: string, history: string[], pageRefresh: string): void;
  };
}

interface IMeme {
  map(arg0: (meme: any) => JSX.Element): React.ReactNode;
  id: string;
  title: string;
  photoUrl: string;
}

const AllMemes = ({ pageRefresh }: IAllMemes) => {
  const [allMemes, setAllMemes] = useState<IMeme>({} as IMeme);
  const [page, setPage] = useState<number>(1);
  const [scraperName, setScraperName] = useState<string>("jebzdzidy");
  const [loading, setLoading] = useState<boolean>(true);

  const scraperInStore: string = store.getState().choosenWebsite.scraper;

  const fetchUrlAfterRefresh = () => {
    if (pageRefresh) {
      setPage(parseInt(pageRefresh));
      setScraperName(scraperInStore);
    }
    return;
  };

  const fetchMemes = async () => {
    const memes = await memeService.getAll(page, scraperName);
    setAllMemes(memes.results);
    setLoading(false);
  };

  const changeScraperDisplay = (scaperName: string, history: string[]) => {
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

  const nextPage = (history: string[]) => {
    setPage(page + 1);
    <Link to={`/page/${page + 1}`}></Link>;
    history.push(`/page/${page + 1}`);
  };

  const previousPage = (history: string[]) => {
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
          <CircularProgress color="secondary" />
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
            render={({ history }: any) => (
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
