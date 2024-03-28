import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Typography } from "antd";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from "html-react-parser";
import Loading from '../Loading/Loading';
import Zoom from "react-reveal/Zoom";

const PrivacyPolicy = () => {
    const [privacyDesc, setPrivacyDesc] = useState("...");
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            setTimeout(() => { // Simulate a delay
                setPrivacyDesc(result[0]['privacy']);
                setLoading(false);
            }, 1000); // Delay in milliseconds
        }).catch(error => {
            // Handle error if needed
            setTimeout(() => { // Simulate a delay even if there's an error
                setLoading(false);
            }, 1000); // Delay in milliseconds
        });
    }, []);

    if (loading) {
        return <Loading />;
    } else {

        return (
            <Row style={{padding: '0 10%'}}>
                <Fragment>
                    <Row style={{margin: '40px'}}>
                        <Col lg={24} md={24} sm={24}>
                            <Typography.Title className="serviceName" level={1}>
                                Privacy And Policy
                            </Typography.Title>
                            <hr/>
                            <Zoom top>
                            <p className="serviceDescription">
                                {parse(privacyDesc)}
                            </p>
                            </Zoom>
                        </Col>
                    </Row>
                </Fragment>
            </Row>
        );
    }
};

export default PrivacyPolicy;