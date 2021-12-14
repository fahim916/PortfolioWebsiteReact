import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css'
import { Container, Col, Row, Image } from 'react-bootstrap';
import selfImage from "../Homepage/self.jpg"
import gmImage from "../Homepage/grandMining.png"
import combatGame from "../Homepage/combatGame.png"
//style ={{height:758, marginTop: 56, backgroundColor: "black"}}
//<Image src="public\assets\self.jpg" rounded />
export default function Intro() {
    const removeSpace = {
        padding: "0px",
        margin: "0px"
    };
    return (
        <Container fluid  style ={{height:1700, marginTop: 48, backgroundColor: "black", position:'relative'}}>
            <Row className="bg-muted ">
                <Col xl={5} lg={5} sm={6} xs={12} className="bg-black my-auto mt-3 " style={{}}>
                    <Image src={selfImage} rounded className="img-fluid"/>
                </Col>
                <Col xl={3} lg={3} sm={6} xs={12}  className="my-auto text-left" style={{paddingTop: 32, paddingBottom: 20}}>
                    <h1 className="text-light animate__animated animate__fadeInLeft" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '600'}}>Fahim Ashad</h1>
                    <h6 className="text-light animate__animated animate__fadeInLeft" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '400'}}>Programmer/front-end developer.</h6>
                    <h6 className="text-muted" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '400'}}>CSS/JavaScript/Java/C#/C++</h6>
                    <h6 className="text-muted" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '400'}}>React/Unity</h6>
                </Col>
                <Col xl={4} lg={4} sm={12} xs={12}  className="px-auto text-left animate__animated animate__slideInRight" style={{paddingTop: 20, paddingBottom: 10, marginTop:10, backgroundColor: '#0A0A0A'}}>
                    <h1 style={{color: '#939393'}}>Achievements</h1>
                    <p style={{fontStyle: "italic", color: '#626262'}}>Wanna be the best programmer in the world and help poor people who are leading 
                    a bad lifestyle Wanna be the best programmer in the world and help poor people who are leading a bad lifestyle
                    Wanna be the best programmer in the world and help poor people who are leading a bad lifestyle
                    Wanna be the best programmer in the world and help poor people who are leading a bad lifestyle
                    Wanna be the best programmer in the world and help poor people who are leading a bad lifestyle</p>
                    <h1 style={{color: '#939393'}}>Personal Goals</h1>
                    <p style={{fontStyle: "italic", color: '#626262'}}>Wanna be the best programmer in the world and help poor people who are leading a bad lifestyle</p>
                </Col>

            </Row>
            <Row className="" style={{marginTop: 50, marginBottom: 25}}> 
                <h1 style={{color: '#DCDCDC', marginBottom: 20}} className="text-center">Projects</h1>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <h4 style={{color: '#ABABAB'}} className="text-center">Grand Mining</h4>
                    <Image src={gmImage} rounded className="img-fluid"/>
                    <p style={{backgroundColor: '#0A0A0A', color: '#626262', padding:10, marginTop: 20}}>sadfjsadfasdjflkasjfksldjfksdljklsdjflksdjflsjlfsdfjsadlkjfkasljflsdajfsdlakfjaslfjsdlfjsdlfjsdlfjsdlfjsdldfahim</p>
                </Col>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <h4 style={{color: '#ABABAB'}}  className="text-center">Combat Game Java</h4>
                    <Image src={combatGame} rounded className="img-fluid"/>
                    <p style={{backgroundColor: '#0A0A0A', color: '#626262', padding:10, marginTop: 20}}>sadfjsadfasdjflkasjfksldjfksdljklsdjflksdjflsjlfsdfjsadlkjfkasljflsdajfsdlakfjaslfjsdlfjsdlfjsdlfjsdlfjsdldfahim</p>
                </Col>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <h4 style={{color: '#ABABAB'}}  className="text-center">Review Website</h4>
                    <p style={{backgroundColor: '#0A0A0A', color: '#626262', padding:10, marginTop: 20}}>sadfjsadfasdjflkasjfksldjfksdljklsdjflksdjflsjlfsdfjsadlkjfkasljflsdajfsdlakfjaslfjsdlfjsdlfjsdlfjsdlfjsdldfahim</p>
                </Col>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <h4 style={{color: '#ABABAB'}}  className="text-center">Review Website</h4>
                    <p style={{backgroundColor: '#0A0A0A', color: '#626262', padding:10, marginTop: 20}}>sadfjsadfasdjflkasjfksldjfksdljklsdjflksdjflsjlfsdfjsadlkjfkasljflsdajfsdlakfjaslfjsdlfjsdlfjsdlfjsdlfjsdldfahim</p>
                </Col>
            </Row>
        </Container>
    )
}
