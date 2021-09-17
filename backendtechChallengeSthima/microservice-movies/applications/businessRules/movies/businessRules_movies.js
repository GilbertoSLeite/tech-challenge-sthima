const ReturnCacheMovie = require("./searchData/searchMovieCache");
const ReturnDataBaseMovie = require("./searchData/searchMovieDataBase");
const ReturnExternApiMovie = require("./searchData/searchMovieExternApi");
const PostMovieCache = require("./insertData/insertMovieCache");
const PostMovieDataBase = require("./insertData/insertMovieDataBase");
var data;
const GetMovies = async (request, response) => {
  try {
    const cacheMovie = await ReturnCacheMovie.GetCacheMovies(
      request.params.title_movies
    );
    const dataBaseMovie = await ReturnDataBaseMovie.GetMoviesDataBase(
      request.params.title_movies
    );
    const externApiMovie = await ReturnExternApiMovie.ExternApi(
      request.params.title_movies
    );
    if (cacheMovie) {
      data = cacheMovie;
      response.status(200).send({ data });
    }
    if (dataBaseMovie) {
      data = dataBaseMovie;
      await PostMovieCache.PostCacheMovies(
        request.params.title_movies,
        externApiMovie
      );
      response.status(200).send({ data });
    }
    if (!cacheMovie && !dataBaseMovie) {
      data = externApiMovie;
      await PostMovieCache.PostCacheMovies(
        request.params.title_movies,
        externApiMovie
      );
      await PostMovieDataBase.PostMoviesDataBase(externApiMovie);
      response.status(200).send({ data });
    }
  } catch (error) {
    console.log("Error BusinessRules: ", error);
    response.status(404).send({
      error: error.parent,
      statusGet: false,
    });
  }
};

module.exports = {
  GetMovies,
};
