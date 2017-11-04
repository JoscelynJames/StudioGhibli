import React from 'react';
import {Link} from "react-router-dom";
import Movie from './Movie'

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
            return <div key={movie.id} className="movie-card">
              <Link to={"/movie/=" + movie.title}> 
                <li>
                  <h3>{movie.title}</h3>
                  <Movie movie={movie.title} />
                </li>
              </Link>
            </div>;
          })
        )}
      </ul>
    );
  }
}

export default MovieCard;
