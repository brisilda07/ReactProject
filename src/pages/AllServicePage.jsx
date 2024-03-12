import React, { useEffect, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import ContactSec from "../components/ContactSec/ContactSec";
import Footer from "../components/Footer/Footer";

const AllServicePage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title="Our Services" />
            <PageTop pagetitle="Our Services" />
            <Services />
            <ContactSec />
            <Footer />
        </Fragment>
    );
};

export default AllServicePage;