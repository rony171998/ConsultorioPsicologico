import React from "react";
import { Card, Table } from "react-bootstrap";

const TableEmpleados = ({ dates }) => {
    return (
        <div>
            <Card className="my-2 text-center">
                <Card.Header>
                    <Card.Title>Empleados</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Estatus</th>
                                <th>email</th>
                                <th>Fecha registro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dates &&
                            dates.map(date => (
                                <tr key={date.id}>
                                    <td>{date.name + " " + date.apellidos}</td>
                                    <td>{date.status}</td>
                                    <td>{date.email}</td>
                                    <th>{date.createdAt}</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TableEmpleados;
