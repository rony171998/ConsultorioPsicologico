import { SignInCita } from "../components";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { setupServer } from "msw/lib/node";

describe("SigninCita", () => {

    const server = setupServer(
        rest.post("http://localhost:4000/api/v1/cita", (req, res, ctx) => {
            return res(
                ctx.json(200),
            );
        })
    );

    it("SigninCita", async () => {

        render(
            <Provider store={store} >
                <HashRouter>
                    <SignInCita />
                </HashRouter>
            </Provider>
        );

        const testData = {
            TipoDocumento: "Cedula de ciudadania",
            paciente_id: "123456789",
            fecha: "11/11/2021",
            hora: "10:00",
            motivo: "unos pedillos"
        }

        const TipoDocumentoInput = screen.getByText(/Tipo de Documento/i);
        const paciente_idInput = screen.getByPlaceholderText(/Numero de Identificacion/i);
        const fechaInput = screen.getByLabelText(/fecha/i);
        const horaInput = screen.getByLabelText(/hora/i);
        const motivoInput = screen.getByLabelText(/motivo/i);

        userEvent.type(TipoDocumentoInput, testData.TipoDocumento);
        userEvent.type(paciente_idInput, testData.paciente_id);
        userEvent.type(fechaInput, testData.fecha);
        userEvent.type(horaInput, testData.hora);
        userEvent.type(motivoInput, testData.motivo);

        const submitButton = screen.getByRole("button", { name: /registrar/i });

        server.listen();
        userEvent.click(submitButton);
        
        expect(motivoInput).toHaveValue(testData.motivo);

        server.close();
    });
});