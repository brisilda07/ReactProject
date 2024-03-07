import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Row, Typography} from "antd";
import {Link} from "react-router-dom";

class AllProjects extends Component {
    render() {
        return (
            <div style={{padding: '0 10%' }}>
                <Fragment>
                    <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>
                        RECENT PROJECTS
                    </Typography.Title>
                    <br /><br />
                    <div className="bottom"></div>
                    <Row justify="center" gutter={[16, 16]}>
                        <Col lg={8} md={12} sm={24} >
                            <Card
                                className="projectCard"
                                hoverable
                                style={{ width: '18rem' }}
                                cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1709042679~exp=1709043279~hmac=8fcadabc76478122171fbe7acb39da029497e875341aeec6ef0eb7dd161e5e2d" />}
                            >
                                <Card.Meta
                                    title={<Typography.Title level={4} className="serviceName">Project Name One</Typography.Title>}
                                    description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                                />
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <Button type="primary">
                                        <Link className="link-style" to="/projectDetails" >View More</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={8} md={12} sm={24} >
                            <Card
                                className="projectCard"
                                hoverable
                                style={{ width: '18rem' }}
                                cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?t=st=1709042679~exp=1709043279~hmac=f9eede59b1895aee6dd6e2c9a2b977afcfb46dfed12fd75f8d29ddbe26feead4" />}
                            >
                                <Card.Meta
                                    title={<Typography.Title level={4} className="serviceName">Project Name Two</Typography.Title>}
                                    description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                                />
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <Button type="primary">
                                        <Link className="link-style" to="/projectDetails" >View More</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={8} md={12} sm={24} >
                            <Card
                                className="projectCard"
                                hoverable
                                style={{ width: '18rem' }}
                                cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1709042679~exp=1709043279~hmac=8fcadabc76478122171fbe7acb39da029497e875341aeec6ef0eb7dd161e5e2d" />}
                            >
                                <Card.Meta
                                    title={<Typography.Title level={4} className="serviceName">Project Name Three</Typography.Title>}
                                    description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                                />
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <Button type="primary">
                                        <Link className="link-style" to="/projectDetails" >View More</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={8} md={12} sm={24} >
                            <Card
                                className="projectCard"
                                hoverable
                                style={{ width: '18rem' }}
                                cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1709042679~exp=1709043279~hmac=8fcadabc76478122171fbe7acb39da029497e875341aeec6ef0eb7dd161e5e2d" />}
                            >
                                <Card.Meta
                                    title={<Typography.Title level={4} className="serviceName">Project Name One</Typography.Title>}
                                    description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                                />
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <Button type="primary">
                                        <Link className="link-style" to="/projectDetails" >View More</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={8} md={12} sm={24} >
                            <Card
                                className="projectCard"
                                hoverable
                                style={{ width: '18rem' }}
                                cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?t=st=1709042679~exp=1709043279~hmac=f9eede59b1895aee6dd6e2c9a2b977afcfb46dfed12fd75f8d29ddbe26feead4" />}
                            >
                                <Card.Meta
                                    title={<Typography.Title level={4} className="serviceName">Project Name Two</Typography.Title>}
                                    description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                                />
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <Button type="primary">
                                        <Link className="link-style" to="/projectDetails" >View More</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={8} md={12} sm={24} >
                            <Card
                                className="projectCard"
                                hoverable
                                style={{ width: '18rem' }}
                                cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1709042679~exp=1709043279~hmac=8fcadabc76478122171fbe7acb39da029497e875341aeec6ef0eb7dd161e5e2d" />}
                            >
                                <Card.Meta
                                    title={<Typography.Title level={4} className="serviceName">Project Name Three</Typography.Title>}
                                    description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                                />
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <Button type="primary">
                                        <Link className="link-style" to="/projectDetails" >View More</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Fragment>
            </div>
        );
    }
}

export default AllProjects;