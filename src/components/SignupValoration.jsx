import React from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createValoracion } from "../store/slices/valoracion.slice";

const SignupValoration = () => {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.isLoading);

    const submit = data => {
        console.log(data);
        dispatch(createValoracion(data))       
        reset();
    };
    
    return (
        <div className="my-5 text-center">
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Row xs={1} md={2}>
                        <Col>
                            <InputGroup className="mb-2">
                                <Form.Select {...register("tipoDocumento")} data-testid="select-documento" required>
                                    <option value="">Tipo de Documento</option>
                                    <option value="1">Cedula de Ciudadania</option>
                                    <option value="2">Cedula de Extranjeria</option>
                                    <option value="3">Pasaporte</option>
                                </Form.Select>
                                <Form.Control
                                    {...register("paciente_id")}
                                    type="number"
                                    placeholder="Identificacion del Paciente"
                                    required
                                />
                            </InputGroup>

                            <Form.Group className="mb-2" controlId="formBasicfechaValoracion">

                                <Form.Control
                                    {...register("fecha")}
                                    type="date"
                                    placeholder="fecha de la Valoracion"
                                    min="2022-08-01"
                                    max={new Date().toISOString().split("T")[0]}                                  
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicfechaValoracion">

                                <Form.Control
                                    {...register("hora")}
                                    type="time"
                                    placeholder="hora de la Valoracion"
                                    min="07:00"
                                    max="17:00"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicmotivoConsulta">
                                 <Form.Control
                                    {...register("motivo")}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Motivo de la Consulta"
                                    required
                                    minLength="10"
                                    maxLength="100"
                                />

                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicobservaciones">
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
                                <Form.Select {...register("test")}  data-testid="select-test" required>
                                    <option value="">Test</option>
                                    <option value="1">Test de Rorschach</option>
                                    <option value="2">Test de TAT</option>
                                    <option value="3">Test de WISC</option>
                                    <option value="4">Test de WPPSI</option>
                                    <option value="5">Test de WISC-IV</option>
                                </Form.Select>

                            </Form.Group>
                            
                        </Col>
                        <Col>
                            <Form.Group className="mb-2" controlId="formBasicanalisis">
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
                    <Button variant="danger" className="mx-1">
                        Cancelar
                    </Button>

                    <Button variant="primary" type="submit" className="mx-1">
                        {isLoading ? "Loading..." : "Guardar"}
                    </Button>

                </Form>
            </Card.Body>
        </div>
    );
};

export default SignupValoration;