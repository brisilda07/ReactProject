import React, {Component, Fragment} from 'react';
import {Button, Col, Row, Typography} from "antd";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Row className="topFixedPage">
                    <div className="topPageOverlay">
                        <Row className="topContentPage" justify="center" style={{ textAlign: 'center' }}>
                            <Col>

                        <Typography.Title level={4} className="topPageTitle">{this.props.pagetitle}</Typography.Title>

                            </Col>
                        </Row>
                    </div>
                </Row>
            </Fragment>
        );
    }
}

export default PageTop;