import { FormLogin } from "../components";
import { render, screen   } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { server } from "../mocks/server";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

describe("LoginUsertoServer", () => {

    test("should show error message if user does not exist", async () => {
        
        render(<Router ><FormLogin /></Router>);

        /*
        server.use(
            rest.post("/paciente/login", (req, res, ctx) => {
                return res(ctx.status(404), ctx.json({ message: "No existe el usuario" }));
            })
        );
        */
        const typeuser = screen.getByLabelText(/rol/i);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        
        userEvent.selectOptions(typeuser, "paciente");
        userEvent.type(emailInput, "rony@gmail.com");
        userEvent.type(passwordInput, "pass1234");

        const submitButton = screen.getByRole("button", { name: /login/i });
        userEvent.click(submitButton);

        const alertMock = jest.spyOn(window,'alert').mockImplementation();
        //expect(alertMock).toHaveBeenCalledTimes(1)

        const token = localStorage.getItem("token");
        expect(token).toBeNull();
        
    });
});



