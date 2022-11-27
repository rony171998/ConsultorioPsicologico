import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SignInCita } from "../components";
import TableDates from "../components/atoms/TableDates";
import TablePsicologos from "../components/atoms/TablePsicologos";
import TablePacientes from "../components/atoms/TablePacientes";
import { getCitas } from "../store/slices/cita.slice"; 

const Admin = () => {
    const dispatch = useDispatch();
    let dates = useSelector(state => state.cita);
    const [psicologos, setPsicologos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    

    useEffect(() => {
        dispatch(getCitas());
    }, [dispatch]);

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/psicologo")
            .then(res => res.json())
            .then(data => setPsicologos(data.psicologos))
            .catch(err => console.log(err));

        fetch("http://localhost:4000/api/v1/paciente")
            .then(res => res.json())
            .then(data => setPacientes(data.pacientes))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Row className="my-2">
                <Col lg="7">
                    <TableDates dates={dates} />
                    <TablePacientes dates={pacientes} />
                </Col>
                <Col>
                    <SignInCita />
                </Col>
            </Row>
            <TablePsicologos dates={psicologos} />
        </div>
    );
};

export default Admin;
