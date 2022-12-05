import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { swal } from "./swal";

export const FormLogin = () => {
    const { register, handleSubmit } = useForm();
    const form = useRef();
    const navigate = useNavigate();

    const submit = data => {

        axios.post(`/${data.rol}/login`, data)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                navigate(`/${data.rol}`);
                console.log(res.data);
            })
            .catch(error => {
                if (
                    error.response.status === 401 ||
                    error.response.status === 400
                ) {
                    swal("Error", error.response.data.message, "error");
                }
                if (error.response.status === 404) {
                    swal("Error", error.response.data.message, "error");
                }
                console.log(error.response);
            });
            
    };

    return (
        <div className="mx-auto text-center border-light">
            <Card.Body>
                <h1>Login</h1>

                <Form onSubmit={handleSubmit(submit)} ref={form}>
                    <Form.Group className="mb-3" controlId="formBasicRol">
                        <Form.Label>Test data</Form.Label>
                        <br />
                        <Form.Label>Email: rony@gmail.com</Form.Label>
                        <br />
                        <Form.Label>Password: pass1234</Form.Label>
                        <br />

                        <Form.Label className="">Rol</Form.Label>
                        <Form.Select {...register("rol")} data-testid="select-rol" required>
                            <option value="paciente">Paciente</option>
                            <option value="psicologo">Psicologo</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            {...register("email")}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            {...register("password")}
                            type="password"
                            placeholder="Contraseña"
                            minLength="8"
                            required
                        />
                    </Form.Group>
                    <Button id="buttonLogin" variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Label>Don't have an account? </Form.Label>
                    <br />
                    <a href="#/signup-paciente"> Sign Up</a>
                    
                </Form>
            </Card.Body>
        </div>
    );
};
