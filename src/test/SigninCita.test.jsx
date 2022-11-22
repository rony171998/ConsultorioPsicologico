import { SignInCita } from "../components";
import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";

describe("SigninCita", () => {

    it("SigninCita", async () => {

        render(<SignInCita />);
        server.use(
            rest.post("/cita", (req, res, ctx) => {
                return res(ctx.status(404), ctx.json({ message: "No existe el usuario" }));
            })
        );

        const testData = {
            "fecha": "2022-10-13",
            "hora": "10:00",
            "psicologo_id": "1",
            "paciente_id": "1",
            "motivo": "unos pedillos"
        }

        const fechaInput = screen.getByLabelText(/fecha/i);
        const horaInput = screen.getByLabelText(/hora/i);
        const psicologoInput = screen.getByLabelText(/psicologo_id/i);
        const pacienteInput = screen.getByLabelText(/paciente_id/i);
        const motivoInput = screen.getByLabelText(/motivo/i);

        userEvent.type(fechaInput, testData.fecha);
        userEvent.type(horaInput, testData.hora);
        userEvent.selectOptions(psicologoInput, testData.psicologo_id);
        userEvent.type(pacienteInput, testData.paciente_id);
        userEvent.type(motivoInput, testData.motivo);

        const submitButton = screen.getByRole("button", { name: /registrar/i });

        userEvent.click(submitButton);
        const Message = screen.findByText(/alert/i);


    });
});