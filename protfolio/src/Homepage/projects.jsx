import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css'
import { Container, Col, Row, Image } from 'react-bootstrap';
import selfImage from "../Homepage/self.jpg"

export default function projects() {
    const removeSpace = {
        padding: "0px",
        margin: "0px"
    };
    return (
        <Container fluid style ={{height:900, marginTop: 200, backgroundColor: "grey", position: 'absolute'}}>
            <Row className="bg-muted ">
                <Col xl={5} lg={6} sm={7} className="bg-black my-auto mt-3" style={{}}>
                    <h1>sdfdas</h1>
                </Col>
                <Col xl={5} lg={6} sm={7}  className="my-auto" style={{paddingTop: 25}}>
                    <h1 className="text-center text-light animate__animated animate__fadeInLeft" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '600'}}>Fahim Ashad</h1>
                    <h6 className="text-center text-light animate__animated animate__fadeInLeft" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '400'}}>Programmer/front-end developer.</h6>
                    <h6 className="text-center text-muted" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '400'}}>CSS/JavaScript/Java/C#/C++/React</h6>
                </Col>
            </Row>
            <Row className=" text-center">
                <h1></h1>
            </Row>
        </Container>
    )
}
