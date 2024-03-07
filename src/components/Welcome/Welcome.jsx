import React, {Component, Fragment} from 'react';
import {Col, Image, Row, Typography} from "antd";
import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';
import imgone from '../../asset/image/19.png';
import imgtwo from '../../asset/image/20.png';
import imgthree from '../../asset/image/21.png';

class Welcome extends Component {
    render() {
        return (


            <Fragment>
                <Row style={{padding: '0 10% 0 10%'}}>
                <div className="intro-area--top">
                    <Col lg={24} md={24} sm={24}>
                        <div className="section-title">
                            <div className="intro-area-inner">
                                <Typography.Title level={4} className="sub-title double-line"  >Welcome</Typography.Title>
                                <Typography.Title level={2} className="mainTitle">An exemplary learning comunity</Typography.Title>

                                <Row style={{textAlign:'center', margin:'60px'}}>
                                    <Col lg={8} md={12} sm={24}>
                                        <Image src={pageone} />
                                        <Typography.Title level={2} className="serviceName" >Teach The way you want</Typography.Title>
                                        <p className="serviceDescription" style={{textAlign:'center'}}> Lorem ipsum color</p>
                                    </Col>
                                    <Col lg={8} md={12} sm={24}>
                                        <Image src={pagetwo} />
                                        <Typography.Title level={2} className="serviceName" >Teach The way you want</Typography.Title>
                                        <p className="serviceDescription" style={{textAlign:'center'}}> Lorem ipsum color</p>
                                    </Col>
                                    <Col lg={8} md={12} sm={24}>
                                        <Image src={pagethree} />
                                        <Typography.Title level={2} className="serviceName" >The small matter of getting</Typography.Title>
                                        <p  className="serviceDescription" style={{textAlign:'center'}}> Lorem ipsum color</p>
                                    </Col>
                                </Row>


                                <Row className="intro-footer bg-base" style={{textAlign:"center", marginTop:'40px'}}>
                                    <Col lg={8} md={12} sm={24}>
                                        <Row>
                                            <Col lg={12} md={12} sm={24}>
                                                <Image className="sideImg" src={imgone} />
                                            </Col>
                                            <Col lg={12} md={12} sm={24}>
                                                <Typography.Title level={5} className="homeIntro">Development</Typography.Title>
                                                <p className="serviceDescription" style={{textAlign:'justify'}}> Lorem ipsum color</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={8} md={12} sm={24}>
                                        <Row>
                                            <Col lg={12} md={12} sm={24}>
                                                <Image className="sideImg" src={imgtwo} />
                                            </Col>
                                            <Col lg={12} md={12} sm={24}>
                                                <Typography.Title level={5} className="homeIntro">Web Design</Typography.Title>
                                                <p className="serviceDescription" style={{textAlign:'justify'}}> Lorem ipsum color</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={8} md={12} sm={24}>
                                        <Row>
                                            <Col lg={12} md={12} sm={24}>
                                                <Image className="sideImg" src={imgthree} />
                                            </Col>
                                            <Col lg={12} md={12} sm={24}>
                                                <Typography.Title level={5} className="homeIntro">Ecommerce</Typography.Title>
                                                <p className="serviceDescription" style={{textAlign:'justify'}}> Lorem ipsum color</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </div>
                </Row>
            </Fragment>


        );
    }
}

export default Welcome;