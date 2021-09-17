const movies = require("../../../infrastructure/database").movies;
const ReturnCacheMovie = require("./searchMovieCache");
const ReturnDataBaseMovie = require("./searchMovieDataBase");
const ReturnExternApiMovie = require("./searchMovieExternApi");

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
      response.status(200).send(cacheMovie);
    }
    if (dataBaseMovie) {
      response.status(200).send(dataBaseMovie);
    }
    if (!cacheMovie && !dataBaseMovie) {
      response.status(200).send(externApiMovie);
    }
  } catch (error) {
    console.log("Error BusinessRules: ", error);
    response.status(404).send({
      error: error.parent,
      statusGet: false,
    });
  }
};

const PostMovies = async (request, response) => {
  try {
    const moviesPost = await movies.create({
      id: request.body.id,
      title_movies: request.body.title_movies,
      year_movies: request.body.year_movies,
      imdb_id: request.body.imdb_id,
      hash_id_movies: request.body.hash_id_movies,
    });
    response.status(200).send({
      data: moviesPost,
      statusPost: true,
    });
  } catch (error) {
    console.log("Error BusinessRules: ", error);
    response.status(404).send({
      error: error.parent,
      statusPost: false,
    });
  }
};

module.exports = {
  GetMovies,
  PostMovies,
};
