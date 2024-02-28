import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Image, Row, Typography} from "antd";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1} >MY COURSES</Typography.Title>
                <br/><br/>
                <div className="bottom"> </div>
                <Row justify="center" gutter={[8,16]}>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col span={12} className="p-2">
                                <Image className="courseImg" src="https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3558.jpg?t=st=1709046519~exp=1709050119~hmac=5c65ce21fd6805d102f5c84484b3d703e8bb3c1a1821c3bf6dc08c9fb05148af&w=1380"
                                />
                            </Col>
                            <Col span={12} style={{padding:'40px'}}>
                                <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceName" level={3} >Laravel 8</Typography.Title>
                                <p className="serviceDescription" >In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch</p>
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                <a className="float-left" href=""> View Details</a>
                                </div>
                            </Col>
                            <Col span={12}>
                                <Image className="courseImg" src="https://img.freepik.com/free-photo/report-by-whiteboard_1098-16332.jpg?t=st=1709048748~exp=1709052348~hmac=1b7e2b15d36f0f79b8f00adec031bdc83cf789690249c0cd1d12a873a9c494e5&w=1380"
                                />
                            </Col>
                            <Col span={12} style={{padding:'40px'}}>
                                <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceName" level={3} >Laravel 8</Typography.Title>
                                <p className="serviceDescription">In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch</p>
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <a className="float-left" href=""> View Details</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col span={12}>
                                <Image className="courseImg" src="https://img.freepik.com/free-photo/extremely-focused-male-student-taking-online-test_74855-1859.jpg?t=st=1709048782~exp=1709052382~hmac=b9c2a98980e3d633013e9994be1d1a9cc36d803119805b6fb521a870be89b0fa&w=1380"
                                />
                            </Col>
                            <Col span={12} style={{padding:'40px'}}>
                                <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceName" level={3} >Laravel 8</Typography.Title>
                                <p className="serviceDescription">In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch</p>
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <a className="float-left" href=""> View Details</a>
                                </div>
                            </Col>
                            <Col span={12} >
                                <Image className="courseImg" src="https://img.freepik.com/premium-photo/row-unrecognizable-business-people-sit-conference-hall-business-event_183219-13.jpg?w=1380"
                                />
                            </Col>
                            <Col span={12}style={{padding:'40px'}}>
                                <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceName" level={3} >Laravel 8</Typography.Title>
                                <p className="serviceDescription">In This Course, You Will Build Learning Management System Complete Project with Laravel 10 And Build It From Scratch</p>
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <a className="float-left" href=""> View Details</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Courses;