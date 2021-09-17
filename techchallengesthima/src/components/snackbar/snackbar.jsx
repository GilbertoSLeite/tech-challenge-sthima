import React from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import PropTypes from "prop-types";
import { Close } from "@material-ui/icons";

const SnackTECH = (props) => {
  const { open, close, textSnack, alert, alterTitle } = props;
  const [onClose, setOnClose] = React.useState(true);

  return (
    <div>
      <Snackbar
        open={onClose && open}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        autoHideDuration={6000}
        onClose={close}
      >
        <Alert
          severity={alert ? alert : "success"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOnClose(false)}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>{alterTitle}</AlertTitle>
          {textSnack}
        </Alert>
      </Snackbar>
    </div>
  );
};

SnackTECH.propTypes = {
  open: PropTypes.bool.isRequired,
  textSnack: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  alterTitle: PropTypes.string,
  alert: PropTypes.string,
};

export default SnackTECH;
