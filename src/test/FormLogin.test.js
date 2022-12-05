import { FormLogin } from "../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "../store";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";

describe("LoginUsertoServer", () => {
    const serverPsicologo = setupServer(
        rest.post(
            "http://localhost:4000/api/v1/psicologo/login",
            (req, res, ctx ) => {
                return res(
                    ctx.json(
                        (res = {
                            status: 200,
                            statusText: "OK",
                            data: {
                                status: "success",
                                token: "token",
                            },
                        })
                    )
                );
            }
        )
    );

    const serverPaciente = setupServer(
        rest.post(
            "http://localhost:4000/api/v1/paciente/login",
            (req, res, ctx) => {
                return res(
                    ctx.json(
                        (res = {
                            status: 200,
                            statusText: "OK",
                            data: {
                                status: "success",
                                token: "token",
                            },
                        })
                    )
                );
            }
        )
    );

    it("Login user", async () => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <FormLogin />
                </HashRouter>
            </Provider>
        );

        const mockUser = {
            rol: "Psicologo",
            email: "rony@gmail.com",
            password: "pass1234",
        };

        const typeuser = screen.getByTestId("select-rol");
        const emailInput = screen.getByPlaceholderText("Enter email");
        const passwordInput = screen.getByPlaceholderText("Contraseña");

        userEvent.selectOptions(typeuser, [screen.getByText(mockUser.rol)]);
        userEvent.type(emailInput, mockUser.email);
        userEvent.type(passwordInput, mockUser.password);
        const submitButton = screen.getByRole("button", { name: /login/i });

        //serverPaciente.listen();
        serverPsicologo.listen();

        userEvent.click(submitButton);

        expect(submitButton).toBeVisible();


        serverPsicologo.close();
        //serverPaciente.close();
    });
});
