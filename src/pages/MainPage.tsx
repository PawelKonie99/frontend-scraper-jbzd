import React, { FC } from "react";
import AllMemes from "../components/AllMemes/AllMemes";
import Layout from "../layout/Layout";

interface IMainPage {
  match?:{
    isExact: boolean
    params: {
      page: string
    }
    path: string
    url: string
  }
}

const MainPage:FC<IMainPage> = ({ match }) => {
  console.log(typeof match, 'Main page')
  console.log( match, 'Main page')
  return (
    <Layout>
      <AllMemes pageRefresh={match ? match?.params.page : 1} />
    </Layout>
  );
};

export default MainPage;
