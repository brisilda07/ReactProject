import React, {Component, Fragment} from 'react';
import {Col, Row, Typography} from "antd";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[
                {Technology:'PHP',Projects:100},
                {Technology:'MySqli',Projects:90},
                {Technology:'Laravel',Projects:95},
                {Technology:'React',Projects:85},
                {Technology:'OpenCart',Projects:80},
                {Technology:'Vue Js',Projects:70},
                {Technology:'JavaScript',Projects:100}
            ]
        }
    }

    render(){
        let blue = "#051b35"
    return (
        <Fragment>
            <Typography.Title  justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}  >TECHNOLOGY USE</Typography.Title>
            <br/><br/>
            <div className="bottom"> </div>
    <Row>
        <Col span={12} style={{display: 'flex', justifyContent:"center", alignItems: 'center',height:'500px' }}>
            <ResponsiveContainer width="70%" height="100%">
                <BarChart width={80} height={300} data={this.state.data}>
                    <XAxis dataKey="Technology" />
                   <Tooltip />
                    <Bar dataKey="Projects" fill={blue}>

                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </Col>
        <Col span={8} style={{display: 'flex',justifyContent:"center", alignItems: 'center'}}>
            <p style={{ textAlign: 'justify' }} className="serviceDescription">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of easy Learning and a passionate Web Developer, Programmer & Instructor.<br/><br/>
                I am working online for the last 9 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br/><br/>
                Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.
                Education makes the world a better place. Make your world better with new skills.
            </p>
        </Col>
    </Row>
        </Fragment>
    );
};
}
export default Analysis;