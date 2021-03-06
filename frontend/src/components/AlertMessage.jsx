import React from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function AlertMessage({ error, alertOpen, setAlertOpen, autoHideTime = 6000 }) {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setAlertOpen(false);
      };
      return (
        <Snackbar open={alertOpen} autoHideDuration={autoHideTime} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      );
}

export default AlertMessage
