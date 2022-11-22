import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="/"> VitalMente </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarColor02">
                    <Nav className="me-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <NavDropdown title="Registrar" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/paciente">
                                Registrar Citas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/psicologo">
                                Registrar Psicologos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/psicologo">
                                Registrar Pacientes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/psicologo">
                                Registrar Valoraciones
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/psicologo">
                                Registrar Empleado
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Consultas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/consultarcitas">
                                Consultar Citas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/consultarpsicologos">
                                Consultar Psicologos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/consultarpacientes">
                                Consultar Pacientes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/consultarvaloraciones">
                                Consultar Valoraciones
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/">Salir</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/User">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/login">
                                Cerrar Sesión
                            </NavDropdown.Item>  
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
