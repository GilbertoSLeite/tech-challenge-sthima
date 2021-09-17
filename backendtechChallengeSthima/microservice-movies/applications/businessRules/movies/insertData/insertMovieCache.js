const cacheMovies = require("../../../../infrastructure/database/cache");

const PostCacheMovies = async (params, dataMovies) => {
  console.log("params ", params, "dataMovies ", dataMovies);
  try {
    const cacheDataMovies = await cacheMovies.InsertCache(params, dataMovies);
    return cacheDataMovies;
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = {
  PostCacheMovies,
};
