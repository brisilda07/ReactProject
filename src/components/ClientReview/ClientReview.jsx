import React, { useEffect, useState, Fragment } from 'react';
import { Col, Image, Row, Typography } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom'
import LightSpeed from "react-reveal/LightSpeed";

const ClientReview = () => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await RestClient.GetRequest(AppUrl.ClientReview);
                if (result == null) {
                    setError(true);
                } else {
                    setMyData(result);
                }
            } catch (error) {
                setError(true);
            } finally {
                setTimeout(() => setLoading(false), 3000);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    } else if (error) {
        return <div>Error loading services. Please try again later.</div>;
    } else {

        const MyView = myData.map(item => (
            <div key={item.id}>
                <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Col lg={12} md={12} sm={24}>
                        <Zoom top>
                        <Image className="circleImg" src={item.client_img}/>
                        <Typography.Title className="reviewName" level={2}>{item.client_title}</Typography.Title>
                        <p className="reviewDescription">{item.client_description}</p>
                        </Zoom>
                    </Col>
                </Row>
            </div>
        ));

        let settings = {
            autoplaySpeed: 3000,
            autoPlay: true,
            dots: true,
            infinite: true,
            speed: 3000,
            arrows: true,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <div className="siderBack">
                    <LightSpeed top>
                        <Typography.Title justify="center" style={{textAlign: 'center'}} className="reviewMainTitle"
                                          level={1}>
                            TESTIMONIAL
                        </Typography.Title>
                        <br/><br/>
                        <div className="reviewBottom"></div>
                    </LightSpeed>

                    <Slider {...settings}>
                        {MyView}
                    </Slider>
                </div>
            </Fragment>
        );
    }
};

export default ClientReview;