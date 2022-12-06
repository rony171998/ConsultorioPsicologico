import { SignUpValoration } from "../components";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { setupServer } from "msw/node";

describe("SignUpValoracion", () => {

    const server = setupServer(
        rest.post("http://localhost:4000/api/v1/valoracion", (req, res, ctx) => {
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
                    <SignUpValoration />
                </HashRouter>
            </Provider>
        );

        const testData = {
            TipoDocumento: "Cedula de Ciudadania",
            paciente_id: "1234567891",
            fechaCita: "2022-10-10",
            horaCita: "10:00",
            motivoCita: "motivo1",
            observaciones: "observaciones1",
            test:"Test de TAT",
            analisis: "analisis1",
            diagnostico: "diagnostico1",
            pronostico: "pronostico1",
            recomendaciones: "recomendaciones1",
        };

        const TipoDocumentoInput = screen.getByTestId("select-documento");
        const paciente_idInput = screen.getByPlaceholderText(/Identificacion del Paciente/i);
        const fechaCitaInput = screen.getByPlaceholderText(/fecha de la Valoracion/i);
        const horaCitaInput = screen.getByPlaceholderText(/hora de la valoracion/i);
        const motivoCitaInput = screen.getByPlaceholderText(/Motivo de la Consulta/i);
        const observacionesInput = screen.getByPlaceholderText(/Observaciones generales de conducta/i);
        const testInput = screen.getByTestId("select-test");
        const analisisInput = screen.getByPlaceholderText(/Analisis e interpretacion de resultados/i);
        const diagnosticoInput = screen.getByPlaceholderText(/Diagnostico/i);
        const pronosticoInput = screen.getByPlaceholderText(/Pronostico de la Consulta/i);
        const recomendacionesInput = screen.getByPlaceholderText(/Recomendaciones/i);
        const submitButton = screen.getByRole("button", { name: /registrar/i });

        userEvent.selectOptions(TipoDocumentoInput, [screen.getByText(testData.TipoDocumento)]); 
        userEvent.type(paciente_idInput, testData.paciente_id);
        userEvent.type(fechaCitaInput, testData.fechaCita);
        userEvent.type(horaCitaInput, testData.horaCita);
        userEvent.type(motivoCitaInput, testData.motivoCita);
        userEvent.type(observacionesInput, testData.observaciones);
        userEvent.selectOptions(testInput, [screen.getByText(testData.test)]); 
        userEvent.type(analisisInput, testData.analisis);
        userEvent.type(diagnosticoInput, testData.diagnostico);
        userEvent.type(pronosticoInput, testData.pronostico);
        userEvent.type(recomendacionesInput, testData.recomendaciones);

        server.listen();
        userEvent.click(submitButton);
        await waitFor(() => expect(submitButton).not.toBeDisabled());
        
        expect(motivoCitaInput).toHaveValue(testData.motivoCita);

        server.close();
    });
});
