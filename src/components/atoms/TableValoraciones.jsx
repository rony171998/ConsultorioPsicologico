import React from 'react';
import { Card, Table } from 'react-bootstrap';

const TableValoraciones = ({ dates }) => {
    return (
        <div>
            <Card className='my-2 text-center'>
                <Card.Header>
                    <Card.Title>Valoraciones</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Motivo</th>
                                <th>diagnostico</th>
                                <th>observaciones</th>
                                <th>recomendaciones</th>
                                <th>test</th>
                                <th>Paciente</th>
                                <th>Psicologo</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dates.map(date => (
                                <tr key={date.id}>
                                    <td>{date.fecha}</td>
                                    <td>{date.hora}</td>
                                    <td>{date.motivo}</td>
                                    <td>{date.diagnostico}</td>
                                    <td>{date.observaciones}</td>
                                    <td>{date.recomendaciones}</td>
                                    <td>{date.test}</td>
                                    <td>{date.pacienteId}</td>
                                    <td>{date.psicologoId}</td>
                                    <td>{date.status}</td>                                   
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};


export default TableValoraciones;