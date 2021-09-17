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
  const [titleMovie, setTitleMovie] = React.useState("batman");

  const SearchMovie = () =>
    (async () => setArrayMovieA2021(await SearchData(titleMovie)))();

  return (
    <React.Fragment>
      <Helmet>
        <title>Filmes | Tech Challenge Sthima</title>
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
                <InputAdornment>
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
    </React.Fragment>
  );
};

export default Main;
