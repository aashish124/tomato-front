import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { closeSnackbar } from "../actions/snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";

const SnackbarComponent = (props) => {
  const dispatch = useDispatch();
  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const onCloseSnackbar = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={props.snackbarOpen}
      autoHideDuration={props.autoHideDuration}
      onClose={onCloseSnackbar}
    >
      <Alert onClose={onCloseSnackbar} severity={props.snackbarVariant}>
        {props.snackbarMsg}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
