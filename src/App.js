import "./App.css";
import { Home, Login, Paciente, Psicologo } from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, ProtectedRoutes, Footer } from "./components";
import "bootswatch/dist/lumen/bootstrap.min.css";

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

                    <Route element={<ProtectedRoutes />}>
                        <Route path="/paciente" element={<Paciente />} />
                        <Route path="/psicologo" element={<Psicologo />} />
                    </Route>
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
