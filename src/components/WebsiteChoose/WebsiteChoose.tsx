import React, { FC, useState } from "react";
import jebzdzidyLogo from "../../utils/images/dzida.jpg";
import kwejkLogo from "../../utils/images/kwejk.png";
import { Route } from "react-router-dom";
import {
  WebsiteChooseContainer,
  ChooseTitle,
  WebsiteToChoose,
  ImageContainer,
} from "./WebsiteChooseElements";
import { useDispatch } from "react-redux";
import store from "../../store";

interface IWebsiteChoose {
  changeScraperDisplay:  {
    (scraperName: string,history: string[]) : void
};
}

const WebsiteChoose: FC<IWebsiteChoose> = ({ changeScraperDisplay }) => {
  console.log(typeof changeScraperDisplay, 'changeScraperDisplay website choose' )
  const dispatch = useDispatch();
  const scraperInStore = store.getState().choosenWebsite.scraper;

  const changeWebsite = (website: string) => {
    console.log(typeof website, 'website website choose')
    dispatch({
      type: "CHANGE_SCRAPER",
      payload: {
        scraper: website,
      },
    });
  };

  const handleClick = (scraperName: string, history: string[]) => {
    changeWebsite(scraperName);
    changeScraperDisplay(scraperName, history);
  };

  return (
    <>
      <ChooseTitle>Wybierz strone z której chcesz zobaczyć memy</ChooseTitle>
      <WebsiteChooseContainer>
        <Route
          render={({ history }: any) => (
            <>
              <ImageContainer
                show={scraperInStore === "jebzdzidy" ? "active" : ""}
              >
                <WebsiteToChoose
                  show={scraperInStore === "jebzdzidy" ? "active" : ""}
                  src={jebzdzidyLogo}
                  onClick={() => handleClick("jebzdzidy", history)}
                />
              </ImageContainer>
              <ImageContainer show={scraperInStore === "kwejk" ? "active" : ""}>
                <WebsiteToChoose
                  show={scraperInStore === "kwejk" ? "active" : ""}
                  src={kwejkLogo}
                  onClick={() => handleClick("kwejk", history)}
                />
              </ImageContainer>
            </>
          )}
        />
      </WebsiteChooseContainer>
    </>
  );
};

export default WebsiteChoose;
