import React, { Fragment } from 'react';
import { Button, Col, Image, Row, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faClipboard, faClone, faTags, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const CourseDetails = (props) => {
    let LongTitle = "";
    let LongDescription = "";
    let TotalDuration = "";
    let TotalLecture = "";
    let TotalStudent = "";
    let SkillAll = "";
    let SmallImg = "";

    let CourseDetailsArray = props.courseallData;
    if (CourseDetailsArray.length === 1) {
        LongTitle = CourseDetailsArray[0]['long_title'];
        LongDescription = CourseDetailsArray[0]['long_description'];
        TotalDuration = CourseDetailsArray[0]['total_duration'];
        TotalLecture = CourseDetailsArray[0]['total_lecture'];
        TotalStudent = CourseDetailsArray[0]['total_student'];
        SkillAll = CourseDetailsArray[0]['skill_all'];
        SmallImg = CourseDetailsArray[0]['small_img'];
    }
    return (
        <Fragment>
            <div style={{ padding: '0 10%', marginTop: '48px' }}>
                <Row>
                    <Col lg={16} md={12} sm={24}>
                        <Typography.Title level={1} className="courseDetailsText">{LongTitle}</Typography.Title>
                        <Image src={SmallImg} className="courseDetailsImg" /><br /><br />
                        <p className="courseallDescription" style={{ width: '85%' }}>
                            {LongDescription}
                        </p>
                    </Col>
                    <Col lg={8} md={12} sm={24} style={{ padding: ' 10% 0 0 5%' }}>
                        <div className="widget-feature">
                            <Typography.Title level={4} className="widget-title">Course Features</Typography.Title>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> {TotalStudent} students</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span> Duration :</span> {TotalDuration} hours</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span> Lectures :</span> {TotalLecture}</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span> Categories:</span> Technology</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span> Tags:</span> Android, JavaScript</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span> Instructor:</span> Kazi Aryan</li>
                            </ul>
                            <div className="price-wrap" style={{ textAlign: 'center' }}>
                                <Typography.Title level={5} className="widget-title">Price:<span>$54.00</span></Typography.Title>
                                <Button type="danger" style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#212529' }}>
                                    ENROLL COURSE
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div style={{ padding: '0 10%', marginTop: '48px' }}>
                <Row>
                    <Col lg={24} md={24} sm={24} >
                        <div className="widget-feature" style={{ width:"70%", margin:'0 auto'}}>
                            <Typography.Title level={1} className="courseDetailsText">Skill you need</Typography.Title>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Fringilla nulla</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Fringilla nulla</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default CourseDetails;