import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleMemePage from "./pages/SingleMemePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/:id" component={SingleMemePage} />
      </Switch>
    </Router>
  );
}

export default App;
