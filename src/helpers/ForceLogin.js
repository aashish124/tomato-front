import React from "react";
import { Redirect } from "react-router-dom";
const ForceLogin = ({ from }) => {
  return (
    // <Redirect
    //   to={{
    //     pathname: "/login",
    //     state: {
    //       from,
    //     },
    //   }}
      
    // />
    <Redirect
                    to={{
                        pathname: "/login",
                    }}
                />
  );
};

export default ForceLogin;
