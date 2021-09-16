import axios from "axios";
import BooleanValidation from "../booleanValidation/booleanValidation";

const url = "https://www.omdbapi.com/?apikey=925eba28&s=batman";
const SearchData = async () => {
  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      redirect: "follow",
    };
    const response = await axios.get(url, requestOptions);
    !BooleanValidation[response.status] &&
      console.error(JSON.stringify(response.data.Search));

    return response.data.Search;
  } catch (error) {
    console.error("Ocorreu " + error + " em " + url);
  }
};

export default SearchData;
