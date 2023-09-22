import React from "react";
import Non_Authenticated from "../pages/Non_Authenticated";
import { Outlet } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  if (!user.name) {
    return <Non_Authenticated />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
