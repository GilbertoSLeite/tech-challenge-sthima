const movies = require("../../../applications/businessRules/movies/businessRules_movies");

const MoviesGet = async (request, response) => {
  try {
    return movies.GetMovies(request, response);
  } catch (error) {
    console.log("Error Controller: ", error);
    response.status(400).send(
      JSON.stringify({
        statusGet: false,
        errorFull: error,
      })
    );
  }
};

const MoviesPost = async (request, response) => {
  try {
    return movies.PostMovies(request, response);
  } catch (error) {
    console.log("Error Controller: ", error);
    response.status(400).send(
      JSON.stringify({
        statusGet: false,
        errorFull: error,
      })
    );
  }
};

module.exports = {
  MoviesGet,
  MoviesPost,
};
