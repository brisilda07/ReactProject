import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class CourseDetailsPage extends Component {
    render() {
        return (
           <Fragment>
               <TopNavigation title="Course Details"/>
               <PageTop pagetitle="Course Details"/>
               <CourseDetails />
               <Footer />
           </Fragment>
        );
    }
}

export default CourseDetailsPage;