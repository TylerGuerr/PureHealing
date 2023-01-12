import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from './Home';
import Overview from './Overview';
import NewClients from './NewClients';

const router = createBrowserRouter([
    {
        path: '/Home',
        element:  <Home />
    },
    {
        path:'/Overview',
        element: <Overview />
    },
    {
        path: '/NewClientPackages',
        element: <NewClients />
    },
    {
        path: '/',
        element: <Navigate replace to="/home" />
    }
])

export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}