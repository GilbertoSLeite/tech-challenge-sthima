const movies = require("../../../../infrastructure/database").movies;
const { Op } = require("sequelize");

const GetMoviesDataBase = async (titleMovie) => {
  try {
    const moviesGet = await movies.findAll({
      where: {
        title_movies: {
          [Op.iLike]: `${titleMovie}%`,
        },
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
