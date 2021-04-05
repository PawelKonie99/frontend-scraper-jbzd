import React from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";
import ChoosenMeme from "../components/ChoosenMeme/ChoosenMeme";
import LoggedUser from "../components/LoggedUser/LoggedUser";
import { IUserReducer } from "../interfaces/UserInterface";
import { useSelector } from "react-redux";
import { RootState } from "./MainPage";

// const MemeContainer = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 0;
//   background: ${({ theme }) => theme.colors.background};
// `;

interface IsingleMemePage {
  match: {
    isExact: boolean;
    params: {
      id: string;
    };
    path: string;
    url: string;
  };
}

const SingleMemePage = ({ match }: IsingleMemePage) => {
  const isUserLogged: IUserReducer = useSelector(
    (state: RootState) => state.userReducer
  );
  const username = isUserLogged.user;

  return (
    <Layout>
      <LoggedUser username={username.payload.username} />
      <ChoosenMeme id={match.params.id} />
    </Layout>
  );
};

export default SingleMemePage;
