import React from "react";
import "../app.css";
import GhibliMovies from "./GhibliMovies";

class App extends React.Component {
  render() {
    return (
    <div>
      <GhibliMovies />
    </div>);
  };
};

export default App;



















// import MovieDropDown from './MovieDropDown';

// class MovieView extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: [],
//       movie: {},
//       omdbMovie: {},
//       rating: [],
//     };
//   };

//   handleChange(event) {
//     const movieTitle = event.target.value;
//     const movieArray = this.state.posts.filter(post => post.title === movieTitle);
//     const movie = movieArray[0];
//     this.setState({ movie: movie });

//   };

//   componentWillMount() {

//   };

//   render() {
//     return (
//       <div id="main-container">

//           <h1 id="studio-ghibli-header">Studio Ghibli</h1>
//           <h3 id="select">Select a Movie</h3>

//             <div id="select-movies">
//               <select onChange={(event) => { this.handleChange(event)} } >
//                 {this.state.posts.map(post => <option key={post.id}> {post.title} </option>)}
//               </select>
//             </div>

//           <h3 id="title">{ this.state.movie.title }</h3>

//           <div id="poster">
//             <img src={this.state.omdbMovie.Poster}></img>
//           </div>

//           <div id="producer-director">
//             <h5>{ this.state.movie.director }</h5>
//             <h5>{ this.state.movie.producer }</h5>
//           </div>

//           <h6 id="release">{ this.state.omdbMovie.Released }</h6>
//           <p id="description">{ this.state.movie.description }</p>

//           <div id="actors">
//             <h3>Original Actors</h3>
//             <p>{this.state.omdbMovie.Actors}</p>
//           </div>

//           <div id="box-office">
//             <h3>Box Office Gross</h3>
//             <p>{this.state.omdbMovie.BoxOffice}</p>
//           </div>

//           <div id="awards">
//             <h3>Awards</h3>
//             <p>{this.state.omdbMovie.Awards}</p>
//           </div>

//           <div id="ratings">
//             <ol onChange={(event) => { this.handleChange(event)} } >
//                 {this.state.rating.map((obj) => {
//                   return (
//                   <li key={obj.Source}>
//                   <h6 id="score-source"> {obj.Source} </h6>
//                   <p id="score"> {obj.Value} </p>
//                   </li>
//                   )}
//                 )}
//                 <li>
//                   <h6>Metascore</h6>
//                   <p>{this.state.omdbMovie.Metascore}</p>
//                 </li>
//             </ol>
//           </div>

//       </div>
//     );
//   }
// };

// ReactDOM.render(
//   <MovieView />,
//   document.getElementById('root')
// );

