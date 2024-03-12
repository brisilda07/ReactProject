import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

const Footer = () => {
    const [footerData, setFooterData] = useState({
        address: "...",
        email: "...",
        phone: "...",
        facebook: "...",
        youtube: "...",
        twitter: "...",
        footer_credit: "...",
    });

    useEffect(() => {
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            setFooterData({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                facebook: result[0]['facebook'],
                youtube: result[0]['youtube'],
                twitter: result[0]['twitter'],
                footer_credit: result[0]['footer_credit']
            });
        });
    }, []);

    return (
        <Fragment>
            <Row className="footerSection">
                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{ padding: '48px' }}>
                    <Typography.Title className="footerName" style={{ textAlign: 'center' }} level={2}>Follow Us</Typography.Title>
                    <div className="socialContainer">
                        <a className="facebook social" href={footerData.facebook}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a className="youtube social" href={footerData.youtube}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                        <a className="twitter social" href={footerData.twitter}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    </div>
                </Col>

                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{ padding: '48px' }}>
                    <Typography.Title className="footerName" level={2}>Address</Typography.Title>
                    <p className="footerDescription">
                        {footerData.address}<br />
                        <FontAwesomeIcon icon={faEnvelope} /> Email : {footerData.email}<br />
                        <FontAwesomeIcon icon={faPhone} /> Phone : {footerData.phone}<br /></p>
                </Col>

                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{ padding: '48px' }}>
                    <Typography.Title className="footerName" level={2}>Information</Typography.Title>
                    <NavLink className="footerLink" to="/about">About Me</NavLink><br />
                    <NavLink className="footerLink" to="/about">Company Profile</NavLink><br />
                    <NavLink className="footerLink" to="/contact">Contact Us</NavLink><br />
                </Col>

                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{ padding: '48px' }}>
                    <Typography.Title className="footerName" level={2}>Policy</Typography.Title>
                    <NavLink className="footerLink" to="/refund">Refund Policy</NavLink><br />
                    <NavLink className="footerLink" to="/terms">Terms And Conditions</NavLink><br />
                    <NavLink className="footerLink" to="/privacy">Privacy Policy</NavLink><br />
                </Col>
            </Row>

            <Row className="copyrightSection">
                <a className="copyrightLink" href="">{footerData.footer_credit}</a><br />
            </Row>
        </Fragment>
    );
};

export default Footer;
