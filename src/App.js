import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
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
        <ul>
          {this.state.posts.map(post =>
            <div key={post.id}>
              <a href="#" onClick="console.log('The link was clicked.'); return false"><li> {post.title}</li></a>
              <p>{post.description}</p>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <FetchDemo movie="reactjs"/>,
  document.getElementById('root')
);

export default FetchDemo;
