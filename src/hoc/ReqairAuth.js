import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ReqairAuth = ({ children }) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        return children;
    }
    return <Navigate to="/signIn" state={{ from: location }} />;
};

export default ReqairAuth;
