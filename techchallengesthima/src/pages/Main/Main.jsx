import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@material-ui/core";
import Movie from "../../components/Movie/Movie";
import SearchData from "../../functions/SearchData/SearchData";

const moduleLayout = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3,
};

const Main = () => {
  const [arrayMovieA2021, setArrayMovieA2021] = React.useState([]);

  React.useEffect(() => {
    (async () => setArrayMovieA2021(await SearchData()))();
  }, []);

  return (
    <>
      <Helmet>
        <title>Filmes | Tech Challenge Sthima</title>
      </Helmet>
      <Grid container spacing={4}>
        {arrayMovieA2021.map((documentary, key) => (
          <Grid item key={key} {...moduleLayout}>
            <Movie {...documentary} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Main;
