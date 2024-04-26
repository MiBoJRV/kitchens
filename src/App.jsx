import React, {useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import {Home} from "./pages/Home/Home.jsx";
import './App.css';

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home />,
                }
            ],
        },

    ]);
    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
};

export default App;
