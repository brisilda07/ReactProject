import React, {Component} from 'react';
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
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import PageNotFound from "../pages/PageNotFound";


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
    {
        path: "/refund",
        element: <RefundPage/>
    },
    {
        path: "/terms",
        element: <TermsPage/>
    },
    {
        path: "/privacy",
        element: <PrivacyPage/>
    },
    {
        path: "/projectDetails/:projectID/:projectName",
        element: <ProjectDetailPage/>
    },
    {
        path: "/coursedetails/:courseID/:courseName",
        element: <CourseDetailsPage/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    },

]);

class AppRouter extends Component {


    render() {
        return (
            <RouterProvider router={router}/>
        );
    }
}

export default AppRouter;