import React, { useState, useEffect, Fragment } from 'react';
import { Col, Image, Row, Typography } from 'antd';
import { Link } from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

const Courses = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.CourseHome).then(result => {
            setMyData(result);
        });
    }, []);

    const MyView = myData.map(item => (
        <Col key={item.id} lg={12} md={24} sm={24} style={{ display: 'flex', justifyContent: 'justify' }}>
            <Row>
                <Col lg={12} md={12} sm={24} className="p-2">
                    <Image className="courseImg" src={item.small_img} />
                </Col>
                <Col lg={12} md={12} sm={24} style={{ padding: '40px' }}>
                    <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={3}>
                        {item.short_title}
                    </Typography.Title>
                    <p className="serviceDescription">
                        {item.short_description}
                    </p>
                    <div style={{ textAlign: 'justify', marginTop: '16px' }}>
                        <Link to="/coursedetails" className="float-left">
                            View Details
                        </Link>
                    </div>
                </Col>
            </Row>
        </Col>
    ));

    return (
        <div style={{ padding: '0 10%' }}>
            <Fragment>
                <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>
                    MY COURSES
                </Typography.Title>
                <br /><br />
                <div className="bottom"></div>

                <Row justify="center" gutter={[16, 16]}>
                    {MyView}
                </Row>
            </Fragment>
        </div>
    );
};

export default Courses;