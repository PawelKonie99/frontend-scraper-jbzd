import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleMemePage from "./pages/SingleMemePage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/page/:page" component={MainPage} />
          <Route exact path="/:id" component={SingleMemePage} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
