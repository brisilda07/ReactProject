import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Typography } from "antd";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from "html-react-parser";

const PrivacyPolicy = () => {
    const [privacyDesc, setPrivacyDesc] = useState("...");

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            setPrivacyDesc(result[0]['privacy']);
        });
    }, []);

    return (
        <Row style={{ padding: '0 10%' }}>
            <Fragment>
                <Row style={{ margin: '40px' }}>
                    <Col lg={24} md={24} sm={24}>
                        <Typography.Title className="serviceName" level={1}>
                            Privacy And Policy
                        </Typography.Title>
                        <hr />
                        <p className="serviceDescription">
                            {parse(privacyDesc)}
                        </p>
                    </Col>
                </Row>
            </Fragment>
        </Row>
    );
};

export default PrivacyPolicy;