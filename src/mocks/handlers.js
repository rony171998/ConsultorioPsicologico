import { rest } from 'msw'

export const handlers = [
    
    rest.get("http://localhost:4000/api/v1/paciente/login", (req, res, ctx) => {
        return res(ctx.status(200)
            
        )
    }),
    rest.post("http://localhost:4000/api/v1/paciente/login", (req, res, ctx) => {
        return res(ctx.status(200))
    })


]

        