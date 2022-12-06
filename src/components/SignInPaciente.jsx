import React from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {registerPaciente} from "../store/slices/paciente.slice"
import { useDispatch } from "react-redux";

const SignInPaciente = () => {
    const formSchema = Yup.object().shape({
        telefono: Yup.string()
            .required("El telefono es requerido")
            .matches(/^[0-9]+$/, "El telefono debe ser numerico")
            .min(10, "El telefono debe tener al menos 10 digitos")
            .max(10, "El telefono debe tener maximo 10 digitos"),
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

    const submit = data => {
        console.log(data);
        dispatch(registerPaciente(data));
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
                                <Form.Select {...register("sexo")} data-testid="select-sexo"  required>
                                    <option value="">Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Select {...register("EPS")} data-testid="select-EPS"  required>
                                    <option value="">EPS</option>
                                    <option value="sanitas">Sanitas</option>
                                    <option value="salutotal">Salu Total</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Select
                                    {...register("ocupacion")} data-testid="select-ocupacion" 
                                    required
                                >
                                    <option value="">Ocupacion</option>
                                    <option value="estudiante">Estudiante</option>
                                    <option value="profecional">Profesional</option>
                                </Form.Select>
                            </Form.Group>
                            <InputGroup className="mb-2">
                                <Form.Control
                                    className={`form-control ${errors.telefono ? "is-invalid" : ""
                                        }`}
                                    {...register("telefono")}
                                    type="text"
                                    placeholder="telefono"
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.telefono?.message}
                                </div>
                                <Form.Control
                                    {...register("direccion")}
                                    type="text"
                                    placeholder="Direccion"
                                    required
                                />
                            </InputGroup>

                            <Form.Group className="mb-2">
                                <Form.Control
                                    {...register("fechaNacimiento")}
                                    type="date"
                                    placeholder="Fecha de Nacimiento"
                                    min="1950-01-01"
                                    max="2004-12-31"
                                    required
                                />
                            </Form.Group>
                            <InputGroup className="mb-2">
                                <Form.Select
                                    {...register("TipoDocumento")}  data-testid="select-documento" 
                                    required
                                >
                                    <option value="">Tipo de Documento</option>
                                    <option value="1">
                                        Cedula de Ciudadania
                                    </option>
                                    <option value="2">
                                        Cedula de Extranjeria
                                    </option>
                                    <option value="3">Pasaporte</option>
                                </Form.Select>
                                <Form.Control
                                    {...register("paciente_id")}
                                    type="number"
                                    placeholder="Numero de Identificacion"
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

export default SignInPaciente;
