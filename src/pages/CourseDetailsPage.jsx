import React, { useEffect, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

const CourseDetailsPage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title="Course Details" />
            <PageTop pagetitle="Course Details" />
            <CourseDetails />
            <Footer />
        </Fragment>
    );
};

export default CourseDetailsPage;