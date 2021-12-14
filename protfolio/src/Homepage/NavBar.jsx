import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export default function NavBar() {
    const changeFont = {
        fontFamily: 'Open Sans'
    };
    return (
        <div  style={changeFont}>
            <Navbar collapseOnSelect expand="md" style={{backgroundColor: "#DCDCDC"}} variant="light" Divider fixed="top">
                <div className="container">
                    <Navbar.Brand href="#home">Fahim Ashad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav >
                            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#grand-mining">Grand Mining</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#combat-game">Combat Game</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link eventKey={2} href="#contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
