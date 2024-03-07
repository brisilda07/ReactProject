import React, {Component, Fragment} from 'react';
import {Button, Col, Image, Row, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {faClipboard} from "@fortawesome/free-solid-svg-icons";
import {faClone} from "@fortawesome/free-solid-svg-icons";
import {faTags} from "@fortawesome/free-solid-svg-icons";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <div style={{padding: '0 10%', marginTop:'48px' }}>
                <Row>
                    <Col lg={16} md={12} sm={24}>
                        <Typography.Title level={1} className="courseDetailsText">Course Details</Typography.Title>
                        <Image src="http://solverwp.com/demo/html/edumint/assets/img/course/9.png" className="courseDetailsImg" /><br/><br/>
                        <p className="courseallDescription" style={{width:'85%'}}>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.<br/><br/>
                            Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.<br/><br/>
                            Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
                        </p>
                    </Col>
                    <Col lg={6} md={12} sm={24}>
                        <div className="widget-feature">
                            <Typography.Title level={4} className="widget-title">Course Features</Typography.Title>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span > Enrolled :</span> 1200 students</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span> Duration :</span> 2 hours</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>  Lectures :</span> 8</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>  Categories:</span> Technology</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span> Tags:</span> Android, JavaScript</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span> Instructor:</span> Kazi Aryan</li>
                            </ul>
                            <div className="price-wrap " style={{textAlign:'center', justifyContent:'center'}}>
                                <Typography.Title level={5} className="widget-title">Price:<span>$54.00</span></Typography.Title>
                                <Button type="danger" style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#212529' }}>
                                    ENROLL COURSE
                                </Button>
                            </div>
                        </div>
                    </Col>

                </Row>
                </div>

                <div style={{padding: '0 10%', marginTop:'48px' }}>
                    <Row>
                        <Col lg={12} md={12} sm={24}>
                            <div className="widget-feature">
                            <Typography.Title level={1} className="courseDetailsText">Skill you need</Typography.Title>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus  </li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus  </li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas  </li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas  </li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />  Fringilla nulla   </li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />  Fringilla nulla   </li>
                            </ul>
                            </div>
                        </Col >
                        <Col lg={4} md={12} sm={24}>

                        </Col>
                        <Col lg={6} md={12} sm={24}>
                            <div className="widget-feature">
                                <Typography.Title level={4} className="widget-title">Course Features</Typography.Title>
                                <hr />
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span > Enrolled :</span> 1200 students</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span> Duration :</span> 2 hours</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>  Lectures :</span> 8</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>  Categories:</span> Technology</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span> Tags:</span> Android, JavaScript</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span> Instructor:</span> Kazi Aryan</li>
                                </ul>
                                <div className="price-wrap " style={{textAlign:'center', justifyContent:'center'}}>
                                    <Typography.Title level={5} className="widget-title">Price:<span>$54.00</span></Typography.Title>
                                    <Button type="danger" style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#212529' }}>
                                        ENROLL COURSE
                                    </Button>
                                </div>
                            </div>
                        </Col >

                    </Row>

                </div>
            </Fragment>
        );
    }
}

export default CourseDetails;