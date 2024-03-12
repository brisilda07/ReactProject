import React, { useEffect, useState, Fragment } from 'react';
import { Col, Row, Typography } from 'antd';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';

const Analysis = () => {
    const [data, setData] = useState([]);
    const [techDesc, setTechDesc] = useState('...');

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ChartData).then(result => {
            setData(result);
        });
        RestClient.GetRequest(AppUrl.HomeTechDesc).then(result => {
            setTechDesc(result[0]['tech_description']);
        });
    }, []);

    let blue = "#051b35";

    return (
        <div style={{ padding: '0 10%' }}>
            <Fragment>
                <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>
                    TECHNOLOGY USE
                </Typography.Title>
                <br /><br />
                <div className="bottom"></div>
                <Row>
                    <Col lg={12} md={12} sm={24} style={{ alignItems: 'justify', height: '400px' }}>
                        <ResponsiveContainer width="70%" height="100%">
                            <BarChart width={80} height={300} data={data}>
                                <XAxis dataKey="Technology" />
                                <Tooltip />
                                <Bar dataKey="Projects" fill={blue} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={8} md={12} sm={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ textAlign: 'justify' }} className="serviceDescription">
                            {parse(techDesc)}
                        </p>
                    </Col>
                </Row>
            </Fragment>
        </div>
    );
};

export default Analysis;