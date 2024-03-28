import React, { useEffect, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import NotFound from "../components/NotFound/NotFound";

const PageNotFound = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title="404" />
            <PageTop pagetitle="Page Not Found" />
            <NotFound />
            <Footer />
        </Fragment>
    );
};

export default PageNotFound;