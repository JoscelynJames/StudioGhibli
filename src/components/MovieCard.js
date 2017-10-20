import React from "react";

import Movie from "./Movie";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  render() {
    var hasMovies = this.props.ghibliMovies;

    return (
      <ul className="movie-grid">
        {hasMovies === 0 ? (
          <p>Loading...</p>
        ) : (
          this.props.ghibliMovies.map(movie => {
            return (
              <div key={movie.id} className="movie-card">
                <li>
                  <h3>{movie.title}</h3>
                  <Movie movie={movie.title} />
                </li>
              </div>
            );
          })
        )}
      </ul>
    );
  }
}

export default MovieCard;
