import React, { useEffect, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Welcome from "../components/Welcome/Welcome";
import ClientReview from "../components/ClientReview/ClientReview";

const HomePage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title="Easy Learning Page" />
            <TopBanner />
            <Welcome />
            <Services />
            <Analysis />
            <Summary />
            <RecentProject />
            <Courses />
            <ClientReview />
            <AboutMe />
            <Footer />
        </Fragment>
    );
};

export default HomePage;