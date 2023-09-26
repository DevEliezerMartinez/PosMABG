import React from "react";
import Non_Authenticated from "../pages/Non_Authenticated";
import { Navigate ,Outlet } from "react-router-dom";

function LoginRoute({ isAllowed, children }) {

  if (!isAllowed) {
    return <Non_Authenticated />;
  }

  return children ? children : <Outlet />;
}

export default LoginRoute;
