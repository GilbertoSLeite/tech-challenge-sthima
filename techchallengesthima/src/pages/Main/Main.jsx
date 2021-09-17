import React from "react";
import { Helmet } from "react-helmet";
import {
  AppBar,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@material-ui/core";
import Movie from "../../components/Movie/Movie";
import SearchData from "../../functions/SearchData/SearchData";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import { makeStyles } from "@material-ui/styles";
import SnackTECH from "../../components/snackbar/snackbar";

const moduleLayout = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.type === "dark" ? "#1e1e1e" : "#ffffff",
    opacity: 0.85,
  },
}));

const Main = () => {
  const classes = useStyles();
  const [arrayMovieA2021, setArrayMovieA2021] = React.useState([]);
  const [titleMovie, setTitleMovie] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [textSnackBar, setTextSnackbar] = React.useState("");
  const [alertSnack, setAlertSnack] = React.useState(null);
  const [alertTitleSnack, setAlertTitleSnack] = React.useState(null);

  const CloseSnack = () => setOpen(false);

  const Empty = () => {
    setOpen(!open);
    setAlertTitleSnack("Aviso!");
    setAlertSnack("warning");
    setTextSnackbar("O Campo do Filme Não Pode Estar Vazio");
    return true;
  };

  const NoReturn = () => {
    setOpen(!open);
    setAlertTitleSnack("Error!");
    setAlertSnack("error");
    setTextSnackbar("Digite um Nome Válido para o Filme");
    return true;
  };

  const SearchMovieLink = async () =>
    setArrayMovieA2021(await SearchData(titleMovie));

  const ValidationMovieName = () => {
    SearchMovieLink();
    arrayMovieA2021.length === 0 && NoReturn();
  };

  const SearchMovie = () =>
    titleMovie.length === 0 ? Empty() : ValidationMovieName();

  return (
    <React.Fragment>
      <Helmet>
        <title>Filmes || Tech Challenge Sthima</title>
      </Helmet>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters variant="regular">
          <TextField
            label="Digite o Nome do Filme"
            onChange={(event) => setTitleMovie(event.target.value)}
            onKeyPress={(event) => event.key === "Enter" && SearchMovie()}
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={SearchMovie}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Toolbar>
      </AppBar>
      <Grid container spacing={4}>
        {arrayMovieA2021.map((documentary, key) => (
          <Grid item key={key} {...moduleLayout}>
            <Movie {...documentary} />
          </Grid>
        ))}
      </Grid>
      <SnackTECH
        open={open}
        close={CloseSnack}
        textSnack={textSnackBar}
        alert={alertSnack}
        alterTitle={alertTitleSnack}
      />
    </React.Fragment>
  );
};

export default Main;
