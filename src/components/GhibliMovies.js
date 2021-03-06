import React from "react";
import api from "../api/api";

import MovieCard from "./MovieCard";

class GhibliMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ghibliMovies: [],
    };
  }

  componentWillMount() {
    api.fetchAllGhibliMovies().then(movies => {
      this.setState({ ghibliMovies: movies });
    });
  }

  render() {
    return (
      <div className="movie-container">
        <div className="row">
          {this.state.ghibliMovies.length < 1 ? (
            <h1>Loading</h1>
          ) : (
            <MovieCard ghibliMovies={this.state.ghibliMovies} />
          )}
        </div>
      </div>
    );
  }
}

export default GhibliMovies;
