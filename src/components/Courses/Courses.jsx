import React, { useState, useEffect, Fragment } from 'react';
import { Col, Image, Row, Typography } from 'antd';
import { Link } from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom'
import LightSpeed from "react-reveal/LightSpeed";

const Courses = () => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await RestClient.GetRequest(AppUrl.CourseHome);
                if (result == null) {
                    setError(true);
                } else {
                    setMyData(result);
                }
            } catch (error) {
                setError(true);
            } finally {
                setTimeout(() => setLoading(false), 3000);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    } else if (error) {
        return <div>Error loading services. Please try again later.</div>;
    } else {

        const MyView = myData.map(item => (
            <Col key={item.id} lg={12} md={24} sm={24} style={{display: 'flex', justifyContent: 'flex-start'}}>
                <Row>
                    <Col lg={12} md={12} sm={24} className="p-2">
                        <Zoom top>
                        <Image className="courseImg" src={item.small_img}/>
                        </Zoom>
                    </Col>
                    <Col lg={12} md={12} sm={24} style={{padding: '40px'}}>
                        <Zoom top>
                            <Typography.Title justify="center" style={{textAlign: 'justify'}} className="serviceName"
                                              level={3}>
                                {item.short_title}
                            </Typography.Title>
                            <p className="serviceDescription">
                                {item.short_description}
                            </p>
                        </Zoom>
                            <div style={{textAlign: 'justify', marginTop: '16px'}}>
                                <Link to={"/coursedetails/" + item.id + "/" + item.short_title} className="float-left">
                                    View Details
                                </Link>
                            </div>
                    </Col>
                </Row>
            </Col>
        ));

        return (
            <div style={{padding: '0 10%'}}>
                <Fragment>
                    <LightSpeed top>
                    <Typography.Title justify="center" style={{textAlign: 'center'}} className="serviceMainTitle"
                                      level={1}>
                        MY COURSES
                    </Typography.Title>
                    <br/><br/>
                    <div className="bottom"></div>
                    </LightSpeed>
                    <Row justify="center" gutter={[16, 16]}>
                        {MyView}
                    </Row>
                </Fragment>
            </div>
        );
    }
};

export default Courses;