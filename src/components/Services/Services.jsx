import React, {Component, Fragment} from 'react';
import {Col, Image, Row, Space, Typography} from "antd";
import '../../asset/css/custom.css'
import designIcon from '../../asset/image/design.png'
import ecommerceIcon from '../../asset/image/ecommerce.png'
import webIcon from '../../asset/image/web.png'



class Services extends Component {
    render() {
        return (
            <Fragment>
                <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}  >MY SERVICES</Typography.Title>
                <br/><br/>
                <div className="bottom"> </div>

                <Row justify="space-around">

                    <Col  style={{ textAlign: 'center' }}>
                        <div className="serviceCard">
                            <Image className="ecommerceIcon"  src={ecommerceIcon} />
                            <Typography.Title className="serviceName" level={2}  >Ecommerce</Typography.Title>
                            <p style={{ textAlign: 'justify' }} className="serviceDescription"> I will design and develop ecommerce online store website</p>
                        </div>
                    </Col>

                    <Col style={{ textAlign: 'center' }}>
                        <div className="serviceCard">
                            <Image className="designIcon" src={designIcon} />
                            <Typography.Title className="serviceName"  level={2} >Web Design</Typography.Title>
                            <p style={{ textAlign: 'justify' }} className="serviceDescription"> Qualified web design and attractive effects which catches visitor's Eye</p>
                        </div>
                    </Col>

                    <Col   style={{ textAlign: 'center' }}>
                        <div className="serviceCard">
                            <Image className="webIcon" src={webIcon} />
                            <Typography.Title className="serviceName" level={2} >Web Development</Typography.Title>
                            <p style={{ textAlign: 'justify' }}className="serviceDescription"> Clean and fresh issue free code to make your website dynamic perfectly.</p>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Services;