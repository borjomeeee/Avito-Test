import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReposScreen from "../screens/Repos.screen";
import ListReposScreen from "../screens/ListRepos.screen";

const MainNavigation = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <h1 className="header">Avito Test</h1>

          <div className="content">
            <Router>
              <Switch>
                <Route path="/repos/:reposId" exact>
                  <ReposScreen />
                </Route>

                <Route path="/" exact>
                  <ListReposScreen />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
