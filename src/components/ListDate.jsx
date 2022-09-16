import React from 'react';
import { Card, Table, Toast, ToastHeader } from 'react-bootstrap';

const ListDate = () => {
    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title>Mis citas</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Nombre</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2021-10-10 10:00:00</td>
                                <td>Juan Perez</td>
                                <td>Activa</td>
                            </tr>
                            
                        </tbody>
                    </Table>

                </Card.Body>

            </Card>
        </div>
    );
};

export default ListDate;