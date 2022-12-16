import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
    const logout = () => {
        localStorage.removeItem("token");
    };
    return (
        <Navbar bg="primary" className="navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ width:"22%" }} href="/">
                    <img style={{ width:"15%" }} src="https://cdn-icons-png.flaticon.com/512/564/564260.png" alt="logo" />{" "}
                    ConsultorioPsicologico
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="text-white" id="navbarColor02">
                    <Nav className="me-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <NavDropdown title="Registrar" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/signup-cita">
                                Registrar Cita
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/signup-paciente">
                                Registrar Paciente
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/signup-psicologo">
                                Registrar Psicologo
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/signup-valoracion">
                                Registrar Valoracion
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/signup-empleado">
                                Registrar Empleado
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Consultas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/consultar-citas">
                                Consultar Citas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/consultar-psicologos">
                                Consultar Psicologos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/consultar-pacientes">
                                Consultar Pacientes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/consultar-valoraciones">
                                Consultar Valoraciones
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/consultar-empleados">
                                Consultar Empleados
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/login"                          
                            onClick={() => logout()}>
                            Salir
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/user">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="#/login"
                                onClick={() => logout()}>
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
