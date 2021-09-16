import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AutoCompleteMovie from "../AutoComplete/AutoComplete";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.type === "dark" ? "#1e1e1e" : "#ffffff",
    opacity: 0.85,
  },
}));

function AppBarChild() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters variant="regular">
        <AutoCompleteMovie />
      </Toolbar>
    </AppBar>
  );
}

export default AppBarChild;
