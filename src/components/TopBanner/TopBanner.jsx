import React, { useState, useEffect, Fragment } from 'react';
import '../../asset/css/custom.css';
import { Row, Col, Typography, Button } from 'antd';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from '../Loading/Loading';
import Fade from 'react-reveal/Fade'

const TopBanner = () => {
    const [title, setTitle] = useState("....");
    const [subtitle, setSubtitle] = useState("....");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result => {
            setTimeout(() => {
                setTitle(result[0]['home_title']);
                setSubtitle(result[0]['home_subtitle']);
                setLoading(false);
            }, 1000);
        }).catch(error => {
            setTitle("????");
            setSubtitle("????");
            setLoading(false);
        });
    }, []);

    return (
        <Fragment>
            <Row className="topFixedBanner">
                <div className="topBannerOverlay">
                    <Row className="topContent" justify="center" style={{ textAlign: 'center' }}>
                        <Col>
                            {loading ? (
                                <Loading />
                            ) : (
                                <Fragment>
                                    <Fade top>
                                        <Typography.Title level={1} className="topTitle">{title}</Typography.Title>
                                        <Typography.Title level={4} className="topSubTitle">{subtitle}</Typography.Title>
                                    </Fade>
                                    <Button type="primary">Learn More</Button>
                                </Fragment>
                            )}
                        </Col>
                    </Row>
                </div>
            </Row>
        </Fragment>
    );
};

export default TopBanner;