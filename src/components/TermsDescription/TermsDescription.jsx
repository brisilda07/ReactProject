import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Typography } from "antd";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from 'html-react-parser';

const TermsDescription = () => {
    const [termsDesc, setTermsDesc] = useState("...");

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            setTermsDesc(result[0]['terms']);
        });
    }, []);

    return (
        <div style={{ padding: '0 10%' }}>
            <Fragment>
                <Row>
                    <Col lg={24} md={24} sm={24}>
                        <Typography.Title className="serviceName" level={1}>
                            Terms And Conditions
                        </Typography.Title>
                        <hr />
                        <p className="serviceDescription">
                            {parse(termsDesc)}
                        </p>
                    </Col>
                </Row>
            </Fragment>
        </div>
    );
};

export default TermsDescription;