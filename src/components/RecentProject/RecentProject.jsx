import React, { useState, useEffect, Fragment } from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import '../../asset/css/custom.css';
import { Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

const RecentProject = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ProjectHome).then(result => {
            setMyData(result);
        });
    }, []);

    const MyView = myData.map(item => (
        <Col key={item.id} lg={8} md={12} sm={24}>
            <Card
                className="projectCard"
                hoverable
                style={{ width: '18rem' }}
                cover={<img alt="example" src={item.img_one} />}
            >
                <Card.Meta
                    title={<Typography.Title level={4} className="serviceName">{item.project_name}</Typography.Title>}
                    description={<Typography.Text className="serviceDescription">{item.project_description}</Typography.Text>}
                />
                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <Link to={"/projectDetails/" + item.id}>
                        <Button type="primary" className="link-style">
                            View More
                        </Button>
                    </Link>
                </div>
            </Card>
        </Col>
    ));

    return (
        <div style={{ padding: '0 10%' }}>
            <Fragment>
                <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>
                    RECENT PROJECTS
                </Typography.Title>
                <br /><br />
                <div className="bottom"></div>
                <Row justify="center" gutter={[16, 16]}>
                    {MyView}
                </Row>
            </Fragment>
        </div>
    );
};

export default RecentProject;