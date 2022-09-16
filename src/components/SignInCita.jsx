import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RestApiModal from "./RestApiModal";

const SignInCita = () => {
    const { register, handleSubmit, reset} = useForm()
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const submit = data => {
        console.log(data);
        setShow(true);
        reset();

    };
    const handleClose = () => setShow(false);

    return (
        <Card className="mt-3 text-center">
            <Card.Header className="">
                <Card.Title>Registro de Citas</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Row>
                    <Col>
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
                            <Form.Group>
                                <Form.Select {...register("Psicologo")} required>
                                    <option value="">Psicologo</option>
                                    <option value="1">Juan Perez</option>
                                    <option value="2">Maria Lopez</option>
                                    <option value="3">Pedro Martinez</option>

                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                className="mb-2"
                                controlId="formBasicfechaNacimiento"
                            >   
                                <Form.Label>Fecha de Cita</Form.Label>
                                <Form.Control
                                    {...register("fechaNacimiento")}
                                    type="datetime-local"
                                    placeholder="Fecha de Nacimiento"
                                    min={new Date().toISOString().split("T")[0]}
                                    max="2022-12-31 17:00"
                                    required

                                />
                            </Form.Group>                           
                            
                        </Col>
                        
                    </Row>
                    <Button variant="danger" className="mx-1" onClick={navigate("/")}>
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

export default SignInCita;