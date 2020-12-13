import React, { useState } from "react";
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

const WebsiteChoose = ({ changeScraperDisplay }) => {
  const dispatch = useDispatch();
  const scraperInStore = store.getState().choosenWebsite.scraper;
  console.log(scraperInStore);

  const changeWebsite = (website) => {
    dispatch({
      type: "CHANGE_SCRAPER",
      payload: {
        scraper: website,
      },
    });
  };

  const handleClick = (scraperName, history) => {
    changeWebsite(scraperName);
    changeScraperDisplay(scraperName, history);
  };

  return (
    <>
      <ChooseTitle>Wybierz strone z której chcesz zobaczyć memy</ChooseTitle>
      <WebsiteChooseContainer>
        <Route
          render={({ history }) => (
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
