import { Home, Login, P404, Paciente, Psicologo, Signin } from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, ProtectedRoutes, Footer } from "./components";
import "bootswatch/dist/materia/bootstrap.min.css";
import Admin from "./pages/Admin";
import ConsultarCitas from "./pages/ConsulCitas";
import ConsultarPsicologos from "./pages/ConsultPsicologos";
import ConsultarPacientes from "./pages/ConsultPacientes";
import SignupPsicologo from "./pages/SignupPsicologo";
import SignupCita from "./pages/SignupCita";
import SignupPaciente from "./pages/SignupPaciente";
import SignupValoracion from "./pages/SignupValoracion";
import ConsultarValoraciones from "./pages/ConsultValoraciones";

function App() {
    return (
        <HashRouter>
            <NavBar />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                                <Footer />
                            </>
                        }
                    />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signinPaciente" element={<Signin rol={"paciente"}/>} />
                    <Route path="/signup-paciente" element={<SignupPaciente />} />
                    
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/paciente" element={<Paciente />} />
                        <Route path="/psicologo" element={<Psicologo />} />
                        <Route path="/admin" element={<Admin />} />

                        <Route path="/consultar-citas" element={<ConsultarCitas />} />
                        <Route path="/consultar-psicologos" element={<ConsultarPsicologos />} />
                        <Route path="/consultar-pacientes" element={<ConsultarPacientes />} />
                        <Route path="/consultar-valoraciones" element={<ConsultarValoraciones />} />
                        
                        <Route path="/signup-cita" element={<SignupCita />} />
                        <Route path="/signup-paciente" element={<SignupPaciente />} />
                        <Route path="/signup-psicologo" element={<SignupPsicologo />} />
                        <Route path="/signup-valoracion" element={<SignupValoracion />} />
                        <Route path="/signup-empleado" element={<SignupPaciente />} />
                        <Route path="/signin" element={<Signin rol={"psicologo"} />} />                   

                        <Route path="*" element={<P404 />} />
                    </Route>
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
