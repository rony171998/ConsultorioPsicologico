import { SignInPaciente } from "../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { rest } from "msw";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("SignInPaciente", () => {
    it("should render the component", () => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <SignInPaciente />
                </HashRouter>
            </Provider>
        );

        server.use(
            rest.post(
                "http://localhost:4000/api/v1/paciente",
                (req, res, ctx) => {
                    return res(
                        ctx.json({
                            id: 1,
                            nombre: "Paciente",
                        })
                    );
                }
            )
        );
        const testData = {
            name: "rony",
            apellidos: "puche",
            sexo: "Masculino",
            EPS: "Sanitas",
            ocupacion: "Estudiante",
            telefono: "3203237766",
            direccion: "calle 1 miami",
            fechaNacimiento: "1998-04-17",
            TipoDocumento: "Cedula de ciudadania",
            paciente_id: "1065842715",
            email: "rony@gmail.com",
            password: "pass1234",
        };

        const nameInput = screen.getByLabelText(/Nombre/i);
        const apellidosInput = screen.getByLabelText(/Apellidos/i);
        const sexoInput = screen.getByLabelText(/sexo/i);
        const EPSInput = screen.getByLabelText(/EPS/i);
        const ocupacionInput = screen.getByLabelText(/ocupacion/i);
        const telefonoInput = screen.getByLabelText(/telefono/i);
        const direccionInput = screen.getByLabelText(/direccion/i);
        const fechaNacimientoInput = screen.getByLabelText(/fechaNacimiento/i);
        const TipoDocumentoInput = screen.getByLabelText(/TipoDocumento/i);
        const paciente_idInput = screen.getByLabelText(/paciente_id/i);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole("button", { name: /registrar/i });

        userEvent.type(nameInput, testData.name);
        userEvent.type(apellidosInput, testData.apellidos);
        userEvent.type(sexoInput, testData.sexo);
        userEvent.type(EPSInput, testData.EPS);
        userEvent.type(ocupacionInput, testData.ocupacion);
        userEvent.type(telefonoInput, testData.telefono);
        userEvent.type(direccionInput, testData.direccion);
        userEvent.type(fechaNacimientoInput, testData.fechaNacimiento);
        userEvent.type(TipoDocumentoInput, testData.TipoDocumento);
        userEvent.type(paciente_idInput, testData.paciente_id);
        userEvent.type(emailInput, testData.email);
        userEvent.type(passwordInput, testData.password);
        userEvent.click(submitButton);

        //expect(screen.getByText("Sign In")).toBeInTheDocument();
    });
});
