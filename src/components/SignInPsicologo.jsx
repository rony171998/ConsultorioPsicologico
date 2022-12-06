import React from "react";
import { Button, Card, Col, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { registerPsicologo } from "../store/slices/psicologo.slice";
import { useDispatch } from "react-redux";

const SignInPsicologo = () => {
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required("El nombre es requerido")
            .min(3, "El nombre debe tener al menos 3 caracteres"),

        telefono: Yup.string()
            .required("El telefono es requerido")
            .matches(/^[0-9]+$/, "El telefono debe ser numerico")
            .min(10, "El telefono debe tener al menos 10 digitos")
            .max(10, "El telefono debe tener maximo 10 digitos"),
        password: Yup.string()
            .required("La contraseña es requerida")
            .min(5, "La contraseña debe tener al menos 5 caracteres")
            .max(20, "La contraseña debe tener maximo 20 caracteres"),

        confirmarContraseña: Yup.string()
            .required("Password is mendatory")
            .oneOf([Yup.ref("password")], "Contraseñas no coinciden"),

        areaPsicologica: Yup.string()
            .required("El area psicológica es requerida")
            .min(4, "El area psicológica debe tener al menos 3 caracteres")
            .max(20, "El area psicológica debe tener maximo 20 caracteres")
            .matches(
                /^[a-zA-Z]+$/,
                "El area psicológica solo puede contener letras"
            ),
        mesesExperiencia: Yup.number()
            .required("El numero de meses de experiencia es requerido")
            .min(0, "El numero de meses de experiencia debe ser positivo")
            .max(100, "El numero de meses de experiencia debe ser menor a 100"),

        universidadEgreso: Yup.string()
            .min(4, "La universidad de egreso debe tener al menos 3 caracteres")
            .max(20, "La universidad de egreso debe tener maximo 20 caracteres")
            .matches(
                /^[a-zA-Z]+$/,
                "La universidad de egreso solo puede contener letras"
            ),
        areaEspecializacion: Yup.string()
            .max(20, "El Area de Especializacion es de maximo 20 caracteres")
            .matches(
                /^[a-zA-Z]+$/,
                "El area psicológica solo puede contener letras"
            ),
    });
    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const dispatch = useDispatch();

    const submit = data => {
        console.log(data);
        dispatch(registerPsicologo(data));
        reset();
    };

    return (
        <div className="mt-3">
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Row xs={1} md={2}>
                        <Col>
                            <InputGroup className="mb-2">
                                <FloatingLabel label="Nombre">
                                    <Form.Control
                                        {...register("name")}
                                        type="text"
                                        placeholder="Nombre"
                                        required
                                    />
                                </FloatingLabel>
                                <FloatingLabel label="Apellido">
                                    <Form.Control
                                        {...register("apellidos")}
                                        type="text"
                                        placeholder="Apellido"
                                        required
                                    />
                                </FloatingLabel>
                            </InputGroup>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicsexo"
                            >
                                <Form.Select {...register("sexo")} data-testid="select-sexo" required>
                                    <option value="">Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Select
                                    {...register("ocupacion")} data-testid="select-ocupacion"
                                    required
                                >
                                    <option value="">Ocupacion</option>
                                    <option value="estudiante">Estudiante</option>
                                    <option value="profesional">Profesional</option>
                                </Form.Select>
                            </Form.Group>

                            <FloatingLabel
                                label="Telefono"
                                className="mb-2"
                                controlId="formBasictelefono"
                            >
                                <Form.Control
                                    className={`form-control ${errors.telefono ? "is-invalid" : ""
                                        }`}
                                    {...register("telefono")}
                                    type="number"
                                    placeholder="telefono"
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.telefono?.message}
                                </div>
                            </FloatingLabel>

                            <FloatingLabel
                                label="Direccion"
                                className="mb-2"
                                controlId="formBasicdireccion"
                            >
                                <Form.Control
                                    {...register("direccion")}
                                    type="text"
                                    placeholder="Direccion"
                                    required
                                />
                            </FloatingLabel>

                            <InputGroup>
                                <FloatingLabel label="Fecha de nacimiento" controlId="formBasicfechaNacimiento">
                                    <Form.Control
                                        className="mx-2"
                                        {...register("fechaNacimiento")}
                                        type="date"
                                        required
                                    />
                                </FloatingLabel>
                            </InputGroup>

                            <InputGroup className="mb-2">
                                <Form.Select
                                    {...register("TipoDocumento")} data-testid="select-documento"
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
                                    className="mx-2"
                                    {...register("psicologo_id")}
                                    type="number"
                                    placeholder="numero Identificacion"
                                    required
                                    minLength="7"
                                    maxLength="10"
                                />
                            </InputGroup>

                            <FloatingLabel label="Email"
                                className="mb-2"
                                controlId="formBasicemail"
                            >
                                <Form.Control
                                    {...register("email")}
                                    type="email"
                                    placeholder="Correo"
                                    required
                                />
                            </FloatingLabel>

                            <InputGroup className="mb-2">
                                <FloatingLabel label="Contraseña"
                                    className="mb-2"
                                    controlId="formBasicontraseña"
                                >
                                    <Form.Control
                                        className={`ml-2 form-control ${errors.password ? "is-invalid" : ""
                                            }`}
                                        {...register("password")} data-testid="contraseña"
                                        type="password"
                                        placeholder="Contraseña"
                                        minLength="8"
                                        maxLength="16"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {errors.password?.message}
                                    </div>
                                </FloatingLabel>
                                <FloatingLabel label="Contraseña"
                                    className="mb-2"
                                    controlId="formBasiccontraseña"

                                >
                                    <Form.Control
                                        className={`mr-2 form-control ${errors.confirmarContraseña
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        {...register("confirmarContraseña")} data-testid="confirmarContraseña"
                                        type="password"
                                        placeholder="Confirmar Contraseña"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {errors.confirmarContraseña?.message}
                                    </div>
                                </FloatingLabel>
                            </InputGroup>
                        </Col>
                        <Col>
                            <FloatingLabel
                                label="Universida de graduacion"
                                controlId="formBasicuniversidad"
                            >
                                <Form.Control
                                    className={`form-control ${errors.universidadEgreso ? "is-invalid" : ""}`}
                                    {...register("universidad")}
                                    type="text"
                                    placeholder="Universidad de Egreso"
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.universidadEgreso?.message}
                                </div>
                            </FloatingLabel>
                            <InputGroup>
                                <FloatingLabel
                                    label="Fecha finalizacion de estudios"
                                    controlId="formBasicfechaFinalizacionEstudios"
                                >
                                    <Form.Control
                                        {...register("fechaEstudio")}
                                        type="date"
                                        placeholder="fecha Finalizacion Estudios"
                                        required
                                        max={new Date().toISOString().split("T")[0]}
                                        min="1950-01-01"
                                    />
                                </FloatingLabel>
                            </InputGroup>
                            <FloatingLabel
                                label="Area Psicologica"
                                controlId="formBasicareaPsicologica"
                            >
                                <Form.Control
                                    className={`form-control ${errors.areaPsicologica
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    {...register("areaPsicologica")}
                                    type="text"
                                    placeholder="Area Psicologica"
                                    required

                                />
                                <div className="invalid-feedback">
                                    {errors.areaPsicologica?.message}
                                </div>
                            </FloatingLabel>

                            <FloatingLabel
                                label="Area Especializacion"
                                controlId="formBasicareaEspecializacion"
                            >
                                <Form.Control
                                    className={`form-control ${errors.areaEspecializacion
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    {...register("areaEspecializacion")}
                                    type="text"
                                    placeholder="Area de Especializacion"
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.areaEspecializacion?.message}
                                </div>
                            </FloatingLabel>
                            <FloatingLabel
                                label="Meses de experiencia"
                                controlId="formBasicmesesExperiencia"
                            >
                                <Form.Control
                                    className={`mx-2 form-control ${errors.mesesExperiencia
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    {...register("mesesExperiencia")}
                                    type="number"
                                    placeholder="Meses de Experiencia"
                                    maxLength="2"
                                    minLength="0"
                                    defaultValue="0"
                                />
                                <div className="invalid-feedback">
                                    {errors.mesesExperiencia?.message}
                                </div>
                            </FloatingLabel>

                        </Col>
                        <Button variant="primary" type="submit" className="mx-auto"
                            style={{ width: "20%" }}
                        >
                            Registrar
                        </Button>
                    </Row>
                </Form>
            </Card.Body>
        </div>
    );
};

export default SignInPsicologo;
