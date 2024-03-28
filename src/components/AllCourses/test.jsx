import React, {Component, Fragment} from 'react';
import {Col, Image, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";


class AllCourses extends Component {

    constructor(){
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            if(result == null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({myData:result,loading:false});
            } // end error else
        }).catch(error=>{
            this.setState({error:true})
        })
    }

    render() {
        if(this.state.loading == true){
            return <Loading />
        }
        else if(this.state.loading == false){

            const MyList = this.state.myData;
        const MyView = MyList.map(MyList=>{

            return <Col lg={12} md={24} sm={24} style={{ display: 'flex', justifyContent: 'justify' }}>
                <Row>
                    <Col lg={12} md={12} sm={24} className="p-2">
                        <Image className="courseImg" src={MyList.small_img} />
                    </Col>
                    <Col lg={12} md={12} sm={24} style={{ padding: '40px' }}>
                        <Typography.Title justify="center" style={{ textAlign: 'justify' }} className="serviceName" level={3}>
                            {MyList.short_title}
                        </Typography.Title>
                        <p className="serviceDescription">
                            {MyList.short_description}
                        </p>
                        <div style={{ textAlign: 'justify', marginTop: '16px' }}>
                            <Link to="/coursedetails" className="float-left">
                                View Details
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Col>
        })

        return (
            <div style={{padding: '0 10%' }}>
                <Fragment>
                    <Typography.Title justify="center" style={{ textAlign: 'center' }} className="serviceMainTitle" level={1}>
                        MY COURSES
                    </Typography.Title>
                    <br /><br />
                    <div className="bottom"></div>
                    <Row justify="center" gutter={[16, 16]}>
                        {MyView}
                    </Row>
                </Fragment>
            </div>
        );
        } // end Else
    }
}

export default AllCourses;