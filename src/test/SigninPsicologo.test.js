import { SignInPsicologo } from "../components";
import { render, screen } from "@testing-library/react";
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

    it("should render the component", () => {
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
            ocupacion: "psicologo",
            telefono: "3203237766",
            direccion: "calle 1 miami",
            fechaNacimiento: "1998-04-17",
            TipoDocumento: "Cedula de ciudadania",
            psicologo_id: "1234567891",
            email: "rony@gmail.com",
            password: "pass1234",
            fechaEstudio: "2022-10-10",
            universidad: "universodad popular del cesar",
            areaPsicologica: "area1",
            areaEspecializacion: "especializacion1",
            mesesExperiencia: "0",
        };

        const nameInput = screen.getByPlaceholderText("Nombre");
        const apellidosInput = screen.getByPlaceholderText("Apellido");
        const sexoInput = screen.getByText("Sexo");
        const ocupacionInput = screen.getByText(/ocupacion/i);
        const telefonoInput = screen.getByPlaceholderText(/telefono/i);
        const direccionInput = screen.getByPlaceholderText(/direccion/i);
        const fechaNacimientoInput = screen.getByLabelText(/Fecha de nacimiento/i);
        const TipoDocumentoInput = screen.getByText(/Tipo de Documento/i);
        const paciente_idInput = screen.getByPlaceholderText(/Numero Identificacion/i);
        const emailInput = screen.getByPlaceholderText(/correo/i);
        const passwordInput = screen.getAllByPlaceholderText(/contraseña/i);
        const passwordrepeatInput = screen.getByPlaceholderText(/confirmar contraseña/i);
        const fechaEstudioInput = screen.getByPlaceholderText(/fecha Finalizacion Estudios/i);
        const universidadInput = screen.getByText("Universida de graduacion");
        const areaPsicologicaInput = screen.getByPlaceholderText(/Area Psicologica/i);
        const areaEspecializacionInput =screen.getByPlaceholderText(/Area de Especializacion/i);
        const mesesExperienciaInput =screen.getByPlaceholderText(/Meses de Experiencia/i);
        const submitButton = screen.getByRole("button", { name: /registrar/i });

        userEvent.type(nameInput, testData.name);
        userEvent.type(apellidosInput, testData.apellidos);
        userEvent.type(sexoInput, testData.sexo);
        userEvent.type(ocupacionInput, testData.ocupacion);
        userEvent.type(telefonoInput, testData.telefono);
        userEvent.type(direccionInput, testData.direccion);
        userEvent.type(fechaNacimientoInput, testData.fechaNacimiento);
        userEvent.type(TipoDocumentoInput, testData.TipoDocumento);
        userEvent.type(paciente_idInput, testData.paciente_id);
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
        
        expect(nameInput).toHaveValue(testData.name);

        server.close();

    });
});
