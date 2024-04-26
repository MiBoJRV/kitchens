import React from 'react';
import {Outlet} from "react-router-dom";
import {Layout} from "./Styles.jsx";

const MainLayout = ({ children }) => {
    return (
        <Layout>
            {children}
            <Outlet />
        </Layout>
    );
};

export default MainLayout;
