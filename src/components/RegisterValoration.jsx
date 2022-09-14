import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RestApiModal } from ".";

const RegisterValoration = () => {


    const { register, handleSubmit, reset } = useForm()
    const [show, setShow] = useState(false);

    const submit = data => {
        console.log(data);
        setShow(true);
        reset();

    };
    const handleClose = () => setShow(false);

    return (

        <Card className="my-5 text-center">
            <Card.Header className="">
                <Card.Title>Registro de Valoracion</Card.Title>
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
                                    {...register("identificacionPaciente")}
                                    type="number"
                                    placeholder="Identificacion del Paciente"
                                    required
                                />
                            </InputGroup>

                            <Form.Group className="mb-2" controlId="formBasicfechaValoracion">

                                <Form.Control
                                    {...register("fechaValoracion")}
                                    type="date"
                                    placeholder="fecha y hora de la Valoracion"
                                    min="2022-08-01"
                                    max="2022-10-31"
                                    
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicfechaValoracion">

                                <Form.Control
                                    {...register("fechaValoracion")}
                                    type="time"
                                    placeholder="fecha y hora de la Valoracion"
                                    min="07:00"
                                    max="17:00"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicmotivoConsulta">
                                <Form.Label>Motivo de la Consulta</Form.Label>
                                <Form.Control
                                    {...register("motivoConsulta")}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Motivo de la Consulta"
                                    required
                                    minLength="10"
                                    maxLength="100"

                                />

                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicobservaciones">
                                <Form.Label>Observaciones generales de conducta</Form.Label>
                                <Form.Control
                                    {...register("observaciones")}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Observaciones generales de conducta"
                                    required
                                    minLength="10"
                                    maxLength="100"

                                />

                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasictest">
                                <Form.Select {...register("test")} required>
                                    <option value="">Test</option>
                                    <option value="1">Test de Rorschach</option>
                                    <option value="2">Test de TAT</option>
                                    <option value="3">Test de WISC</option>
                                    <option value="4">Test de WPPSI</option>
                                    <option value="5">Test de WISC-IV</option>

                                </Form.Select>

                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicanalisis">
                                <Form.Label>Analisis e interpretacion de resultados</Form.Label>
                                <Form.Control
                                    {...register("analisis")}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Analisis e interpretacion de resultados"
                                    required
                                    minLength="10"
                                    maxLength="100"

                                />

                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicdiagnostico">
                                <Form.Label>Diagnostico</Form.Label>
                                <Form.Control
                                    {...register("diagnostico")}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Diagnostico"
                                    required
                                    minLength="10"
                                    maxLength="100"

                                />

                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicpronostico">
                                <Form.Label>Pronostico de la Consulta</Form.Label>
                                <Form.Control
                                    {...register("pronostico")}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Pronostico de la Consulta"
                                    required
                                    minLength="10"
                                    maxLength="100"

                                />

                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicrecomendaciones">
                                <Form.Label>Recomendaciones</Form.Label>
                                <Form.Control
                                    {...register("recomendaciones")}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Recomendaciones"
                                    required
                                    minLength="10"
                                    maxLength="100"

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

export default RegisterValoration;