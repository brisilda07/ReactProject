import React, { useEffect, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSec from "../components/ContactSec/ContactSec";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title="Contact Us" />
            <PageTop pagetitle="Contact Us" />
            <ContactSec />
            <Footer />
        </Fragment>
    );
};

export default ContactPage;