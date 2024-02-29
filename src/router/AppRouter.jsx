import React, {Component, Fragment} from 'react';
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import AllServicePage from "../pages/AllServicePage";
import AllCoursePage from "../pages/AllCoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/service",
        element: <AllServicePage/>
    },
    {
        path: "/course",
        element: <AllCoursePage/>
    },
    {
        path: "/portfolio",
        element: <PortfolioPage/>
    },
    {
        path: "/about",
        element: <AboutPage/>
},
    {
        path: "/contact",
        element: <ContactPage/>
},
]);
class AppRouter extends Component {


    render() {
        return (
              <RouterProvider router={router} />
        );
    }
}

export default AppRouter;