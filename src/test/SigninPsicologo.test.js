import { SignInPaciente } from "../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("SignInPaciente", () => {
    it("should render the component", () => {
        render(<SignInPaciente />);

        server.use(
            rest.post(
                "http://localhost:4000/api/v1/psicologo",
                (req, res, ctx) => {
                    return res(
                        ctx.json({
                            id: 1,
                            nombre: "Psicologo",
                        })
                    );
                }
            )
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
        const fechaEstudioInput = screen.getByLabelText(/fechaEstudio/i);
        const universidadInput = screen.getByLabelText(/universidad/i);
        const areaPsicologicaInput = screen.getByLabelText(/areaPsicologica/i);
        const areaEspecializacionInput = screen.getByLabelText(/areaEspecializacion/i);
        const mesesExperienciaInput = screen.getByLabelText(/mesesExperiencia/i);
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
        userEvent.type(fechaEstudioInput, testData.fechaEstudio);
        userEvent.type(universidadInput, testData.universidad);
        userEvent.type(areaPsicologicaInput, testData.areaPsicologica);
        userEvent.type(areaEspecializacionInput, testData.areaEspecializacion);
        userEvent.type(mesesExperienciaInput, testData.mesesExperiencia);
        
        userEvent.click(submitButton);

        //expect(screen.getByText("Sign In")).toBeInTheDocument();
    });
});
