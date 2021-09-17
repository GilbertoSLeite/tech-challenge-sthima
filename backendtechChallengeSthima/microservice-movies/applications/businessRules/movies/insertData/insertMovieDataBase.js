const movies = require("../../../../infrastructure/database").movies;

const PostMoviesDataBase = async (externData) => {
  try {
    for (const dados of externData) {
      await movies.create({
        title_movies: dados.Title,
        year_movies: dados.Year,
        imdb_id: dados.imdbID,
        type_movies: dados.Type,
        posters_movies: dados.Poster,
      });
    }
  } catch (error) {
    console.log("Error InsertMovieDataBase: ", error);
  }
};

module.exports = {
  PostMoviesDataBase,
};
