import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Row, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";

class RecentProject extends Component{
    render(){
        return (
           <Fragment>
               <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}  >RECENT PROJECT</Typography.Title>
               <br/><br/>
               <div className="bottom"> </div>
               <Row justify="center" gutter={[8,16]}>
                   <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
                       <Card className="projectCard"
                           hoverable
                           style={{ width: '18rem' }}
                           cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1709042679~exp=1709043279~hmac=8fcadabc76478122171fbe7acb39da029497e875341aeec6ef0eb7dd161e5e2d" />}>
                           <Card.Meta title={<Typography.Title level={4} className="serviceName">Project Name One</Typography.Title>}
                                      description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                           />
                           <div style={{ textAlign: 'center', marginTop: '16px' }}>
                               <Button type="primary">Visit Website</Button>
                           </div>

                       </Card>
                   </Col>
                   <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
                       <Card className="projectCard"
                           hoverable
                           style={{ width: '18rem' }}
                           cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?t=st=1709042679~exp=1709043279~hmac=f9eede59b1895aee6dd6e2c9a2b977afcfb46dfed12fd75f8d29ddbe26feead4" />}>
                           <Card.Meta title={<Typography.Title level={4} className="serviceName">Project Name One</Typography.Title>}
                                      description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                           />
                           <div style={{ textAlign: 'center', marginTop: '16px' }}>
                               <Button type="primary">Visit Website</Button>
                           </div>

                       </Card>
                   </Col>
                   <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
                       <Card className="projectCard"
                           hoverable
                           style={{ width: '18rem' }}
                           cover={<img alt="example" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1709042679~exp=1709043279~hmac=8fcadabc76478122171fbe7acb39da029497e875341aeec6ef0eb7dd161e5e2d" />}>
                           <Card.Meta title={<Typography.Title level={4} className="serviceName">Project Name One</Typography.Title>}
                                      description={<Typography.Text className="serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography.Text>}
                                      />
                           <div style={{ textAlign: 'center', marginTop: '16px' }}>
                               <Button type="primary">Visit Website</Button>
                           </div>

                       </Card>
                   </Col>
               </Row>
           </Fragment>
        );
    }
}

export default RecentProject;