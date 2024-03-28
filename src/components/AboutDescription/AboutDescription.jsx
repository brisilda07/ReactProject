import React, { useEffect, useState, Fragment } from 'react';
import { Col, Row } from 'antd';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import Zoom from "react-reveal/Zoom";


const AboutDescription = () => {
    const [aboutDesc, setAboutDesc] = useState('...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            setTimeout(() => { // Simulate a delay
                setAboutDesc(result[0]['about']);
                setLoading(false);
            }, 1000); // Delay in milliseconds
        }).catch(error => {
            // Handle error if needed
            setTimeout(() => { // Simulate a delay even if there's an error
                setLoading(false);
            }, 1000); // Delay in milliseconds
        });
    }, []);

    if (loading) {
        return <Loading />;
    } else {

        return (
            <div style={{padding: '0 20% 0 10%'}}>
                <Fragment>
                    <Row style={{marginTop: '30px'}}>

                        <Col lg={24} md={24} sm={24}>
                            <Zoom top>
                            {parse(aboutDesc)}
                            </Zoom>
                        </Col>
                    </Row>
                </Fragment>
            </div>
        );
    }//end else
};

export default AboutDescription;