const cacheMovies = require("../../../../infrastructure/database/cache");

const GetCacheMovies = async (titleMovies) => {
  try {
    const cacheDataMovies = await cacheMovies.getData(titleMovies);
    return cacheDataMovies ? cacheDataMovies : false;
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = {
  GetCacheMovies,
};
