import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MovieDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      movie: {},
      omdbMovie: {},
    };
  }

  handleChange(event) {
    const movieTitle = event.target.value;
    const movieArray = this.state.posts.filter(post => post.title === movieTitle);
    const movie = movieArray[0];
    this.setState({ movie });

    axios.get(`http://www.omdbapi.com/?t=${movie.title}&apikey=b5901089`)
    .then(res => {
      const omdbMovie = res.data;
      this.setState({ omdbMovie });
    });
  }

  componentWillMount() {
    axios.get(`https://ghibliapi.herokuapp.com/films`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>Studio Ghibli</h1>
        <h3>Select a Movie</h3>

          <div id="select-movies">
            <select onChange={(event) => { this.handleChange(event) }}> 
              { this.state.posts.map(post => <option key={post.id}> {post.title} </option>) } 
            </select>
          </div>

          <h3>{ this.state.movie.title }</h3>
          <h5>{ this.state.movie.director }</h5>
          <h5>{ this.state.movie.producer }</h5>
          <p>{ this.state.movie.description }</p>
      </div>
    );
  }
};

ReactDOM.render(
  <MovieDropDown />,
  document.getElementById('root')
);

export default MovieDropDown;
