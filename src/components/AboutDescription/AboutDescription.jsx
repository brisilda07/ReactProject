import React, {Component, Fragment} from 'react';
import {Col, Row, Typography} from "antd";

class AboutDescription extends Component {
    render() {
        return (
            <div style={{ padding: '0 20% 0 10%' }}>
            <Fragment>
                <Row style={{marginTop:'30px'}}>
               <Col lg={24} md={24} sm={24} >

                   <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={1}>
                       Who I Am
                   </Typography.Title>
                   <hr />
                   <p className="serviceDescription">
                       Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of easy Learning and a passionate Web Developer, Programmer & Instructor.<br /><br />
                       I am working online for the last 9 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br /><br />
                       Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.<br /><br />
                       Education makes the world a better place. Make your world better with new skills.<br /><br />
                   </p>

                   <br /><br />

                   <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={1}>
                       Our Mission
                   </Typography.Title>
                   <hr />
                   <p className="serviceDescription">
                       Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of easy Learning and a passionate Web Developer, Programmer & Instructor.<br /><br />
                       I am working online for the last 9 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br /><br />
                       Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.<br /><br />
                       Education makes the world a better place. Make your world better with new skills.<br /><br />
                   </p>

                   <br /><br />

                   <Typography.Title  className="serviceName" level={1}>
                       Our Vision
                   </Typography.Title>
                   <hr />
                   <p className="serviceDescription" >
                       Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of easy Learning and a passionate Web Developer, Programmer & Instructor.<br /><br />
                       I am working online for the last 9 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br /><br />
                       Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.<br /><br />
                       Education makes the world a better place. Make your world better with new skills.
                   </p>

               </Col>
                </Row>
            </Fragment>
            </div>
        );
    }
}

export default AboutDescription;