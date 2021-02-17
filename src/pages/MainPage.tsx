import React from "react";
import AllMemes from "../components/AllMemes/AllMemes";
import Layout from "../layout/Layout";
import LoginAndRegister from "../components/LoginAndRegister/LoginAndRegister";

interface IMainPage {
  match?: {
    isExact: boolean;
    params: {
      page: string;
    };
    path: string;
    url: string;
  };
}

const MainPage = ({ match }: IMainPage) => {
  console.log(typeof match, "Main page");
  console.log(match, "Main page");
  return (
    <Layout>
      <LoginAndRegister />
      <AllMemes pageRefresh={match ? match?.params.page : 1} />
    </Layout>
  );
};

export default MainPage;
