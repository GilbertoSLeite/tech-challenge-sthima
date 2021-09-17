const movies_covers = require("../../../applications/businessRules/movies_covers/businessRules_movies_covers");

const MoviesCoverGet = async (request, response) => {
  try {
    return movies_covers.GetMoviesCovers(request, response);
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

const MoviesCoverPost = async (request, response) => {
  try {
    return movies_covers.PostMoviesCovers(request, response);
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
  MoviesCoverGet,
  MoviesCoverPost,
};
