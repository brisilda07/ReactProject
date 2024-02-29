import React, {Component, Fragment} from 'react';
import {Tooltip} from "recharts";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSec from "../components/ContactSec/ContactSec";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact Us"/>
                <PageTop pagetitle="Contact Us" />
                <ContactSec />
                <Footer />

            </Fragment>
        );
    }
}

export default ContactPage;