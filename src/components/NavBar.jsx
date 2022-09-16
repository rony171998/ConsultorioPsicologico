import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="/"> Smart-Mart </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarColor02">
                    <Nav className="me-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <NavDropdown title="Registrar" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Electronics</NavDropdown.Item>
                            <NavDropdown.Item href="/">Clothing</NavDropdown.Item>
                            <NavDropdown.Item href="/">Books</NavDropdown.Item>
                            <NavDropdown.Item href="/">Movies</NavDropdown.Item>
                            <NavDropdown.Item href="/">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="/">Other</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                                       
                    <Nav>
                        <Nav.Link
                            
                            href="#/User"
                        ></Nav.Link>

                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/User">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/login">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/signin">
                                Sign Up
                            </NavDropdown.Item>
                            
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
