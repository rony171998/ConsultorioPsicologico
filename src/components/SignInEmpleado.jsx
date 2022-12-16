import React from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostEmpleadoMutation } from "../store/api/empleadoapi";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

const SignInEmpleado = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required("La contraseña es requerida")
            .min(8, "La contraseña debe tener al menos 8 caracteres")
            .max(20, "La contraseña debe tener maximo 20 caracteres"),

        confirmarContraseña: Yup.string()
            .required("La confirmacion de contraseña es requerida")
            .oneOf([Yup.ref("password")], "Contraseñas no coinciden"),
    });

    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const dispatch = useDispatch();
    const [postEmpleado] = usePostEmpleadoMutation();

    const submit = (data , event )=> {
        event.preventDefault();
        console.log(data);
        dispatch(postEmpleado(data));
        reset();
    };

    return (
        <div className="mt-3 text-center">
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Row>
                        <Col>
                            <InputGroup className="mb-2">
                                <Form.Control
                                    {...register("name")}
                                    type="text"
                                    placeholder="Nombre"
                                    required
                                />                               

                                <Form.Control
                                    {...register("apellidos")}
                                    type="text"
                                    placeholder="Apellido"
                                    required
                                />
                            </InputGroup>

                            <Form.Group className="mb-2">
                                <Form.Control
                                    {...register("email")}
                                    type="email"
                                    placeholder="Correo"
                                    required
                                />
                            </Form.Group>
                            <InputGroup className="mb-2">
                                <Form.Control
                                    {...register("password")} data-testid="contraseña"
                                    type="password"
                                    placeholder="Contraseña"
                                    minLength="8"
                                    maxLength="16"
                                    isInvalid={errors.password}
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.password?.message}
                                </div>

                                <Form.Control
                                    {...register("confirmarContraseña")} data-testid="confirmarContraseña"
                                    type="password"
                                    placeholder="Confirmar Contraseña"
                                    isInvalid={errors.confirmarContraseña}
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.confirmarContraseña?.message}
                                </div>
                            </InputGroup>
                        </Col>
                    </Row>
                    
                    <Button variant="primary" type="submit" className="mx-1">
                        Registrar
                    </Button>
                </Form>
            </Card.Body>
        </div>
    );
};

export default SignInEmpleado;
