import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Loading from "../components/Loading/Loading";
import routes from "../routes/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    position: "relative",
    display: "flex",
  },
  content: {
    flexGrow: 1,
    overflowY: "auto",
    backgroundColor: theme.palette.type === "dark" ? "#191919" : "#fafafa",
    padding: theme.spacing(3),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 48,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <React.Suspense fallback={<Loading />}>
            <Switch>
              {routes.map((route, key) => (
                <Route key={key} exact {...route} />
              ))}
            </Switch>
          </React.Suspense>
        </main>
      </div>
    </Router>
  );
};

export default Home;
