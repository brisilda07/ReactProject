import React, {useEffect, Fragment, useState} from 'react';
import { Col, Image, Row, Typography } from 'antd';
import face from '../../asset/image/face.png';
import Typed from 'typed.js';
import Zoom from 'react-reveal/Zoom'
import Flip from "react-reveal/Flip";
import LightSpeed from "react-reveal/LightSpeed";


const AboutMe = () => {

    useEffect(() => {
        const options = {
            strings: ['Web Developer!', 'Online Instructor!'],
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: false,
        };

        const typed = new Typed('#myElement2', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div style={{ padding: '0 10%' }}>
            <Fragment>
                <LightSpeed top>
                <Typography.Title style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>ABOUT ME</Typography.Title>
                <br /><br />
                <div className="bottom"></div>
                </LightSpeed>
                <Row>
                    <Col lg={12} md={12} sm={24}>
                        <Flip top>
                        <div className="aboutMeImage">
                            <Zoom top>
                            <Image className="aboutImg" src={face} />
                            </Zoom>
                        </div>
                        </Flip>
                    </Col>
                    <Col lg={12} md={12} sm={24}>
                        <div className="aboutMeBody">
                            <Typography.Title className="aboutMeDetails" level={2}>HI There, I'm</Typography.Title>
                            <Typography.Title className="aboutMeTitle" level={2}>Kazi Ariyan</Typography.Title>
                            <Typography.Title className="aboutMeDetails" level={3}>Work as <span id="myElement2"></span></Typography.Title>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        </div>
    );
};

export default AboutMe;