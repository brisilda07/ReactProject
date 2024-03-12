import React, { useState, useEffect, Fragment } from 'react';
import { Col, Image, Row, Typography } from 'antd';
import '../../asset/css/custom.css';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

const Services = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Services).then(result => {
            setMyData(result);
        });
    }, []);

    const MyView = myData.map(item => (
        <Col key={item.id} lg={8} md={12} sm={24} style={{ textAlign: 'center' }}>
            <div className="serviceCard">
                <Image className="ecommerceIcon" src={item.service_logo} />
                <Typography.Title className="serviceName" level={2}>{item.service_name}</Typography.Title>
                <p style={{ textAlign: 'justify' }} className="serviceDescription">{item.service_description}</p>
            </div>
        </Col>
    ));

    return (
        <Fragment>
            <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>MY SERVICES</Typography.Title>
            <br /><br />
            <div className="bottom"></div>

            <div style={{ padding: '0 10%' }}>
                <Row justify="space-around" gutter={[16, 16]}>
                    {MyView}
                </Row>
            </div>
        </Fragment>
    );
};

export default Services;
