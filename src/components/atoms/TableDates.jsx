import React from "react";
import { Card, Table } from "react-bootstrap";

const TableDates = ({ dates }) => {
    return (
        <div>
            <Card className="my-2 text-center">
                <Card.Header>
                    <Card.Title>Citas</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Estado</th>
                                <th>Paciente</th>
                                <th>Psicologo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dates.map(date => (
                                <tr key={date.id}>
                                    <td>{date.fecha}</td>
                                    <td>{date.hora}</td>
                                    <td>{date.estado}</td>
                                    <td>
                                        {date.paciente?.name +
                                            " " +
                                            date.paciente?.apellidos}
                                    </td>
                                    <td>
                                        {date.psicologo?.name +
                                            " " +
                                            date.psicologo?.apellidos}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TableDates;
