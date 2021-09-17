const cors = require("cors");
var createError = require("http-errors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var express = require("express");
var path = require("path");

const db = require("./microservice-movies/infrastructure/database/index");

db.sequelize.sync();

var app = express();

const corsOptions = {
  origin: "*",
  methods: "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT",
  allowedHeaders:
    "Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token",
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
  res.json({
    message:
      "Seja bem vindo ao projeto de Backend do Recrutamento da Empresa Sthima.",
  });
});

// Analisar Cors do Navegador
app.use(cors(corsOptions));

require("./microservice-movies/interface/routes/movies/routes_movies")(app);

// catch 404 and forward to error handler
function ErroStatus(req, res, next) {
  return (
    res.statusCode >= 400 &&
    res.statusCode <= 511 &&
    next(createError(res.statusCode))
  );
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : next(err);
  // render the error page
  res.status(err.status || 500);
}

// error handler
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(ErroStatus);

module.exports = app;
