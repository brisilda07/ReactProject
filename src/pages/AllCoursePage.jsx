import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

class AllCoursePage extends Component {
    render() {
        return (
            <Fragment >
                <TopNavigation title="All Courses"/>
                <PageTop pagetitle="All Courses"/>
                <AllCourses />
                <Footer />



            </Fragment>


        );
    }
}

export default AllCoursePage;