export default {
  getMovie: (state) => movieId => {
    console.log("getters",movieId);
    return state.discover.results.find(movie => movie.id === movieId);
  }
};

