import React, {Component, Fragment} from 'react';
import {Col, Row, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
class Footer extends Component {
    render() {
        return (
           <Fragment>
               <Row className="footerSection">
                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px', textAlign:'center'}}>
                       <Typography.Title className="footerName" level={2}>Follow Us</Typography.Title>
                       <div className="socialContainer" >
                           <a className="facebook social" href="" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                           <a className="youtube social" href=""><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                           <a className="twitter social" href=""><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                       </div>
                   </Col>

                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px', textAlign:'center'}}>
                       <Typography.Title className="footerName" level={2}>Address</Typography.Title>
                       <p  className="footerDescription">
                           6522 Baltimore National Pike CatonsVille<br/>
                           <FontAwesomeIcon icon={faEnvelope} /> Email : Support@easylearningbd.com<br/>
                           <FontAwesomeIcon icon={faPhone} /> Phone : 434343434<br/></p>
                   </Col>

                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px', textAlign:'center'}}>
                       <Typography.Title  className="footerName" level={2}>Information</Typography.Title>
                       <a className="footerLink" href="" >About Me</a><br/>
                       <a className="footerLink" href="" >Company Profile</a><br/>
                       <a className="footerLink" href="" >Contact Us</a><br/>
                   </Col>

                   <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} style={{padding:'48px', textAlign:'center'}}>
                       <Typography.Title  className="footerName" level={2}>Policy</Typography.Title>
                       <a className="footerLink" href="" >Refund Policy</a><br/>
                       <a className="footerLink" href="" >Terms And Conditions</a><br/>
                       <a className="footerLink" href="" >Privacy Policy</a><br/>
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