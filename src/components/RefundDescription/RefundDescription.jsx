import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Typography } from "antd";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from 'html-react-parser';

const RefundDescription = () => {
    const [refundDesc, setRefundDesc] = useState("...");

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            setRefundDesc(result[0]['refund']);
        });
    }, []);

    return (
        <div style={{ padding: '0 10%' }}>
            <Fragment>
                <Row style={{ marginTop: '30px' }}>
                    <Col lg={24} md={24} sm={24}>
                        <Typography.Title className="serviceName" level={1}>
                            Data Protection Principles
                        </Typography.Title>
                        <hr />
                        <p className="serviceDescription">
                            {parse(refundDesc)}
                        </p>
                    </Col>
                </Row>
            </Fragment>
        </div>
    );
};

export default RefundDescription;