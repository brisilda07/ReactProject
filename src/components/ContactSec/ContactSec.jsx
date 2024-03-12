import React, { useState, useEffect, Fragment } from 'react';
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

const ContactSec = () => {
    const [contactInfo, setContactInfo] = useState({
        address: "...",
        email: "...",
        phone: "..."
    });

    useEffect(() => {
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            setContactInfo({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone']
            });
        });
    }, []);

    const sendContact = () => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let jsonObject = { name: name, email: email, message: message };

        RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject))
            .then(result => {
                alert(result);
            }).catch(error => {
            alert("Error");
        });
    };

    return (
        <div style={{ marginTop: '40px', padding: '0 10%' }} >
            <Fragment>
                <Row>
                    <Col lg={12} md={12} sm={24} style={{ padding: '0 120px 0 0' }}>
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
                                <Input id="name" />
                            </Form.Item>
                            <Form.Item
                                label="Your Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input id="email" />
                            </Form.Item>
                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[{ required: true, message: 'Please input your message!' }]}
                            >
                                <Input.TextArea id="message" />
                            </Form.Item>

                            <Form.Item>
                                <Button onClick={sendContact} type="primary" >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col lg={12} md={12} sm={24} style={{ padding: '0 100px 0 0 ' }}>
                        <Typography.Title level={1} className="serviceName">Discuss Now</Typography.Title>
                        <p className="serviceDescription">
                            {contactInfo.address}<br />
                            <FontAwesomeIcon icon={faEnvelope} /> Email : {contactInfo.email}<br />
                            <FontAwesomeIcon icon={faPhone} /> Phone : {contactInfo.phone}<br /></p>
                    </Col>
                </Row>
            </Fragment>
        </div>
    );
};

export default ContactSec;