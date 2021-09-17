const axios = require("axios");
const url = "https://www.omdbapi.com/?apikey=925eba28&s=";
const ExternApi = async (titleMovie) => {
  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      redirect: "follow",
    };
    const response = await axios.default.get(url + titleMovie, requestOptions);
    !response.status && console.log(JSON.stringify(response.data.Search));

    return response.data.Search;
  } catch (error) {
    console.error("Ocorreu " + error + " em " + url);
  }
};

module.exports = {
  ExternApi,
};
