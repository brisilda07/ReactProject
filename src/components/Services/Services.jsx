import React, { useState, useEffect, Fragment } from 'react';
import { Col, Image, Row, Typography } from 'antd';
import '../../asset/css/custom.css';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom'
import LightSpeed from 'react-reveal/LightSpeed'

const Services = () => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await RestClient.GetRequest(AppUrl.Services);
                if (result == null) {
                    setError(true);
                } else {
                    setMyData(result);
                }
            } catch (error) {
                setError(true);
            } finally {
                setTimeout(() => setLoading(false), 1000);
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
            <Col key={item.id} lg={8} md={12} sm={24} style={{ textAlign: 'center' }}>
                <Zoom top>
                <div className="serviceCard">
                    <Image className="ecommerceIcon" src={item.service_logo} />
                    <Typography.Title className="serviceName" level={2}>{item.service_name}</Typography.Title>
                    <p style={{ textAlign: 'justify' }} className="serviceDescription">{item.service_description}</p>
                </div>
                </Zoom>
            </Col>
        ));

        return (
            <Fragment>
                <LightSpeed top>
                <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>MY SERVICES</Typography.Title>
                <br /><br />
                <div className="bottom"></div>
                </LightSpeed>

                <div style={{ padding: '0 10%' }}>
                    <Row justify="space-around" gutter={[16, 16]}>
                        {MyView}
                    </Row>
                </div>
            </Fragment>
        );
    }
};

export default Services;
