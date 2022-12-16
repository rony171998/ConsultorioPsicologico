import React, { useState, useEffect } from "react";
import { Button, Card, Form, InputGroup, } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCita } from "../store/slices/cita.slice";

const SignInCita = () => {
    const { register, handleSubmit, reset } = useForm();
    const [psicologos, setPsicologos] = useState([]);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const submit = data => {
        console.log(data);
        dispatch(createCita(data));
        reset();
    };

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/psicologo")
            .then(res => res.json())
            .then(data => setPsicologos(data.psicologos))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="text-center">
            <Card.Body className="px-5">
                <Form onSubmit={handleSubmit(submit)}>
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
                    <Form.Group
                        className="mb-2"
                        controlId="formBasicPsicologo_id"
                    >
                        <Form.Select
                            {...register("psicologo_id")} data-testid="select-psicologo"
                            required
                        >
                            <option value="">
                                Selecione un Psicologo
                            </option>
                            {psicologos.map((psicologo , index) => (
                                <option
                                    key={psicologo.id}
                                    value={psicologo.id}
                                >
                                    {psicologo.name +
                                        " " +
                                        psicologo.apellidos}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group
                        className="mb-2"
                        controlId="formBasicfecha"
                    >
                        <Form.Label>Fecha de Cita</Form.Label>
                        <Form.Control
                            {...register("fecha")}
                            type="date"
                            placeholder="Fecha de la cita"
                            min={new Date().toISOString().split("T")[0]}
                            max="2022-12-31"
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-2"
                        controlId="formBasichora"
                    >
                        <Form.Label>Hora de Cita</Form.Label>
                        <Form.Control
                            {...register("hora")}
                            type="time"
                            placeholder="Hora de la cita"
                            min="07:00"
                            max="17:00"
                            pattern="[0-9]{2}:[0-9]{2}"
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-2"
                        controlId="formBasicmotivo"
                    >
                        <Form.Label>Motivo de Cita</Form.Label>
                        <Form.Control
                            {...register("motivo")}
                            type="text"
                            placeholder="Motivo de la cita"
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mx-1">
                        {isLoading ? "Cargando..." : "Crear Cita"}
                    </Button>
                </Form>
            </Card.Body>
        </div>
    );
};

export default SignInCita;
