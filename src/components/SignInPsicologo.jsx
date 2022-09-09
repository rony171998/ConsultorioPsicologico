import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import RestApiModal from "./RestApiModal";

const SignInPsicologo = () => {

    const formSchema = Yup.object().shape({
        telefono: Yup.number()
            .required('El telefono es requerido')
            .min(10, 'El telefono debe tener 10 digitos')
            .max(10, 'El telefono debe tener 10 digitos'),
        contraseña: Yup.string()
            .required('La contraseña es requerida')
            .min(5, 'La contraseña debe tener al menos 5 caracteres')
            .max(20, 'La contraseña debe tener maximo 20 caracteres'),

        confirmarContraseña: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('contraseña')], 'Contraseñas no coinciden'),

        areaPsicologo: Yup.string()
            .required('El area psicológica es requerida')
            .min(4, 'El area psicológica debe tener al menos 3 caracteres')
            .max(20, 'El area psicológica debe tener maximo 20 caracteres')
            .matches(/^[a-zA-Z]+$/, 'El area psicológica solo puede contener letras'),
        universidadEgreso: Yup.string()
            .required('La universidad de egreso es requerida')
            .min(4, 'La universidad de egreso debe tener al menos 3 caracteres')
            .max(20, 'La universidad de egreso debe tener maximo 20 caracteres')
            .matches(/^[a-zA-Z]+$/, 'La universidad de egreso solo puede contener letras'),
        areaEspecializacion: Yup.string()
            .max(20, 'El Area de Especializacion es de maximo 20 caracteres')
            .matches(/^[a-zA-Z]+$/, 'El area psicológica solo puede contener letras'),

    });
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    const [show, setShow] = useState(false);

    const submit = data => {
        console.log(data);
        setShow(true);
        reset();

    };

    const handleClose = () => setShow(false);

    return (
        <Card className="mt-3 text-center">
            <Card.Header className="">
                <Card.Title>Registro de Psicologo</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Row>
                        <Col>
                            <InputGroup className="mb-2">

                                <Form.Control
                                    {...register("Nombre")}
                                    type="text"
                                    placeholder="Nombre"
                                    required
                                />

                                <Form.Control
                                    {...register("apellido")}
                                    type="text"
                                    placeholder="Apellido"
                                    required
                                />

                            </InputGroup>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicsexo"
                            >

                                <Form.Select {...register("sexo")} required>
                                    <option value="">Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>

                                </Form.Select>
                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasictelefono"
                            >

                                <Form.Control
                                    className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                                    {...register("telefono")}
                                    type="number"
                                    placeholder="telefono"
                                    required
                                />
                                <div className="invalid-feedback">{errors.telefono?.message}</div>
                            </Form.Group>
                            <Form.Group
                                className="mb-2"
                                controlId="formBasicdireccion"
                            >
                                <Form.Control
                                    {...register("direccion")}
                                    type="text"
                                    placeholder="Direccion"
                                    required
                                />

                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicfechaNacimiento"
                            >
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
                                <Form.Select {...register("tipoDocumento")} required>
                                    <option value="">Tipo de Documento</option>
                                    <option value="1">Cedula de Ciudadania</option>
                                    <option value="2">Cedula de Extranjeria</option>
                                    <option value="3">Pasaporte</option>

                                </Form.Select>
                                <Form.Control
                                    {...register("identificacion")}
                                    type="number"
                                    placeholder="Identificacion"
                                    required
                                />
                            </InputGroup>

                            <Form.Group className="mb-2" controlId="formBasiccorreo">

                                <Form.Control
                                    {...register("correo")}
                                    type="email"
                                    placeholder="Correo"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasiccontraseña">

                                <Form.Control
                                    className={`form-control ${errors.contraseña ? 'is-invalid' : ''}`}
                                    {...register("contraseña")}
                                    name="contraseña"
                                    type="password"
                                    placeholder="Contraseña"
                                    minLength="8"
                                    maxLength="16"
                                    required
                                />
                                <div className="invalid-feedback">{errors.contraseña?.message}</div>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicconfirmarContraseña">

                                <Form.Control
                                    className={`form-control ${errors.confirmarContraseña ? 'is-invalid' : ''}`}
                                    {...register("confirmarContraseña")}
                                    name="confirmarContraseña"
                                    type="password"
                                    placeholder="Confirmar Contraseña"
                                    required
                                />
                                <div className="invalid-feedback">{errors.confirmarContraseña?.message}</div>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                                className="mb-2"
                                controlId="formBasicfechaEstudios"
                            >
                                <Form.Label>Fecha Finalizacion de Estudios</Form.Label>
                                <Form.Control
                                    {...register("fechaEstudios")}
                                    type="date"
                                    placeholder="dd/mm/aaaa"
                                    required
                                    max="2022-09-31"
                                    min="1980-01-01"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicareaPsicologo"
                            >

                                <Form.Control
                                    {...register("areaPsicologo")}
                                    type="text"
                                    placeholder="Area Psicologica"
                                    required
                                />

                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicmesesExperiencia"
                            >
                                <Form.Label>Meses de experiencia</Form.Label>
                                <Form.Control
                                    {...register("mesesExperiencia")}
                                    type="number"
                                    placeholder="Meses de Experiencia"
                                    maxLength="2"
                                    minLength="0"
                                    defaultValue="0"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicuniversidadEgreso"
                            >

                                <Form.Control
                                    {...register("universidadEgreso")}
                                    type="text"
                                    placeholder="Universidad de Egreso"
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicareaEspecializacion"
                            >

                                <Form.Control
                                    {...register("areaEspecializacion")}
                                    type="text"
                                    placeholder="Area de Especializacion"

                                />
                            </Form.Group>

                        </Col>
                    </Row>
                    <Button variant="danger" className="mx-1" >
                        Cancelar
                    </Button>

                    <Button variant="primary" type="submit" className="mx-1">
                        Registrar
                    </Button>

                    <RestApiModal show={show} handleClose={handleClose} />

                </Form>
            </Card.Body>
        </Card>
    );
};

export default SignInPsicologo;
