import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Image, Row, Typography, Spin } from 'antd';
import projectDetails from '../../asset/image/pdetails.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from "html-react-parser";

const ProjectDetails = () => {
    const { projectID } = useParams();

    const [projectDetails, setProjectDetails] = useState({
        img_two: "...",
        project_name: "...",
        project_description: "...",
        project_features: "...",
        live_preview: "...",
        loading: true
    });

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ProjectDetails + projectID)
            .then(result => {
                setProjectDetails({
                    img_two: result[0]['img_two'],
                    project_name: result[0]['project_name'],
                    project_description: result[0]['project_description'],
                    project_features: result[0]['project_features'],
                    live_preview: result[0]['live_preview'],
                    loading: false
                });
            })
            .catch(error => {
                console.error("Error fetching project details:", error);
                setProjectDetails(prevState => ({ ...prevState, loading: false }));
            });
    }, [projectID]);

    if (projectDetails.loading) {
        return <Spin size="large" />;
    }

    return (
        <Fragment>
            <div style={{ padding: '0 10%' }}>
                <Row style={{ marginTop: '40px' }}>
                    <Col lg={12} md={12} sm={24}>
                        <div className='about-thumb-wrap after-shape'>
                            <Image src={projectDetails.img_two} />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={24} style={{ marginTop: '48px' }}>
                        <div className='project-details' style={{ marginLeft: '35px' }}>
                            <Typography.Title level={1} className='projectDetailsText'>{projectDetails.project_name}</Typography.Title>
                            <p className='detailsName'>
                                {parse(projectDetails.project_description)}
                            </p>
                            <br />
                            <p className="cardSubTitle">
                                <FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />
                                {parse(projectDetails.project_features)}
                            </p>
                            <Button type="primary" className="link-style" href={projectDetails.live_preview}>
                                Live Preview
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default ProjectDetails;