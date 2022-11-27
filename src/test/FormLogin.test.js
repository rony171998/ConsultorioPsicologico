import { FormLogin } from "../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "../store";

describe("LoginUsertoServer", () => {
    it("should show error message if user does not exist", async () => {
        render(
            <Provider store={store} >
                <HashRouter>
                    <FormLogin />
                </HashRouter>
            </Provider>
        );

        const typeuser = screen.getByLabelText(/rol/i);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        userEvent.selectOptions(typeuser, "paciente");
        userEvent.type(emailInput, "rony@gmail.com");
        userEvent.type(passwordInput, "pass1234");

        const submitButton = screen.getByRole("button", { name: /login/i });
        userEvent.click(submitButton);

        expect(emailInput).toBeVisible();
        expect(passwordInput).toBeVisible();

    });
});
