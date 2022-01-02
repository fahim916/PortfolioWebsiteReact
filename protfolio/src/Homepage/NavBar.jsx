import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export default function NavBar() {
    const changeFont = {
        fontFamily: 'Open Sans'
    };
    return (
        <div style={changeFont}>
            <Navbar collapseOnSelect expand="md" style={{backgroundColor: "#DCDCDC"}} variant="light" Divider fixed="top">
                <div className="container">
                    <Navbar.Brand href="#home">Fahim Ashad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="">
                        <Nav >
                            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://github.com/fahim916/GrandMining.git">Grand Mining</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://github.com/fahim916/CombatGameJava.git">Combat Game</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://github.com/fahim916/PortfolioWebsiteReact.git">Portfolio Website</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://github.com/fahim916/ReviewWebsite.git">Review Website</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
