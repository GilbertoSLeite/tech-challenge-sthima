import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchData from "../../functions/SearchData/SearchData";
import InsertNameMovie from "../../functions/localstorage/insertNameMovie";

const useStyles = makeStyles((theme) => ({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
}));

const renderMovieCapa = (movieCapa) => (
  <img src={movieCapa} alt="Imagem" width="50" />
);

const AutoCompleteMovie = () => {
  const classes = useStyles();
  const [arrayMovieA2021, setArrayMovieA2021] = React.useState([]);
  const [nameMovie, setNameMovie] = React.useState("");

  React.useEffect(() => {
    (async () => setArrayMovieA2021(await SearchData()))();
  }, []);

  React.useEffect(() => {
    (() => InsertNameMovie(nameMovie))();
  }, [nameMovie]);

  return (
    <Autocomplete
      fullWidth
      classes={{
        option: classes.option,
      }}
      options={arrayMovieA2021}
      getOptionSelected={(o, v) => o.option === v.value}
      getOptionLabel={(option) => option.Title}
      renderOption={(option) => (
        <React.Fragment>
          <span>{renderMovieCapa(option.Poster)}</span>
          {option.Title}
        </React.Fragment>
      )}
      onChange={setNameMovie}
      renderInput={(params) => (
        <TextField
          {...params}
          aria-labelledby="Movies"
          id="movies"
          type="text"
          label="Escolha um Filme"
          variant="outlined"
          margin="dense"
          onChange={setNameMovie}
          fullWidth
        />
      )}
    />
  );
};

export default AutoCompleteMovie;
