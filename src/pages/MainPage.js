import React from "react";
import AllMemes from "../components/AllMemes/AllMemes";
import Layout from "../layout/Layout";

const MainPage = ({ match }) => {
  return (
    <Layout>
      <AllMemes pageRefresh={match ? match?.params.page : 1} />
    </Layout>
  );
};

export default MainPage;
