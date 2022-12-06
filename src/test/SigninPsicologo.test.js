import { SignInPsicologo } from "../components";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { setupServer } from "msw/node";

describe("SignUpPsicologo", () => {

    const server = setupServer(
        rest.post("http://localhost:4000/api/v1/psocologo", (req, res, ctx) => {
            return res(
                ctx.json({
                    id: 1,
                    nombre: "Psicológo",
                })
            );
        })
    );

    it("should render the component", async () => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <SignInPsicologo />
                </HashRouter>
            </Provider>
        );

        const testData = {
            name: "jorge",
            apellidos: "puche",
            sexo: "Masculino",
            ocupacion: "Estudiante",
            telefono: "3203237766",
            direccion: "calle 1 miami",
            fechaNacimiento: "04-17-1998",
            TipoDocumento: "Cedula de Ciudadania",
            psicologo_id: "1234567891",
            email: "rony@gmail.com",
            password: "pass1234",
            fechaEstudio: "10-10-2022",
            universidad: "upc",
            areaPsicologica: "area1",
            areaEspecializacion: "especializacion1",
            mesesExperiencia: "6",
        };

        const nameInput = screen.getByPlaceholderText("Nombre");
        const apellidosInput = screen.getByPlaceholderText("Apellido");
        const sexoInput = screen.getByTestId("select-sexo");
        const ocupacionInput = screen.getByTestId("select-ocupacion"); 
        const telefonoInput = screen.getByPlaceholderText(/telefono/i);
        const direccionInput = screen.getByPlaceholderText(/direccion/i);
        const fechaNacimientoInput = screen.getByLabelText(/Fecha de nacimiento/i);
        const TipoDocumentoInput = screen.getByTestId("select-documento");
        const paciente_idInput = screen.getByPlaceholderText(/numero Identificacion/i);
        const emailInput = screen.getByPlaceholderText(/correo/i);
        const passwordInput = screen.getByTestId("contraseña");
        const passwordrepeatInput = screen.getByTestId("confirmarContraseña");
        const fechaEstudioInput = screen.getByPlaceholderText(/fecha Finalizacion Estudios/i);
        const universidadInput = screen.getByText("Universida de graduacion");
        const areaPsicologicaInput = screen.getByPlaceholderText(/Area Psicologica/i);
        const areaEspecializacionInput =screen.getByPlaceholderText(/Area de Especializacion/i);
        const mesesExperienciaInput =screen.getByPlaceholderText(/Meses de Experiencia/i);
        const submitButton = screen.getByRole("button", { name: /registrar/i });

        userEvent.type(nameInput, testData.name);
        userEvent.type(apellidosInput, testData.apellidos);
        userEvent.selectOptions(sexoInput, [screen.getByText(testData.sexo)]);
        userEvent.selectOptions(ocupacionInput, [screen.getByText(testData.ocupacion)]); 
        userEvent.type(telefonoInput, testData.telefono);
        userEvent.type(direccionInput, testData.direccion);
        userEvent.type(fechaNacimientoInput, testData.fechaNacimiento);
        userEvent.selectOptions(TipoDocumentoInput, [screen.getByText(testData.TipoDocumento)]);
        userEvent.type(paciente_idInput, testData.psicologo_id);
        userEvent.type(emailInput, testData.email);
        userEvent.type(passwordInput, testData.password);
        userEvent.type(passwordrepeatInput, testData.password);
        userEvent.type(fechaEstudioInput, testData.fechaEstudio);
        userEvent.type(universidadInput, testData.universidad);
        userEvent.type(areaPsicologicaInput, testData.areaPsicologica);
        userEvent.type(areaEspecializacionInput, testData.areaEspecializacion);
        userEvent.type(mesesExperienciaInput, testData.mesesExperiencia);

        server.listen();
        userEvent.click(submitButton);
        await waitFor(() => expect(submitButton).not.toBeDisabled());
        
        expect(nameInput).toHaveValue(testData.name);

        server.close();
    });
});
