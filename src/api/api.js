import axios from "axios";

const apiCalls = {
	fetchAllGhibliMovies: function() {
		var encodedURI = window.encodeURI("https://ghibliapi.herokuapp.com/films");
		return axios
			.get(encodedURI, { crossdomain: true })
			.then(res => {
				return res.data;
			})
			.catch(err => console.log(err, "err"));
	},
	fetchAllOmdbMovieInfo: function(movieTitle) {
		return axios
			.get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=b5901089`, {
				crossdomain: true,
			})
			.then(res => {
				return res.data;
			})
			.catch(err => console.log(err, "err"));
	},
};

export default apiCalls;
