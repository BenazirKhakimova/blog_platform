import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => (
    <div className="LayoutWrapper">
        <Header />

        <div className="container">
            <Outlet />
        </div>
    </div>
);

export default Layout;
