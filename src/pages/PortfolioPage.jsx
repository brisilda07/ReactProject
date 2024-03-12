import React, { useEffect, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";

const PortfolioPage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title="Our Portfolio" />
            <PageTop pagetitle="Our Portfolio" />
            <AllProjects />
            <Footer />
        </Fragment>
    );
};

export default PortfolioPage;