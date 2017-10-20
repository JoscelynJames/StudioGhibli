import React from "react";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
                  <h1>{movie.title}</h1>
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
