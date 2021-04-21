import React from "react";
import jebzdzidyLogo from "../../utils/images/dzida.jpg";
import kwejkLogo from "../../utils/images/kwejk.png";
import usersMemesLogo from "../../utils/images/usersmemes.jpg";
import { Route } from "react-router-dom";
import {
  WebsiteChooseContainer,
  ChooseTitle,
  WebsiteToChoose,
  ImageContainer,
} from "./WebsiteChooseElements";
import { useDispatch } from "react-redux";
import store from "../../store";
import { chooseWebsite } from "../../reducers/choosenWebsiteReducer";

interface IWebsiteChoose {
  changeScraperDisplay: {
    (scraperName: string, history: string[]): void;
  };
}

const WebsiteChoose = ({ changeScraperDisplay }: IWebsiteChoose) => {
  const dispatch = useDispatch();
  const scraperInStore = store.getState().choosenWebsiteReducer.scraper;

  const changeWebsite = (website: string) => {
    dispatch(chooseWebsite(website));
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
              <ImageContainer
                show={scraperInStore === "usersMemes" ? "active" : ""}
              >
                <WebsiteToChoose
                  show={scraperInStore === "usersMemes" ? "active" : ""}
                  src={usersMemesLogo}
                  onClick={() => handleClick("usersMemes", history)}
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
