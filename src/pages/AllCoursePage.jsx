import React, { useEffect, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

const AllCoursePage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title="All Courses" />
            <PageTop pagetitle="All Courses" />
            <AllCourses />
            <Footer />
        </Fragment>
    );
};

export default AllCoursePage;
