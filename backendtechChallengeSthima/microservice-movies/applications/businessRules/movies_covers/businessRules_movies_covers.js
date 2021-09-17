const movies_covers = require("../../../infrastructure/database").movies_covers;

const GetMoviesCovers = async (request, response) => {
  try {
    const moviesCoversGet = await movies_covers.findAll({
      order: [["id", "ASC"]],
    });
    response.status(200).send({
      data: moviesCoversGet,
      statusGet: true,
    });
  } catch (error) {
    response.status(404).send({
      error: error.parent,
      statusGet: false,
    });
  }
};

const PostMoviesCovers = async (request, response) => {
  try {
    const moviesCoversPost = await movies_covers.create({
      id: request.body.id,
      posters_movies: request.body.posters_movies,
      imdb_id: request.body.imdb_id,
      hash_id_movies: request.body.hash_id_movies,
      hash_id_posters_movies: request.body.hash_id_posters_movies,
    });
    response.status(200).send({
      data: moviesCoversPost,
      statusPost: true,
    });
  } catch (error) {
    response.status(404).send(
      JSON.stringify({
        error: error.parent,
        statusPost: false,
      })
    );
  }
};

module.exports = {
  GetMoviesCovers,
  PostMoviesCovers,
};
