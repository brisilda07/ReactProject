import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Image, Row, Typography } from 'antd';
import {Link} from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <div style={{padding: '0 10%' }}>
                    <Fragment>
                        <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>
                            MY COURSES
                        </Typography.Title>
                        <br /><br />
                        <div className="bottom"></div>

                        <Row justify="center" gutter={[16, 16]}>
                            <Col lg={12} md={24} sm={24} style={{ display: 'flex', justifyContent: 'justify' }}>
                                <Row>
                                    <Col lg={12} md={12} sm={24} className="p-2">
                                        <Image className="courseImg" src="https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3558.jpg?t=st=1709046519~exp=1709050119~hmac=5c65ce21fd6805d102f5c84484b3d703e8bb3c1a1821c3bf6dc08c9fb05148af&w=1380" />
                                    </Col>
                                    <Col lg={12} md={12} sm={24} style={{ padding: '40px' }}>
                                        <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={3}>
                                            Laravel 8
                                        </Typography.Title>
                                        <p className="serviceDescription">
                                            In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch
                                        </p>
                                        <div style={{ textAlign: 'justify', marginTop: '16px' }}>
                                            <Link to="/coursedetails" className="float-left">
                                                View Details
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12} md={12} sm={24}>
                                        <Image className="courseImg" src="https://img.freepik.com/free-photo/report-by-whiteboard_1098-16332.jpg?t=st=1709048748~exp=1709052348~hmac=1b7e2b15d36f0f79b8f00adec031bdc83cf789690249c0cd1d12a873a9c494e5&w=1380" />
                                    </Col>
                                    <Col lg={12} md={12} sm={24} style={{ padding: '40px' }}>
                                        <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={3}>
                                            Laravel 8
                                        </Typography.Title>
                                        <p className="serviceDescription">
                                            In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch
                                        </p>
                                        <div style={{ textAlign: 'justify', marginTop: '16px' }}>
                                            <Link to="/coursedetails" className="float-left">
                                                View Details
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={12} md={24} sm={24} style={{ display: 'flex', justifyContent: 'justify' }}>
                                <Row>
                                    <Col lg={12} md={12} sm={24} className="p-2">
                                        <Image className="courseImg" src="https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3558.jpg?t=st=1709046519~exp=1709050119~hmac=5c65ce21fd6805d102f5c84484b3d703e8bb3c1a1821c3bf6dc08c9fb05148af&w=1380" />
                                    </Col>
                                    <Col lg={12} md={12} sm={24} style={{ padding: '40px' }}>
                                        <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={3}>
                                            Laravel 8
                                        </Typography.Title>
                                        <p className="serviceDescription">
                                            In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch
                                        </p>
                                        <div style={{ textAlign: 'justify', marginTop: '16px' }}>
                                            <Link to="/coursedetails" className="float-left">
                                                View Details
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12} md={12} sm={24}>
                                        <Image className="courseImg" src="https://img.freepik.com/free-photo/report-by-whiteboard_1098-16332.jpg?t=st=1709048748~exp=1709052348~hmac=1b7e2b15d36f0f79b8f00adec031bdc83cf789690249c0cd1d12a873a9c494e5&w=1380" />
                                    </Col>
                                    <Col lg={12} md={12} sm={24} style={{ padding: '40px' }}>
                                        <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={3}>
                                            Laravel 8
                                        </Typography.Title>
                                        <p className="serviceDescription">
                                            In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch
                                        </p>
                                        <div style={{ textAlign: 'justify', marginTop: '16px' }}>
                                            <Link to="/coursedetails" className="float-left">
                                                View Details
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Fragment>
                </div>
        );
    }
}

export default Courses;