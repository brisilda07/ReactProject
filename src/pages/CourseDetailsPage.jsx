import React, { useEffect,useState, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import {useParams} from "react-router-dom";
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";

const CourseDetailsPage = () => {
    const { courseID, courseName } = useParams();
    const [courseData, setCourseData] = useState([]);


    useEffect(() => {
        window.scroll(0, 0);

        RestClient.GetRequest(AppUrl.CourseDetails + courseID).then(result => {
            setCourseData(result);
        });
    }, [courseID]);

    return (
        <Fragment>
            <TopNavigation title="Course Details" />
            <PageTop pagetitle= {courseName}/>
            <CourseDetails courseallData={courseData}/>
            <Footer />
        </Fragment>
    );
};

export default CourseDetailsPage;