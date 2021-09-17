const router = require("express").Router();

const movies_controllers = require("../../controllers/movies/controllers_movies");

module.exports = (app) => {
  router.get("/:title_movies", movies_controllers.MoviesGet);
  router.post("/", movies_controllers.MoviesPost);

  //Criando a Rota do API
  app.use("/techchallenge/filmes", router);
};
