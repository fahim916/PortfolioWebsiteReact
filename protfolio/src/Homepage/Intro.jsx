import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css'
import { Container, Col, Row, Image } from 'react-bootstrap';
import selfImage from "../Homepage/self.jpg"
import gmImage from "../Homepage/grandMining.png"
import combatGame from "../Homepage/combatGame.png"
import portfolioImage from "../Homepage/portfolioImage.png"
//style ={{height:758, marginTop: 56, backgroundColor: "black"}}
import reviewWebsite from "../Homepage/reviewWebsite.png"
//<Image src="public\assets\self.jpg" rounded />
export default function Intro() {
    const removeSpace = {
        padding: "0px",
        margin: "0px"
    };
    return (
        <Container fluid style ={{height:1950, marginTop: 48, backgroundColor: "black", position:'relative'}}>
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
                    <p style={{fontStyle: "italic", color: '#626262'}}>My passion for computer science has rewarded me so much as it keeps teaching me valuable skills. I have earned so much self-experience by 
                    engaging myself in coding and building games and websites. So far, I have made different types of games using C#, Unity, and Java as well as websites using React and WordPress. Right 
                    now, I am a developer of a published game that has more than one thousand downloads from all over the world.</p>
                    <h1 style={{color: '#939393'}}>Personal Goals</h1>
                    <p style={{fontStyle: "italic", color: '#626262'}}>My only intention right now is to get better as a developer. Getting an actual internship would help me be a strong candidate. In the future, 
                    I see myself as a respective developer who helps the world to be in a better place.</p>
                </Col>

            </Row>
            <Row className="bg-black" style={{marginTop: 50, paddingBottom: 25}}> 
                <h1 style={{color: '#DCDCDC', marginBottom: 20}} className="text-center">Projects</h1>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <a className='text-decoration-none' href="https://github.com/fahim916/GrandMining.git">
                        <h4 style={{color: '#ABABAB'}} className="text-center">Grand Mining</h4>
                        <Image src={gmImage} rounded className="img-fluid"/>
                    </a>
                    <p style={{backgroundColor: '#0A0A0A', color: '#6c782e', padding:10, marginTop: 20}}>Developed and published a match-3 mobile game on the play store with features including a slot machine, virtual currency, in-app purchases, and time-based rewards. It received more than 1000 downloads from all over the world and achieved 4+ reviews from so many players. Along with this development, I gained two years of Unity and C# experience.</p>
                </Col>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <a className='text-decoration-none' href="https://github.com/fahim916/CombatGameJava.git">
                        <h4 style={{color: '#ABABAB'}}  className="text-center">Combat Game Java</h4>
                        <Image src={combatGame} rounded className="img-fluid"/>
                    </a>
                    <p style={{backgroundColor: '#0A0A0A', color: '#626262', padding:10, marginTop: 20}}>Worked in a group of 9 people and developed a combat game using Java, Eclipse, GitHub, and Jira. Gained experience in the agile software development process.</p>
                </Col>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <a className='text-decoration-none' href="https://github.com/fahim916/PortfolioWebsiteReact.git">
                        <h4 style={{color: '#ABABAB'}}  className="text-center">Portfolio Website</h4>
                        <Image src={portfolioImage} rounded className="img-fluid"/>
                    </a>
                    <p style={{backgroundColor: '#0A0A0A', color: '#626262', padding:10, marginTop: 20}}>Built my first portfolio website using react.js, CSS, and Bootstrap. </p>
                </Col>
                <Col xl={6} lg={6} sm={6} xs={12} className="bg-black text-break" style={{}}>
                    <a className='text-decoration-none' href="https://github.com/fahim916/ReviewWebsite.git">
                        <h4 style={{color: '#ABABAB'}}  className="text-center">Review Website</h4>
                        <Image src={reviewWebsite} rounded className="img-fluid"/>
                    </a>
                    <p style={{backgroundColor: '#0A0A0A', color: '#626262', padding:10, marginTop: 20}}>Built an interactive website where people can see reviews of different products. Gained HTML, CSS, and WordPress skills for the first time.</p>
                </Col>
            </Row>
            <Row className="bg-black" style={{paddingBottom: 25}}>
                <h1 style={{color: '#DCDCDC', paddingBottom: 5}} className="text-center">Contact me for hiring</h1>
                <h6 className="text-muted text-center" style={{removeSpace, fontFamily: 'Open Sans', fontWeight: '400'}}>Email: fahimashad.usa@gmail.com</h6>
                <p className=' text-center'>                
                    <a className='text-decoration-none' href="https://www.linkedin.com/in/fahim-ashad-ab5763223">
                        <button type="button text-center" class="btn btn-primary">Linkedin</button>
                    </a> 
                     | 
                    <a className='text-decoration-none' href="https://github.com/fahim916">
                        <button type="button text-center" class="btn btn-success">GitHub</button>
                    </a></p>
            </Row>
        </Container>
    )
}
