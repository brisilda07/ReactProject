import React, { useState, useEffect, Fragment } from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import '../../asset/css/custom.css';
import { Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom'
import LightSpeed from "react-reveal/LightSpeed";

const RecentProject = () => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await RestClient.GetRequest(AppUrl.ProjectHome);
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
            <Col key={item.id} lg={8} md={12} sm={24}>
                <Zoom top>
                <Card
                    className="projectCard"
                    hoverable
                    style={{width: '18rem'}}
                    cover={<img alt="example" src={item.img_one}/>}
                >
                    <Card.Meta
                        title={<Typography.Title level={4} className="serviceName">{item.project_name}</Typography.Title>}
                        description={<Typography.Text className="serviceDescription">{item.project_description}</Typography.Text>}
                    />
                    <div style={{textAlign: 'center', marginTop: '16px'}}>
                        <Link to={"/projectDetails/" + item.id + "/" + item.project_name}>
                            <Button type="primary" className="link-style"> View More </Button>
                        </Link>
                    </div>
                </Card>
                </Zoom>
            </Col>
        ));

        return (
            <div style={{padding: '0 10%'}}>
                <Fragment>
                    <LightSpeed top>
                    <Typography.Title justify="center" style={{textAlign: 'center'}} className="serviceMainTitle" level={1}>
                        RECENT PROJECTS
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

export default RecentProject;