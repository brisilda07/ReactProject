import React, { useState, useEffect, Fragment } from 'react';
import '../../asset/css/custom.css';
import { Row, Col, Typography, Button } from 'antd';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

const TopBanner = () => {
    const [title, setTitle] = useState("....");
    const [subtitle, setSubtitle] = useState("....");

    useEffect(() => {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result => {
            setTitle(result[0]['home_title']);
            setSubtitle(result[0]['home_subtitle']);
        }).catch(error => {
            setTitle("????");
            setSubtitle("????");
        });
    }, []);

    return (
        <Fragment>
            <Row className="topFixedBanner">
                <div className="topBannerOverlay">
                    <Row className="topContent" justify="center" style={{ textAlign: 'center' }}>
                        <Col>
                            <Typography.Title level={1} className="topTitle">{title}</Typography.Title>
                            <Typography.Title level={4} className="topSubTitle">{subtitle}</Typography.Title>
                            <Button type="primary">Learn More</Button>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Fragment>
    );
};

export default TopBanner;