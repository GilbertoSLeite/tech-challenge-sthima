const movies = require("../../../infrastructure/database").movies;

const GetMoviesDataBase = async (titleMovie) => {
  try {
    const moviesGet = await movies.findOne({
      where: {
        title_movies: titleMovie,
      },
    });
    return !moviesGet ? false : moviesGet;
  } catch (error) {
    console.log("Error SearchMovieDataBase: ", error);
  }
};

module.exports = {
  GetMoviesDataBase,
};
