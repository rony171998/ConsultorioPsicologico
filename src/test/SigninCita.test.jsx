import { SignInCita } from "../components";
import { act, render, screen, waitFor } from "@testing-library/react";
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
            TipoDocumento: "Cedula de Ciudadania",
            paciente_id: "123456789", 
            psicologo_id: "Selecione un Psicologo",
            fecha: "2",
            hora: "10:00",
            motivo: "unos pedillos para pedir la cita"
        }

        const TipoDocumentoInput = screen.getByTestId("select-documento");
        const paciente_idInput = screen.getByPlaceholderText(/Numero de Identificacion/i);
        const psicologo_idInput = screen.getByTestId("select-psicologo");
        const fechaInput = screen.getByPlaceholderText(/Fecha de la cita/i);
        const horaInput = screen.getByLabelText(/hora/i);
        const motivoInput = screen.getByLabelText(/motivo/i);

        userEvent.selectOptions(TipoDocumentoInput, [screen.getByText(testData.TipoDocumento)]);
        userEvent.type(paciente_idInput, testData.paciente_id);
        userEvent.selectOptions(psicologo_idInput, [screen.getByText(testData.psicologo_id)]); 
        userEvent.type(fechaInput, testData.fecha);
        userEvent.type(horaInput, testData.hora);
        userEvent.type(motivoInput, testData.motivo);

        const submitButton = screen.getByRole("button", { name: /registrar/i });

        server.listen();
        userEvent.click(submitButton);
        await waitFor(() => expect(submitButton).not.toBeDisabled());
        
        expect(motivoInput).toHaveValue(testData.motivo);

        server.close();
    });
});