import React from "react";
import api from "../api/api";

function MovieInfo(props) {
  return (
    <ul className="movie-info">
      <div>
        <li>
          <h5>Released</h5>
          {props.movie.Released}
        </li>
        <li>
          <h5>Awards</h5>
          {props.movie.Awards}
        </li>
        <li>
          <h5>Plot</h5>
          <p>
            {props.movie.Runtime + "  "} {props.movie.Rated}
          </p>
          <p>{props.movie.Plot}</p>
        </li>
      </div>
    </ul>
  );
}

function MoviePoster(props) {
  return (
    <img
      className="poster"
      src={props.movie.Poster}
      alt={props.movie.movieTitle}
    />
  );
}

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      movieTitle: this.props.movie,
      isHovering: false,
    };

    this.makeOmbdMovieCall = this.makeOmbdMovieCall.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  makeOmbdMovieCall(title) {
    api.fetchAllOmdbMovieInfo(title).then(movie => {
      console.log(movie);
      this.setState({ movie });
    });
  }

  handleMouseHover() {
    return this.setState({ isHovering: !this.state.isHovering });
  }

  componentWillMount() {
    if (this.state.movieTitle != null) {
      this.makeOmbdMovieCall(this.state.movieTitle);
    }
  }

  render() {
    return (
      <div
        className="poster-container"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        {this.state.isHovering === true ? (
          <MovieInfo movie={this.state.movie} />
        ) : (
          <MoviePoster movie={this.state.movie} />
        )}
      </div>
    );
  }
}

export default Movie;
