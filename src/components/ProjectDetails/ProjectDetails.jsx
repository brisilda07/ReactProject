import React, {Component, Fragment} from 'react';
import {Col, Image, Row, Typography} from "antd";
import projectDetails from "../../asset/image/pdetails.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <div style={{padding: '0 10%' }}>
                    <Row style={{marginTop:'40px'}}>
                        <Col lg={12} md={12} sm={24}>
                            <div className="about-thumb-wrap after-shape">
                                <Image src={projectDetails} />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} style={{marginTop:'48px'}}>
                            <div className="project-details" style={{ marginLeft: '35px' }} >
                                <Typography.Title level={1} className="projectDetailsText">Education in continuing a proud tradition.</Typography.Title>
                                <p  className="detailsName">
                                    The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
                                    Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph.
                                </p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering</p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default ProjectDetails;