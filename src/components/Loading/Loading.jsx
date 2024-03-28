import React, {Fragment} from 'react';
import {Col, Image, Row} from "antd";
import LoaderIcon from "../../asset/image/loader.svg"
const Loading = () => {

    return(
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Row>
                    <Col>
                        <Image className="LoaderAnimation" src={LoaderIcon} />
                    </Col>
                </Row>
            </div>
        </Fragment>

        );
};

export default Loading;