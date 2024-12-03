import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../store/userStore";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <Navigate
        to={user.role === "admin" ? "/dashboard-admin" : "/beranda-user"}
      />
    );
  }

  return children;
};

export default PrivateRoute;
