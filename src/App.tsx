import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleMemePage from "./pages/SingleMemePage";
import AddMemePage from "./pages/AddMemePage";
import Layout from "./layout/Layout";
import AdminPanelPage from "./pages/AdminPanelPage";

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
                    <Route exact path="/interface/addMeme">
                        <AddMemePage />
                    </Route>
                    <Route exact path="/interface/adminPanel">
                        <AdminPanelPage />
                    </Route>
                </Switch>
            </Router>
        </Layout>
    );
}

export default App;
