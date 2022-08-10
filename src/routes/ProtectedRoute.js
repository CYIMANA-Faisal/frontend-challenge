import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("accessToken");
    return(
        isAuthenticated ? <Outlet/> : <Navigate to="/"/>
    )
}

export default ProtectedRoute;