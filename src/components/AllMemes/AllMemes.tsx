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
  buffer: {
    data: Buffer;
  };
  mimeType: string;
}

const AllMemes = ({ pageRefresh }: IAllMemes) => {
  const [allMemes, setAllMemes] = useState({} as IMeme[]);
  const [page, setPage] = useState(1);
  const [scraperName, setScraperName] = useState("jebzdzidy");
  const [loading, setLoading] = useState(true);

  const scraperInStore: string = store.getState().choosenWebsiteReducer.scraper;

  const fetchUrlAfterRefresh = (): void => {
    if (pageRefresh) {
      setPage(parseInt(pageRefresh));
      setScraperName(scraperInStore);
    }
    return;
  };

  const fetchMemes = async (): Promise<void> => {
    const memes = await memeService.getAll(page, scraperName);
    setAllMemes(memes.results);
    setLoading(false);
  };

  const changeScraperDisplay = (
    scaperName: string,
    history: string[]
  ): void => {
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

  const nextPage = (history: string[]): void => {
    setPage(page + 1);
    <Link to={`/page/${page + 1}`}></Link>;
    history.push(`/page/${page + 1}`);
  };

  const previousPage = (history: string[]): void => {
    if (page > 1) {
      setPage(page - 1);
      <Link to={`/page/${page - 1}`}></Link>;
      history.push(`/page/${page - 1}`);
    } else {
      return;
    }
  };
  console.log(allMemes);
  return (
    <>
      {loading ? (
        <MemesContainer>
          <CircularProgress color="secondary" />
        </MemesContainer>
      ) : (
        <MemesContainer>
          <WebsiteChoose changeScraperDisplay={changeScraperDisplay} />
          {scraperName !== "usersMemes"
            ? allMemes.map((meme) => (
                <Meme
                  key={meme.id}
                  title={meme.title}
                  url={meme.photoUrl}
                  id={meme.id}
                  scraperName={scraperName}
                />
              ))
            : allMemes.map((meme) => (
                <Meme
                  key={meme.id}
                  title={meme.title}
                  buffer={meme?.buffer?.data}
                  id={meme.id}
                  scraperName={scraperName}
                  mimeType={meme.mimeType}
                />
              ))}
          <Route
            render={({ history }: any) => (
              <ButtonsContainer>
                <DirectionButton onClick={() => previousPage(history)}>
                  Poprzednia strona
                </DirectionButton>
                {allMemes.length >= page * 10 ? (
                  <DirectionButton onClick={() => nextPage(history)}>
                    Następna strona
                  </DirectionButton>
                ) : (
                  <DirectionButton>Następna strona</DirectionButton>
                )}
              </ButtonsContainer>
            )}
          />
        </MemesContainer>
      )}
    </>
  );
};

export default AllMemes;
