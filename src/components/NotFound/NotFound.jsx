import React from 'react';
import {Col, Row, Typography} from "antd";

const NotFound = () => {

    return (
            <Row style={{textAlign:'center', justifyContent:'center'}}>
                <Col >
                    <Typography.Title className="serviceName" level={1}>
                        Page is Not Found
                    </Typography.Title>
                    <Typography.Title className="notFound" level={1}>
                        404
                    </Typography.Title>
                </Col>
            </Row>
    );
};

export default NotFound;