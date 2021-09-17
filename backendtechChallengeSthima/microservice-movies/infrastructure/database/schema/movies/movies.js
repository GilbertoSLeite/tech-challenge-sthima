module.exports = (sequelize, DataType) => {
  const Movies = sequelize.define(
    "movies",
    {
      id: {
        type: DataType.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        comment:
          "Coluna com geração automática dos identificadores, a fim de gerar segurança a estrutura de geração de identificadores.",
      },
      title_movies: {
        type: DataType.STRING(100),
        unique: true,
        allowNull: false,
        comment: "Coluna com o Nome do Filme.",
      },
      year_movies: {
        type: DataType.STRING,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Ano do Filme.",
      },
      imdb_id: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com o Id IMDB do Filme.",
      },
      type_movies: {
        type: DataType.STRING(20),
        unique: false,
        allowNull: false,
        comment: "Coluna com a Capa do Filme.",
      },
      posters_movies: {
        type: DataType.STRING,
        unique: false,
        allowNull: false,
        comment: "Coluna com a Capa do Filme.",
      },
    },
    {
      comment: "Tabela de Cadastro de Filmes.",
    }
  );
  return Movies;
};
