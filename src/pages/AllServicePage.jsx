import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import ContactSec from "../components/ContactSec/ContactSec";

class AllServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Our Services" />
                <PageTop pagetitle="Our Services" />
                <Services />
                <ContactSec />
                <Footer />
            </Fragment>
        );
    }
}

export default AllServicePage;