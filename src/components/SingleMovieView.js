import React from "react";
import queryString from "query-string";
import api from "../api/api";

import MoviePoster from "./MoviePoster"

class SingleMovieView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: this.getMovieTitleFromQuery(),
      ghibli: {},
      omdb: {},
    };
  }

  getGhibliMovieInfo() {
    return api.fetchAllGhibliMovies().then(movies => {
      movies.map(movie => {
        if (movie.title === this.state.movieTitle) {
          return this.setState({ ghibli: movie });
        }
      });
    });
  }

  getOmdbMovieInfo(title) {
    return api
      .fetchAllOmdbMovieInfo(title)
      .then(movie => this.setState({ omdb: movie }));
  }

  getMovieTitleFromQuery() {
    return queryString.parse(window.location.hash)["/movie/"];
  }

  componentWillMount() {
    this.getGhibliMovieInfo();
    this.getOmdbMovieInfo(this.state.movieTitle);
  }

  render() {
    var oMovie = this.state.omdb;
    var gMovie = this.state.ghibli;

    if (this.state.omdb.Ratings === undefined) {
      return <p>loading</p>
    }
    return <div className="single-movie-container">
        <h1 className="title">{oMovie.Title}</h1>
        <div className="main">
          <div className="poster">
            <MoviePoster movie={oMovie} />
            <div className="bottom-bar-poster">
              <p>{oMovie.Rated}</p>
              <p>{oMovie.Runtime}</p>
            </div>
          </div>
          <div className="movie-info">
            <h3>{oMovie.Production}</h3>
            <h3>{oMovie.Director}</h3>
            <h3>{oMovie.Writer}</h3>
            <h3>{oMovie.Released}</h3>
          </div>
        </div>
        <div className="rating-container">
          {oMovie.Ratings.map((rating, i) => {
            return <div className="rating" key={i}>
                <h3>{rating["Source"]}</h3>
                <h4>{rating["Value"]}</h4>
              </div>;
          })}
          <div>
            <h3>Imdb</h3>
            <h4>{oMovie.imdbRating}</h4>
            <h4>{oMovie.imdbVotes}</h4>
          </div>
        </div>
        <div className="actor-container">
          <ul>
            {oMovie.Actors.split(",").map((actor, i) => {
              return <li key={i}>{actor}</li>;
            })}
          </ul>
        </div>
        <div className="plot-container">
          <p>
            {oMovie.Plot} {gMovie.description}
          </p>
        </div>
      </div>;
  }
}

export default SingleMovieView;
