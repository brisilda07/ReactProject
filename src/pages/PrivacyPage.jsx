import React, {Component, Fragment} from 'react';
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy And Policy"/>
                <PageTop pagetitle="Privacy And Policy"/>
                <PrivacyPolicy />
                <Footer />
            </Fragment>
        );
    }
}

export default PrivacyPage;