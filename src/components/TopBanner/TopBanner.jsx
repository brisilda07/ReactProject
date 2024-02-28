import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css';
import { Row, Col, Typography, Button } from 'antd';

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Row className="topFixedBanner">
                    <div className="topBannerOverlay">
                        <Row className="topContent" justify="center" style={{ textAlign: 'center' }}>
                            <Col>
                                <Typography.Title level={1} className="topTitle">EASY LEARNING</Typography.Title>
                                <Typography.Title level={4} className="topSubTitle">Learn Professionally</Typography.Title>
                                <Button type="primary">Learn More</Button>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Fragment>
        );
    }
}

export default TopBanner;