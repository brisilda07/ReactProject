import React, {Component, Fragment} from 'react';
import {Button, Col, Form, Input, Row, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSec extends Component {

    render() {
        return (
            <div style={{marginTop:'40px', padding:'0 10%'}} >
            <Fragment>
                <Row>
                    <Col lg={12} md={12} sm={24} style={{ padding:'0 120px 0 0'}}>
                        <Typography.Title level={1} className="serviceName">Quick Contact</Typography.Title>
                        <Form
                            name="contact"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Your Name"
                                name="name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Your Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[{ required: true, message: 'Please input your message!' }]}
                            >
                                <Input.TextArea />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col lg={12} md={12} sm={24} style={{ padding:'0 100px 0 0 '}}>
                        <Typography.Title level={1} className="serviceName">Discuss Now</Typography.Title>
                        <p  className="serviceDescription">
                            6522 Baltimore National Pike CatonsVille<br/>
                            <FontAwesomeIcon icon={faEnvelope} /> Email : Support@easylearningbd.com<br/>
                            <FontAwesomeIcon icon={faPhone} /> Phone : 434343434<br/></p>
                    </Col>
                </Row>
            </Fragment>
            </div>
        );
    }
}

export default ContactSec;