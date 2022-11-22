import React from 'react';
import { Card, Table } from 'react-bootstrap';

const TablePsicologos = ({dates}) => {
    return (
        <div>
            <Card className='my-2 text-center'>
                <Card.Header>
                    <Card.Title>Citas</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Ocupacion</th>
                                <th>Estatus</th>
                                <th>Sexo</th>
                                <th>Telefono</th>
                                <th>Email</th>
                                <th>Universidad</th>
                                <th>Area especialidad</th>
                                <th>Meses experiencia</th>
                                <th>Area psicologica</th>
                                <th>Fecha registro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dates.map(date => (
                                <tr key={date.id}>
                                    <td>{date.name+" "+date.apellidos}</td>
                                    <td>{date.ocupacion}</td>
                                    <td>{date.status}</td>
                                    <td>{date.sexo}</td>
                                    <td>{date.telefono}</td>
                                    <td>{date.email}</td>
                                    <td>{date.universidad}</td>
                                    <td>{date.areaEspecializacion}</td>
                                    <td>{date.mesesExperiencia}</td>
                                    <td>{date.areaPsicologica}</td>
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


export default TablePsicologos;