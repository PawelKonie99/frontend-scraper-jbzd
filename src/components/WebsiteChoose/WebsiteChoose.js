import React from "react";
import styled from "styled-components";
import jebzdzidyLogo from "../../utils/images/dzida.jpg";
import kwejkLogo from "../../utils/images/kwejk.png";
import { Link, Route } from "react-router-dom";

export const WebsiteChooseContainer = styled.div`
  display: flex;
`;

export const ChooseTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  margin: 3rem 0 2rem 0;
`;

export const WebsiteToChoose = styled.img`
  src: ${(props) => props.src};
  cursor: pointer;
  width: 150px;
  height: 65px;
  margin: 1rem 1rem 3rem 1rem;
  border-radius: 3px;
`;

const WebsiteChoose = ({ changeScraperDisplay }) => {
  return (
    <>
      <ChooseTitle>Wybierz strone z której chcesz zobaczyć memy</ChooseTitle>
      <WebsiteChooseContainer>
        <Route
          render={({ history }) => (
            <>
              <WebsiteToChoose
                src={jebzdzidyLogo}
                onClick={() => changeScraperDisplay("jebzdzidy", history)}
              />
              <WebsiteToChoose
                src={kwejkLogo}
                onClick={() => changeScraperDisplay("kwejk", history)}
              />
            </>
          )}
        />
      </WebsiteChooseContainer>
    </>
  );
};

export default WebsiteChoose;
