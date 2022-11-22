import { Home, Login, P404, Paciente, Psicologo, Signin } from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, ProtectedRoutes, Footer } from "./components";
import "bootswatch/dist/lumen/bootstrap.min.css";
import Admin from "./pages/Admin";
import ConsultarCitas from "./pages/ConsultarCitas";
import ConsultarPsicologos from "./pages/ConsultarPsicologos";
import ConsultarPacientes from "./pages/ConsultarPacientes";

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
                    
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/paciente" element={<Paciente />} />
                        <Route path="/psicologo" element={<Psicologo />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/consultarCitas" element={<ConsultarCitas />} />
                        <Route path="/consultarPsicologos" element={<ConsultarPsicologos />} />
                        <Route path="/consultarPacientes" element={<ConsultarPacientes />} />
                        <Route path="/signinPsicologo" element={<Signin rol={"psicologo"} />} />                   

                        <Route path="*" element={<P404 />} />
                    </Route>
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
