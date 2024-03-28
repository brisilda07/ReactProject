import React, { useEffect, useState, Fragment } from 'react';
import { Col, Row, Typography } from 'antd';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom'


const Analysis = () => {
    const [data, setData] = useState([]);
    const [techDesc, setTechDesc] = useState('...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const chartData = await RestClient.GetRequest(AppUrl.ChartData);
                const techData = await RestClient.GetRequest(AppUrl.HomeTechDesc);

                setData(chartData);
                setTechDesc(techData[0]['tech_description']);
            } catch (error) {
                console.error("Error fetching analysis data:", error);
            } finally {
                setTimeout(() => setLoading(false), 1000);
            }
        };
        fetchData();
    }, []);

    let blue = "#051b35";

    if (loading) {
        return <Loading />;
    } else {
        return (
            <div style={{padding: '0 10%'}}>
                <Fragment>
                    <LightSpeed top>
                    <Typography.Title justify="center" style={{textAlign: 'center'}} className="serviceMainTitle"
                                      level={1}>
                        TECHNOLOGY USE
                    </Typography.Title>
                    </LightSpeed>
                    <br/><br/>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={12} md={12} sm={24} style={{alignItems: 'justify', height: '400px'}}>
                            <ResponsiveContainer width="70%" height="100%">
                                <BarChart width={80} height={300} data={data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={8} md={12} sm={24}
                             style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Zoom top>
                            <p style={{textAlign: 'justify'}} className="serviceDescription">
                                {parse(techDesc)}
                            </p>
                            </Zoom>
                        </Col>
                    </Row>
                </Fragment>
            </div>
        );
    }
};

export default Analysis;