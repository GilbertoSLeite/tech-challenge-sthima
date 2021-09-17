module.exports = (sequelize, DataType) => {
  const Movies = sequelize.define("movies", {
    name: DataType.STRING,
  });
  const Movies_Covers = sequelize.define(
    "movies_covers",
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
      posters_movies: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com a Capa do Filme.",
      },
      imdb_id: {
        type: DataType.BIGINT,
        unique: true,
        allowNull: false,
        comment: "Coluna com o Id IMDB do Filme.",
      },
      hash_id_movies: {
        type: DataType.BIGINT,
        references: {
          model: Movies,
          key: "id",
          deferrable: DataType.Deferrable.INITIALLY_IMMEDIATE,
        },
        allowNull: false,
        unique: false,
        comment: "A vinculação com a tabela dos Filmes.",
      },
      hash_id_posters_movies: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        comment:
          "Identificador independente para serviço das Capas dos filmes.",
      },
    },
    {
      comment: "Tabela de Cadastro de Filmes.",
    }
  );
  return Movies_Covers;
};
