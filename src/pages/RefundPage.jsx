import React, {Fragment} from 'react';
import RefundDescription from "../components/RefundDescription/RefundDescription";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

const RefundPage = () => {
    return (
        <Fragment>
            <TopNavigation title="Refund Policy"/>
            <PageTop pagetitle="Refund Policy"/>
            <RefundDescription />
            <Footer />
        </Fragment>
    );
};

export default RefundPage;