import React from "react";
import "../app.css";
// components
import GhibliMovies from "./GhibliMovies";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <GhibliMovies />
      </div>
    );
  }
}

export default App;
