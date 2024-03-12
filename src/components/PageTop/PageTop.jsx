import React, { Fragment } from 'react';
import { Col, Row, Typography } from "antd";

const PageTop = ({ pagetitle }) => {
    return (
        <Fragment>
            <Row className="topFixedPage">
                <div className="topPageOverlay">
                    <Row className="topContentPage" justify="center" style={{ textAlign: 'center' }}>
                        <Col>
                            <Typography.Title level={4} className="topPageTitle">{pagetitle}</Typography.Title>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Fragment>
    );
};

export default PageTop;