const router = require("express").Router();

const movies_covers_controllers = require("../../controllers/movies_covers/controllers_movies_covers");

module.exports = (app) => {
  router.get("/", movies_covers_controllers.MoviesCoverGet);
  router.post("/", movies_covers_controllers.MoviesCoverPost);

  //Criando a Rota do API
  app.use("/techchallenge/capa_filme", router);
};
