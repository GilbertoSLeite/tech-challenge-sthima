import axios from "axios";
import BooleanValidation from "../booleanValidation/booleanValidation";

const url = "https://techchallengesthima.herokuapp.com/techchallenge/filmes/";
const SearchData = async (titleMovie) => {
  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      redirect: "follow",
    };
    const response = await axios.get(url + titleMovie, requestOptions);

    !BooleanValidation[response.status] &&
      console.error(JSON.stringify(response.data.Search));
    return response.data.data === undefined ? [] : response.data.data;
  } catch (error) {
    console.error("Ocorreu " + error + " em " + url);
  }
};

export default SearchData;
