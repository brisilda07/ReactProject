import React, { useEffect, useState, Fragment } from 'react';
import { Col, Row } from 'antd';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';

const AboutDescription = () => {
    const [aboutDesc, setAboutDesc] = useState('...');

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            setAboutDesc(result[0]['about']);
        });
    }, []);

    return (
        <div style={{ padding: '0 20% 0 10%' }}>
            <Fragment>
                <Row style={{ marginTop: '30px' }}>
                    <Col lg={24} md={24} sm={24}>
                        {parse(aboutDesc)}
                    </Col>
                </Row>
            </Fragment>
        </div>
    );
};

export default AboutDescription;