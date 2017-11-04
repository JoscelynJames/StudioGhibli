import React from "react";

function MoviePoster(props) {
  return (
    <img
      className="poster"
      src={props.movie.Poster}
      alt={props.movie.movieTitle}
    />
  );
}

export default MoviePoster
