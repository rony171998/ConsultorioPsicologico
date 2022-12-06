import { SignInPaciente } from "../components";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { setupServer } from "msw/node";

describe("SignInPaciente", () => {

    const server = setupServer(
        rest.post("http://localhost:4000/api/v1/paciente", (req, res, ctx) => {
            return res(
                ctx.json({
                    id: 1,
                    nombre: "Paciente",
                })
            );
        })
    );
        it("should render the component", async () => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <SignInPaciente />
                </HashRouter>
            </Provider>
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
            TipoDocumento: "Cedula de Ciudadania",
            paciente_id: "1065842715",
            email: "rony@gmail.com",
            password: "pass1234",
        };

        const nameInput = screen.getByPlaceholderText("Nombre");
        const apellidosInput = screen.getByPlaceholderText("Apellido");
        const sexoInput = screen.getByTestId("select-sexo");
        const EPSInput = screen.getByTestId("select-EPS");
        const ocupacionInput = screen.getByTestId("select-ocupacion");
        const telefonoInput = screen.getByPlaceholderText(/telefono/i);
        const direccionInput = screen.getByPlaceholderText(/direccion/i);
        const fechaNacimientoInput = screen.getByPlaceholderText(/Fecha de Nacimiento/i);
        const TipoDocumentoInput = screen.getByTestId("select-documento");
        const paciente_idInput = screen.getByPlaceholderText(/Numero de Identificacion/i);
        const emailInput = screen.getByPlaceholderText(/correo/i);
        const passwordInput = screen.getByTestId("contraseña");
        const passwordrepeatInput = screen.getByTestId("confirmarContraseña"); 
        const submitButton = screen.getByRole("button", { name: /registrar/i });

        userEvent.type(nameInput, testData.name);
        userEvent.type(apellidosInput, testData.apellidos);
        userEvent.selectOptions(sexoInput, [screen.getByText(testData.sexo)]);
        userEvent.selectOptions(EPSInput, [screen.getByText(testData.EPS)]);
        userEvent.selectOptions(ocupacionInput, [screen.getByText(testData.ocupacion)]);
        userEvent.type(telefonoInput, testData.telefono);
        userEvent.type(direccionInput, testData.direccion);
        userEvent.type(fechaNacimientoInput, testData.fechaNacimiento);
        userEvent.selectOptions(TipoDocumentoInput, [screen.getByText(testData.TipoDocumento)]);
        userEvent.type(paciente_idInput, testData.paciente_id);
        userEvent.type(emailInput, testData.email);
        userEvent.type(passwordInput, testData.password);
        userEvent.type(passwordrepeatInput, testData.password);

        server.listen();
        userEvent.click(submitButton);
        await waitFor(() => {
            expect(submitButton).not.toBeDisabled()
        });
        expect(nameInput).toHaveValue(testData.name);

        server.close();
    });
});



