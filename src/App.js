import React, { Suspense, useEffect } from "react";
import { Redirect, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { publicPages } from "./helpers/routes";
import "lightgallery.js/dist/css/lightgallery.css";
import LoaderFullPage from "./helpers/LoaderFullPage";
import SnackbarComponent from "./components/SnackbarComponent";

const App = (props) => {
  // const { isAuthenticated, isAdmin, groupId, isLoggedIn, isLoading } = props.auth;
  const location = useLocation().pathname;
  // let temp = location.substr(0,6);
  // console.log(temp);
  // const hasToken = localStorage.getItem('jwtToken');

  return (
    <div className="all-content">
      <Suspense fallback={<div />}>
        <Navbar />
        <Switch>
          {publicPages}
          {/*{props.isLoading ? (
            <div>
              {" "}
              <LoaderFullPage />{" "}
            </div>
          ) : (
            <div>
              {props.isLoggedIn ? privatePages : null}
              {!props.isLoggedIn ? <ForceLogin from={location} /> : null}
            </div>
          )} */}
          <Redirect to="/notfound" />
        </Switch> 
        <SnackbarComponent 
          snackbarOpen={props.snackbarOpen}
          autoHideDuration={4000}
          snackbarMsg={props.snackbarMsg}
          snackbarVariant={props.snackbarVariant}
        />

      </Suspense>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    snackbarOpen: state.snackbar.snackbarOpen,
    snackbarMsg: state.snackbar.snackbarMsg,
    snackbarVariant: state.snackbar.snackbarVariant,
    // auth: state.auth,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(App);
