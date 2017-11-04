import React from "react";
import "../app.css";
import { HashRouter, Switch, Route } from "react-router-dom";

// components
import SingleMovieView from "./SingleMovieView"
import GhibliMovies from "./GhibliMovies";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return <div>
        <Nav />
        <HashRouter>
          <Switch>
            {/* <Route path="/" exact component={GhibliMovies} /> */}
            <Route path="/movie" component={SingleMovieView} />
          </Switch>
        </HashRouter>
      </div>;
  }
}

export default App;
