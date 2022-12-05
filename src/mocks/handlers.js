import { rest } from "msw";

export const handlers = [
    rest.post(
        "http://localhost:4000/api/v1/psicologo/login",
        (req, res, ctx) => {
            return res(
                ctx.status(400),
                ctx.json({
                    error: {
                        response: {
                            status: 400,
                            statusText: "Bad Request",
                        },
                    },
                })
            );
        }
    ),
    rest.post(
        "http://localhost:4000/api/v1/paciente/login",
        (req, res, ctx) => {
            return res(
                ctx.json({
                    response: {
                        status: 200,
                        statusText: "OK",
                        data: {
                            status: "success",
                            token: "token",
                        },
                    },
                })
            );
        }
    ),
];
