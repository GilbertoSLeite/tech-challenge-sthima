const ReturnCacheMovie = require("./searchData/searchMovieCache");
const ReturnDataBaseMovie = require("./searchData/searchMovieDataBase");
const ReturnExternApiMovie = require("./searchData/searchMovieExternApi");
const PostMovieCache = require("./insertData/insertMovieCache");
const PostMovieDataBase = require("./insertData/insertMovieDataBase");

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
      response.status(200).send({ cacheMovie });
    }
    if (dataBaseMovie) {
      await PostMovieCache.PostCacheMovies(
        request.params.title_movies,
        externApiMovie
      );
      response.status(200).send({ dataBaseMovie });
    }
    if (!cacheMovie && !dataBaseMovie) {
      await PostMovieCache.PostCacheMovies(
        request.params.title_movies,
        externApiMovie
      );
      await PostMovieDataBase.PostMoviesDataBase(externApiMovie);
      response.status(200).send({ externApiMovie });
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
