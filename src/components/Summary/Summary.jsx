import React, { Fragment } from 'react';
import { Col, Row, Typography, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptop, faStar, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { InView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Summary = () => {
    return (
        <Fragment>
            <Row className="summaryBanner">
                <div className="summaryBannerOverlay">
                    <Row justify="center" style={{ textAlign: 'center' }}>
                        <Col lg={16} md={24} sm={24}>
                            <Row className="countSection">
                                <Col lg={8} md={8} sm={24}>
                                    <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                                    <InView triggerOnce>
                                        {({ inView, ref }) => (
                                            <div ref={ref}>
                                                {inView && (
                                                    <Typography.Title level={1} className="countNumber">
                                                        <CountUp start={0} end={35000} />
                                                    </Typography.Title>
                                                )}
                                            </div>
                                        )}
                                    </InView>
                                    <Typography.Title level={4} className="countTitle">Student Worldwide</Typography.Title>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <hr style={{ backgroundColor: 'white', width: '50px', border: 'none', height: '1px' }} />
                                    </div>
                                </Col>
                                <Col lg={8} md={8} sm={24}>
                                    <FontAwesomeIcon className="iconProject" icon={faLaptop} />
                                    <InView triggerOnce>
                                        {({ inView, ref }) => (
                                            <div ref={ref}>
                                                {inView && (
                                                    <Typography.Title level={1} className="countNumber">
                                                        <CountUp start={0} end={22} />
                                                    </Typography.Title>
                                                )}
                                            </div>
                                        )}
                                    </InView>
                                    <Typography.Title level={4} className="countTitle">Courses Published</Typography.Title>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <hr style={{ backgroundColor: 'white', width: '50px', border: 'none', height: '1px' }} />
                                    </div>
                                </Col>
                                <Col lg={8} md={8} sm={24}>
                                    <FontAwesomeIcon className="iconProject" icon={faStar} />
                                    <InView triggerOnce>
                                        {({ inView, ref }) => (
                                            <div ref={ref}>
                                                {inView && (
                                                    <Typography.Title level={1} className="countNumber">
                                                        <CountUp start={0} end={3000} />
                                                    </Typography.Title>
                                                )}
                                            </div>
                                        )}
                                    </InView>
                                    <Typography.Title level={4} className="countTitle">Student Reviews</Typography.Title>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <hr style={{ backgroundColor: 'white', width: '50px', border: 'none', height: '1px' }} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} md={24} sm={24}>
                            <Card className="workCard">
                                <Typography.Title className="cardTitle" level={1}>What I Have Achieved</Typography.Title>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> System Analysis</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Coding Testing</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Implementation</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Fragment>
    );
};

export default Summary;