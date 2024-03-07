import React, {Component, Fragment} from 'react';
import {Col, Row, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
           <Fragment>
               <Row className="footerSection">
                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px'}}>
                       <Typography.Title className="footerName" style={{textAlign:'center'}} level={2}>Follow Us</Typography.Title>
                       <div className="socialContainer" >
                           <a className="facebook social" href="" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                           <a className="youtube social" href=""><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                           <a className="twitter social" href=""><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                       </div>
                   </Col>

                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px'}}>
                       <Typography.Title className="footerName" level={2}>Address</Typography.Title>
                       <p  className="footerDescription">
                           6522 Baltimore National Pike CatonsVille<br/>
                           <FontAwesomeIcon icon={faEnvelope} /> Email : Support@easylearningbd.com<br/>
                           <FontAwesomeIcon icon={faPhone} /> Phone : 434343434<br/></p>
                   </Col>

                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px'}}>
                       <Typography.Title  className="footerName" level={2}>Information</Typography.Title>
                       <NavLink className="footerLink" to="/about" >About Me</NavLink><br/>
                       <NavLink className="footerLink" to="/about" >Company Profile</NavLink><br/>
                       <NavLink className="footerLink" to="/contact" >Contact Us</NavLink><br/>
                   </Col>

                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px'}}>
                       <Typography.Title  className="footerName" level={2}>Policy</Typography.Title>
                       <NavLink className="footerLink" to="/refund" >Refund Policy</NavLink><br/>
                       <NavLink className="footerLink" to="/terms" >Terms And Conditions</NavLink><br/>
                       <NavLink className="footerLink" to="/privacy" >Privacy Policy</NavLink><br/>
                   </Col>
               </Row>

               <Row className="copyrightSection">
                   <a className="copyrightLink" href="" >© Easy Learning 2024, All Rights Reserved </a><br/>

               </Row>

           </Fragment>
        );
    }
}

export default Footer;