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
import Email from './Email';
import Existing from './ExistingClients';
import About from './About';
import FAQ from './FAQ';
import MealPlanning from "./MealPlanning";
import Testimonials from "./Testimonials";

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
        path:'/ExistingPastClients',
        element: <Existing />
    },
    {
        path: '/NewClientPackages',
        element: <NewClients />
    },
    {
        path: '/About',
        element: <About />
    },
    {
        path: '/FAQ',
        element: <FAQ />
    },
    {
        path: '/MealPlanning',
        element: <MealPlanning />
    },
    {
        path: '/Testimonials',
        element: <Testimonials />
    },
    {
        path: '/Email',
        element: <Email />
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