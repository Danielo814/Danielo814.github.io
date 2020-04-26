import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Home } from "./homepage/Home";
import history from "../history";
import { BlogMain } from "./blog/BlogMain";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <BlogMain />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
